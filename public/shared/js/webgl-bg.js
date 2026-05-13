/* ============================================
   WEBGL BACKGROUND — OGL-based animated shader
   Activates on <canvas data-webgl-bg="VARIANT">
   Variants: aurora · noise · gradient · liquid · particles · grain
   Reads palette from CSS custom properties:
     --webgl-c1, --webgl-c2, --webgl-c3
   Pauses when off-screen (IntersectionObserver),
   respects prefers-reduced-motion,
   pauses on document hidden.
   ============================================ */

(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  async function init() {
    const canvases = document.querySelectorAll('canvas[data-webgl-bg]');
    if (!canvases.length) return;

    let ogl;
    try {
      ogl = await import('https://cdn.jsdelivr.net/npm/ogl@1.0.11/+esm');
    } catch (e) {
      console.warn('OGL load failed, WebGL backgrounds disabled', e);
      return;
    }
    const { Renderer, Program, Mesh, Triangle, Vec2, Vec3 } = ogl;

    canvases.forEach((canvas) => {
      const variant = canvas.dataset.webglBg || 'noise';

      function readCSSColor(name, fallback) {
        const v = getComputedStyle(canvas).getPropertyValue(name).trim();
        if (!v) return fallback;
        const m = v.match(/^#([0-9a-f]{6})$/i);
        if (m) {
          const n = parseInt(m[1], 16);
          return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
        }
        return fallback;
      }

      const c1 = readCSSColor('--webgl-c1', [0.05, 0.05, 0.08]);
      const c2 = readCSSColor('--webgl-c2', [0.35, 0.18, 0.42]);
      const c3 = readCSSColor('--webgl-c3', [0.85, 0.55, 0.30]);

      const renderer = new Renderer({
        canvas: canvas,
        dpr: Math.min(window.devicePixelRatio, 1.5),
        alpha: true,
        premultipliedAlpha: false,
      });
      const gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);

      const vertex = `
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
          vUv = position * 0.5 + 0.5;
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `;

      const fragments = {
        aurora: `
          precision highp float;
          varying vec2 vUv;
          uniform float uTime;
          uniform vec2 uResolution;
          uniform vec2 uMouse;
          uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;

          vec3 permute(vec3 x){return mod(((x*34.0)+1.0)*x, 289.0);}
          float snoise(vec2 v){
            const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
            vec2 i=floor(v+dot(v,C.yy)); vec2 x0=v-i+dot(i,C.xx);
            vec2 i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
            vec4 x12=x0.xyxy+C.xxzz; x12.xy-=i1;
            i=mod(i,289.0);
            vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
            vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);
            m=m*m; m=m*m;
            vec3 x=2.0*fract(p*C.www)-1.0; vec3 h=abs(x)-0.5; vec3 ox=floor(x+0.5);
            vec3 a0=x-ox;
            m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
            vec3 g; g.x=a0.x*x0.x+h.x*x0.y;
            g.yz=a0.yz*x12.xz+h.yz*x12.yw;
            return 130.0*dot(m,g);
          }

          void main() {
            vec2 uv = vUv;
            vec2 aspect = vec2(uResolution.x/uResolution.y, 1.0);
            vec2 p = (uv - 0.5) * aspect;
            float t = uTime * 0.08;
            float m = length(uMouse - uv) * 1.5;

            float n1 = snoise(p*1.2 + vec2(t, t*0.7) + uMouse*0.4);
            float n2 = snoise(p*2.4 - vec2(t*1.3, t*0.5));
            float n3 = snoise(p*0.6 + vec2(t*0.4, -t*0.2));

            float band1 = smoothstep(0.0, 0.9, sin(uv.y*3.0 + n1*2.0 + t*1.5)*0.5+0.5);
            float band2 = smoothstep(0.0, 0.85, sin(uv.y*5.0 + n2*2.2 + t*1.1)*0.5+0.5);
            float band3 = smoothstep(0.0, 0.8, cos(uv.y*2.0 + n3*1.6 - t*0.9)*0.5+0.5);

            vec3 col = uC1;
            col = mix(col, uC2, band1 * 0.85);
            col = mix(col, uC3, band2 * 0.65);
            col += uC3 * band3 * 0.25;
            col *= smoothstep(1.2, 0.2, length(p));    // vignette
            col += 0.04 * snoise(uv*900.0 + t*40.0);    // film grain

            gl_FragColor = vec4(col, 0.92);
          }
        `,

        noise: `
          precision highp float;
          varying vec2 vUv;
          uniform float uTime;
          uniform vec2 uResolution;
          uniform vec2 uMouse;
          uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;

          vec3 permute(vec3 x){return mod(((x*34.0)+1.0)*x, 289.0);}
          float snoise(vec2 v){
            const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
            vec2 i=floor(v+dot(v,C.yy)); vec2 x0=v-i+dot(i,C.xx);
            vec2 i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
            vec4 x12=x0.xyxy+C.xxzz; x12.xy-=i1;
            i=mod(i,289.0);
            vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
            vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);
            m=m*m; m=m*m;
            vec3 x=2.0*fract(p*C.www)-1.0; vec3 h=abs(x)-0.5; vec3 ox=floor(x+0.5);
            vec3 a0=x-ox;
            m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
            vec3 g; g.x=a0.x*x0.x+h.x*x0.y;
            g.yz=a0.yz*x12.xz+h.yz*x12.yw;
            return 130.0*dot(m,g);
          }

          vec3 palette(float t, vec3 a, vec3 b, vec3 c, vec3 d){
            return a + b * cos(6.28318 * (c*t + d));
          }

          void main(){
            vec2 uv = vUv;
            vec2 aspect = vec2(uResolution.x/uResolution.y, 1.0);
            vec2 p = (uv - 0.5) * aspect;
            float t = uTime * 0.06;
            p += (uMouse - 0.5) * 0.15;
            float n = snoise(p*1.2 + t);
            n += 0.5 * snoise(p*2.4 - t*1.3);
            n += 0.25 * snoise(p*4.8 + t*1.7);
            n = n*0.5 + 0.5;
            vec3 col = mix(uC1, uC2, smoothstep(0.2, 0.8, n));
            col = mix(col, uC3, smoothstep(0.6, 0.95, n));
            gl_FragColor = vec4(col, 0.9);
          }
        `,

        gradient: `
          precision highp float;
          varying vec2 vUv;
          uniform float uTime;
          uniform vec2 uResolution;
          uniform vec2 uMouse;
          uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;

          vec3 permute(vec3 x){return mod(((x*34.0)+1.0)*x, 289.0);}
          float snoise(vec2 v){
            const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
            vec2 i=floor(v+dot(v,C.yy)); vec2 x0=v-i+dot(i,C.xx);
            vec2 i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
            vec4 x12=x0.xyxy+C.xxzz; x12.xy-=i1;
            i=mod(i,289.0);
            vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
            vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);
            m=m*m; m=m*m;
            vec3 x=2.0*fract(p*C.www)-1.0; vec3 h=abs(x)-0.5; vec3 ox=floor(x+0.5);
            vec3 a0=x-ox;
            m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
            vec3 g; g.x=a0.x*x0.x+h.x*x0.y;
            g.yz=a0.yz*x12.xz+h.yz*x12.yw;
            return 130.0*dot(m,g);
          }

          void main(){
            vec2 uv = vUv;
            float t = uTime * 0.07;
            float n1 = snoise(uv*1.5 + vec2(t*0.7, t*0.2))*0.5+0.5;
            float n2 = snoise(uv*2.2 + vec2(-t*0.3, t*0.5))*0.5+0.5;
            vec2 mDelta = (uMouse - vec2(0.5)) * 0.15;
            float meshA = smoothstep(0.0, 1.0, uv.y + mDelta.y + (n1-0.5)*0.6);
            float meshB = smoothstep(0.0, 1.0, uv.x - mDelta.x + (n2-0.5)*0.6);
            vec3 a = mix(uC1, uC2, meshA);
            vec3 b = mix(uC2, uC3, meshB);
            vec3 col = mix(a, b, smoothstep(0.0, 1.0, n1*0.55 + n2*0.45));
            gl_FragColor = vec4(col, 0.9);
          }
        `,

        liquid: `
          precision highp float;
          varying vec2 vUv;
          uniform float uTime;
          uniform vec2 uResolution;
          uniform vec2 uMouse;
          uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;

          float hash(vec2 p){return fract(1e4*sin(17.0*p.x+p.y*0.1)*(0.1+abs(sin(p.y*13.0+p.x))));}
          float noise(vec2 p){
            vec2 i=floor(p), f=fract(p);
            float a=hash(i), b=hash(i+vec2(1,0)), c=hash(i+vec2(0,1)), d=hash(i+vec2(1,1));
            vec2 u=f*f*(3.0-2.0*f);
            return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y;
          }
          float fbm(vec2 p){
            float v=0.0, a=0.5;
            for(int i=0;i<5;i++){ v+=a*noise(p); p*=2.02; a*=0.5; }
            return v;
          }

          void main(){
            vec2 uv = vUv;
            vec2 aspect = vec2(uResolution.x/uResolution.y, 1.0);
            vec2 p = (uv - 0.5) * aspect;
            float t = uTime * 0.15;
            vec2 q = vec2(fbm(p + t*0.3), fbm(p - t*0.2 + 5.2));
            vec2 r = vec2(fbm(p + q*4.0 + t*0.4 + 1.7), fbm(p + q*4.0 + t*0.3 + 9.2));
            float f = fbm(p + r*4.0);
            vec3 col = mix(uC1, uC2, clamp((f*f)*3.5, 0.0, 1.0));
            col = mix(col, uC3, clamp(length(q), 0.0, 1.0)*0.6);
            col = mix(col, uC1, clamp(length(r.x), 0.0, 1.0)*0.4);
            float md = length(uMouse - uv);
            col += uC3 * (1.0 - smoothstep(0.0, 0.4, md)) * 0.25;
            gl_FragColor = vec4(col, 0.92);
          }
        `,

        particles: `
          precision highp float;
          varying vec2 vUv;
          uniform float uTime;
          uniform vec2 uResolution;
          uniform vec2 uMouse;
          uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;

          float hash(vec2 p){return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);}

          float dot2(vec2 v){return dot(v,v);}

          void main(){
            vec2 uv = vUv;
            vec2 aspect = vec2(uResolution.x/uResolution.y, 1.0);
            vec3 col = uC1;
            float t = uTime;
            for(int i=0; i<22; i++){
              float fi = float(i);
              float seed = hash(vec2(fi, fi*1.7));
              vec2 base = vec2(hash(vec2(fi, 5.1)), hash(vec2(fi, 9.3)));
              vec2 drift = vec2(
                sin(t*0.12 + fi*0.7) * 0.2,
                cos(t*0.08 + fi*1.1) * 0.25
              );
              vec2 mouseAtt = (uMouse - base - drift) * (0.05 + seed*0.05);
              vec2 pos = base + drift + mouseAtt;
              float d = length((pos - uv) * aspect);
              float radius = 0.005 + seed*0.025;
              float intensity = smoothstep(radius*4.0, 0.0, d);
              vec3 partColor = mix(uC2, uC3, seed);
              col += partColor * intensity * (0.4 + 0.6*sin(t + fi*1.7));
            }
            col = clamp(col, 0.0, 1.5);
            gl_FragColor = vec4(col, 0.92);
          }
        `,

        grain: `
          precision highp float;
          varying vec2 vUv;
          uniform float uTime;
          uniform vec2 uResolution;
          uniform vec2 uMouse;
          uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;

          float hash(vec2 p){return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);}

          void main(){
            vec2 uv = vUv;
            vec3 base = mix(uC1, uC2, uv.y);
            base = mix(base, uC3, smoothstep(0.7, 1.0, distance(uv, uMouse)));
            float grain = (hash(uv*uResolution.xy + uTime*60.0) - 0.5) * 0.12;
            base += grain;
            gl_FragColor = vec4(base, 0.95);
          }
        `,
      };

      const fragment = fragments[variant] || fragments.noise;

      const program = new Program(gl, {
        vertex,
        fragment,
        uniforms: {
          uTime: { value: 0 },
          uResolution: { value: [canvas.clientWidth, canvas.clientHeight] },
          uMouse: { value: [0.5, 0.5] },
          uC1: { value: c1 },
          uC2: { value: c2 },
          uC3: { value: c3 },
        },
      });

      const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

      let mouseTarget = [0.5, 0.5];
      let mouseEased = [0.5, 0.5];

      function resize() {
        const rect = canvas.getBoundingClientRect();
        renderer.setSize(rect.width || canvas.clientWidth || window.innerWidth,
                         rect.height || canvas.clientHeight || window.innerHeight);
        program.uniforms.uResolution.value = [
          rect.width || canvas.clientWidth,
          rect.height || canvas.clientHeight,
        ];
      }
      resize();
      window.addEventListener('resize', resize);

      window.addEventListener('pointermove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseTarget = [
          (e.clientX - rect.left) / rect.width,
          1.0 - (e.clientY - rect.top) / rect.height,
        ];
      });

      let isVisible = true;
      let isTabActive = true;
      let rafId;

      if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries) => {
          isVisible = entries[0].isIntersecting;
        }, { threshold: 0 });
        obs.observe(canvas);
      }
      document.addEventListener('visibilitychange', () => {
        isTabActive = document.visibilityState === 'visible';
      });

      const start = performance.now();
      function loop(now) {
        if (isVisible && isTabActive) {
          mouseEased[0] += (mouseTarget[0] - mouseEased[0]) * 0.08;
          mouseEased[1] += (mouseTarget[1] - mouseEased[1]) * 0.08;
          program.uniforms.uMouse.value = mouseEased;
          program.uniforms.uTime.value = (now - start) * 0.001;
          renderer.render({ scene: mesh });
        }
        rafId = requestAnimationFrame(loop);
      }
      rafId = requestAnimationFrame(loop);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
