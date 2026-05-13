/* ============================================
   WEBGL BACKGROUND — OGL-based animated shader
   Activates on <canvas data-webgl-bg="VARIANT">
   Variants: aurora · noise · gradient · liquid · particles · grain
             mesh · waves · dots · ribbons · voronoi · iridescent
             topology · plasma · glitch · starfield · static
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
    const { Renderer, Program, Mesh, Triangle } = ogl;

    canvases.forEach(setupCanvas.bind(null, { Renderer, Program, Mesh, Triangle }));
  }

  function setupCanvas(libs, canvas) {
    const { Renderer, Program, Mesh, Triangle } = libs;
    const variant = canvas.dataset.webglBg || 'noise';
    const parent = canvas.parentElement;

    // Force the canvas to behave as a full-bleed background no matter what
    // OGL does to its inline styles later
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block;z-index:0;pointer-events:none;';
    if (parent && getComputedStyle(parent).position === 'static') {
      parent.style.position = 'relative';
    }

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

    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let renderer;
    try {
      renderer = new Renderer({
        canvas: canvas,
        dpr: dpr,
        alpha: true,
        premultipliedAlpha: false,
      });
    } catch (e) {
      console.warn('WebGL renderer failed', e);
      return;
    }
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
        uniform float uScroll;
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
          float t = uTime * 0.12 + uScroll * 0.5;

          float n1 = snoise(p*1.4 + vec2(t, t*0.7) + uMouse*0.5);
          float n2 = snoise(p*2.8 - vec2(t*1.3, t*0.5));
          float n3 = snoise(p*0.7 + vec2(t*0.4, -t*0.2));

          float band1 = smoothstep(0.0, 0.85, sin(uv.y*3.0 + n1*2.5 + t*1.5)*0.5+0.5);
          float band2 = smoothstep(0.0, 0.80, sin(uv.y*5.0 + n2*2.5 + t*1.1)*0.5+0.5);
          float band3 = smoothstep(0.0, 0.75, cos(uv.y*2.0 + n3*1.8 - t*0.9)*0.5+0.5);

          vec3 col = uC1;
          col = mix(col, uC2, band1 * 0.95);
          col = mix(col, uC3, band2 * 0.80);
          col += uC3 * band3 * 0.35;
          col *= smoothstep(1.3, 0.2, length(p));
          col += 0.03 * (snoise(uv*900.0 + t*30.0));

          gl_FragColor = vec4(col, 1.0);
        }
      `,

      noise: `
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uMouse;
        uniform float uScroll;
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
          vec2 aspect = vec2(uResolution.x/uResolution.y, 1.0);
          vec2 p = (uv - 0.5) * aspect;
          float t = uTime * 0.08 + uScroll;
          p += (uMouse - 0.5) * 0.18;
          float n = snoise(p*1.4 + t);
          n += 0.5 * snoise(p*2.8 - t*1.3);
          n += 0.25 * snoise(p*5.6 + t*1.7);
          n = n*0.5 + 0.5;
          vec3 col = mix(uC1, uC2, smoothstep(0.15, 0.85, n));
          col = mix(col, uC3, smoothstep(0.55, 0.95, n));
          gl_FragColor = vec4(col, 1.0);
        }
      `,

      gradient: `
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uMouse;
        uniform float uScroll;
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
          float t = uTime * 0.1 + uScroll * 0.8;
          float n1 = snoise(uv*1.8 + vec2(t*0.7, t*0.2))*0.5+0.5;
          float n2 = snoise(uv*2.5 + vec2(-t*0.3, t*0.5))*0.5+0.5;
          vec2 mDelta = (uMouse - vec2(0.5)) * 0.2;
          float meshA = smoothstep(0.0, 1.0, uv.y + mDelta.y + (n1-0.5)*0.8);
          float meshB = smoothstep(0.0, 1.0, uv.x - mDelta.x + (n2-0.5)*0.8);
          vec3 a = mix(uC1, uC2, meshA);
          vec3 b = mix(uC2, uC3, meshB);
          vec3 col = mix(a, b, smoothstep(0.0, 1.0, n1*0.55 + n2*0.45));
          gl_FragColor = vec4(col, 1.0);
        }
      `,

      liquid: `
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uMouse;
        uniform float uScroll;
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
          float t = uTime * 0.2 + uScroll * 0.6;
          vec2 q = vec2(fbm(p + t*0.3), fbm(p - t*0.2 + 5.2));
          vec2 r = vec2(fbm(p + q*4.0 + t*0.4 + 1.7), fbm(p + q*4.0 + t*0.3 + 9.2));
          float f = fbm(p + r*4.0);
          vec3 col = mix(uC1, uC2, clamp((f*f)*4.0, 0.0, 1.0));
          col = mix(col, uC3, clamp(length(q), 0.0, 1.0)*0.7);
          col = mix(col, uC1, clamp(length(r.x), 0.0, 1.0)*0.4);
          float md = length(uMouse - uv);
          col += uC3 * (1.0 - smoothstep(0.0, 0.4, md)) * 0.35;
          gl_FragColor = vec4(col, 1.0);
        }
      `,

      particles: `
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uMouse;
        uniform float uScroll;
        uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;

        float hash(vec2 p){return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);}

        void main(){
          vec2 uv = vUv;
          vec2 aspect = vec2(uResolution.x/uResolution.y, 1.0);
          vec3 col = uC1;
          float t = uTime + uScroll * 6.0;
          for(int i=0; i<28; i++){
            float fi = float(i);
            float seed = hash(vec2(fi, fi*1.7));
            vec2 base = vec2(hash(vec2(fi, 5.1)), hash(vec2(fi, 9.3)));
            vec2 drift = vec2(
              sin(t*0.12 + fi*0.7) * 0.25,
              cos(t*0.08 + fi*1.1) * 0.30
            );
            vec2 mouseAtt = (uMouse - base - drift) * (0.08 + seed*0.08);
            vec2 pos = base + drift + mouseAtt;
            float d = length((pos - uv) * aspect);
            float radius = 0.008 + seed*0.030;
            float intensity = smoothstep(radius*5.0, 0.0, d);
            vec3 partColor = mix(uC2, uC3, seed);
            col += partColor * intensity * (0.5 + 0.6*sin(t + fi*1.7));
          }
          col = clamp(col, 0.0, 1.5);
          gl_FragColor = vec4(col, 1.0);
        }
      `,

      grain: `
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uMouse;
        uniform float uScroll;
        uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;

        float hash(vec2 p){return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);}

        void main(){
          vec2 uv = vUv;
          vec3 base = mix(uC1, uC2, uv.y + uScroll * 0.3);
          base = mix(base, uC3, smoothstep(0.6, 1.0, distance(uv, uMouse)) * 0.7);
          float grain = (hash(uv*uResolution.xy + uTime*60.0) - 0.5) * 0.15;
          base += grain;
          gl_FragColor = vec4(base, 1.0);
        }
      `,

      mesh: `
        precision highp float;
        #extension GL_OES_standard_derivatives : enable
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uMouse;
        uniform float uScroll;
        uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;

        float grid(vec2 p, float lineW){
          vec2 g = abs(fract(p - 0.5) - 0.5);
          float l = min(g.x, g.y);
          return 1.0 - smoothstep(0.0, lineW, l);
        }

        void main(){
          vec2 uv = vUv;
          vec2 aspect = vec2(uResolution.x/uResolution.y, 1.0);
          vec2 p = (uv - 0.5) * aspect;
          float t = uTime * 0.35 + uScroll * 0.8;
          float md = length(uMouse - uv);
          vec2 warp = vec2(sin(uv.y*10.0 + t)*0.06, cos(uv.x*10.0 + t*1.3)*0.06);
          warp *= (1.0 - smoothstep(0.0, 0.5, md));
          float g1 = grid((p + warp)*8.0, 0.04);
          float g2 = grid((p + warp)*16.0, 0.02) * 0.5;
          vec3 col = mix(uC1, uC2, length(p)*0.7);
          col = mix(col, uC3, g1*0.95 + g2);
          col += uC3 * (1.0 - smoothstep(0.0, 0.3, md)) * 0.25;
          gl_FragColor = vec4(col, 1.0);
        }
      `,

      waves: `
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uMouse;
        uniform float uScroll;
        uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;

        void main(){
          vec2 uv = vUv;
          vec2 aspect = vec2(uResolution.x/uResolution.y, 1.0);
          vec2 p = (uv - 0.5) * aspect;
          float t = uTime * 0.5 + uScroll * 1.0;
          float w1 = sin(p.x*4.0 + t)                * 0.5 + 0.5;
          float w2 = sin(p.x*7.0 - t*1.3 + p.y*3.0)  *0.5 + 0.5;
          float w3 = sin(p.x*3.0 + t*0.7 - p.y*5.0)  *0.5 + 0.5;
          float md = length(uMouse - uv);
          float wMouse = (1.0 - smoothstep(0.0, 0.35, md)) * 0.4;
          float band = smoothstep(0.40, 0.55, w1*0.4 + w2*0.4 + w3*0.2 + wMouse);
          float band2 = smoothstep(0.50, 0.65, w2*0.5 + w3*0.5);
          vec3 col = mix(uC1, uC2, band);
          col = mix(col, uC3, band2 * 0.75);
          col *= 1.0 - length(p)*0.3;
          gl_FragColor = vec4(col, 1.0);
        }
      `,

      dots: `
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uMouse;
        uniform float uScroll;
        uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;

        void main(){
          vec2 uv = vUv;
          float t = uTime * 0.2 + uScroll * 0.7;
          float gridSize = 28.0;
          vec2 gp = uv * gridSize;
          gp.x *= uResolution.x / uResolution.y;
          vec2 cell = floor(gp);
          vec2 f = fract(gp) - 0.5;
          vec2 cellNorm = cell / gridSize;
          float md = length(uMouse - cellNorm);
          float pulse = 0.5 + 0.5*sin(t*2.0 + cell.x*0.3 + cell.y*0.4);
          float radius = 0.22 + 0.14*pulse + 0.30*(1.0 - smoothstep(0.0, 0.35, md));
          float d = length(f);
          float dot = 1.0 - smoothstep(radius*0.7, radius, d);
          vec3 col = mix(uC1, uC2, uv.y);
          col = mix(col, uC3, dot * (0.7 + 0.4*(1.0 - smoothstep(0.0, 0.5, md))));
          gl_FragColor = vec4(col, 1.0);
        }
      `,

      ribbons: `
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uMouse;
        uniform float uScroll;
        uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;

        void main(){
          vec2 uv = vUv;
          vec2 aspect = vec2(uResolution.x/uResolution.y, 1.0);
          vec2 p = (uv - 0.5) * aspect;
          float t = uTime * 0.32 + uScroll * 0.6;
          float md = length(uMouse - uv);
          float mInfl = (1.0 - smoothstep(0.0, 0.45, md));
          vec3 col = uC1;
          for(int i=0; i<6; i++){
            float fi = float(i);
            float phase = t + fi*0.6;
            float wave = sin(p.x*2.0 + phase) * 0.20 + cos(p.x*5.5 - phase*0.7) * 0.08;
            wave += mInfl * sin(phase*2.0) * 0.07;
            float baseY = -0.45 + fi*0.18;
            float dist = abs(p.y - baseY - wave);
            float thickness = 0.030 + 0.018*sin(t + fi);
            float ribbon = 1.0 - smoothstep(thickness*0.6, thickness, dist);
            vec3 ribColor = mix(uC2, uC3, fi/6.0);
            col = mix(col, ribColor, ribbon * 0.95);
          }
          gl_FragColor = vec4(col, 1.0);
        }
      `,

      voronoi: `
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uMouse;
        uniform float uScroll;
        uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;

        vec2 hash2(vec2 p){
          p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
          return fract(sin(p)*43758.5453);
        }

        void main(){
          vec2 uv = vUv;
          vec2 aspect = vec2(uResolution.x/uResolution.y, 1.0);
          vec2 p = (uv - 0.5) * aspect * 5.0;
          float t = uTime * 0.3 + uScroll;
          vec2 i_st = floor(p);
          vec2 f_st = fract(p);
          float minDist = 1.0;
          vec2 minCell = vec2(0.0);
          for(int y=-1; y<=1; y++){
            for(int x=-1; x<=1; x++){
              vec2 neighbor = vec2(float(x), float(y));
              vec2 point = hash2(i_st + neighbor);
              point = 0.5 + 0.5*sin(t + 6.28318*point);
              vec2 diff = neighbor + point - f_st;
              float d = length(diff);
              if(d < minDist){ minDist = d; minCell = i_st + neighbor; }
            }
          }
          float cellHash = hash2(minCell).x;
          vec3 cellCol = mix(uC1, uC2, cellHash);
          cellCol = mix(cellCol, uC3, smoothstep(0.55, 1.0, cellHash));
          float edge = smoothstep(0.0, 0.08, minDist);
          float md = length(uMouse - uv);
          cellCol += uC3 * (1.0 - smoothstep(0.0, 0.35, md)) * 0.3;
          vec3 col = mix(uC1*0.3, cellCol, edge);
          gl_FragColor = vec4(col, 1.0);
        }
      `,

      iridescent: `
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uMouse;
        uniform float uScroll;
        uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;

        vec3 palette(float t){
          return 0.5 + 0.5*cos(6.28318*(vec3(1.0)*t + vec3(0.0, 0.33, 0.67)));
        }

        void main(){
          vec2 uv = vUv;
          vec2 p = uv - 0.5;
          float md = length(uMouse - uv);
          float t = uTime * 0.22 + uScroll * 0.5;
          float angle = atan(p.y, p.x);
          float radial = length(p);
          float bands = sin(angle*4.0 + radial*8.0 + t*2.0)*0.5 + 0.5;
          float ripple = sin(md*22.0 - t*4.0)*0.5 + 0.5;
          float mix1 = bands*0.6 + ripple*0.4;
          vec3 ir = palette(mix1 + t*0.4);
          vec3 brand = mix(uC1, uC2, mix1);
          brand = mix(brand, uC3, smoothstep(0.55, 1.0, mix1));
          vec3 col = mix(brand, brand*ir*2.0, 0.55);
          col *= 1.0 - length(p)*0.45;
          gl_FragColor = vec4(col, 1.0);
        }
      `,

      topology: `
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uMouse;
        uniform float uScroll;
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
          vec2 aspect = vec2(uResolution.x/uResolution.y, 1.0);
          vec2 p = (uv - 0.5) * aspect;
          float t = uTime * 0.1 + uScroll * 0.5;
          float n = snoise(p*1.5 + vec2(t, t*0.4));
          n += 0.5*snoise(p*3.0 - vec2(t*0.6, 0.0));
          float v = n*0.5 + 0.5;
          float lines = abs(fract(v*10.0) - 0.5);
          float contour = 1.0 - smoothstep(0.0, 0.05, lines);
          vec3 col = mix(uC1, uC2, v);
          col = mix(col, uC3, contour*0.95);
          float md = length(uMouse - uv);
          col += uC3 * (1.0 - smoothstep(0.0, 0.3, md)) * 0.2;
          gl_FragColor = vec4(col, 1.0);
        }
      `,

      plasma: `
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uMouse;
        uniform float uScroll;
        uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;

        void main(){
          vec2 uv = vUv;
          vec2 aspect = vec2(uResolution.x/uResolution.y, 1.0);
          vec2 p = (uv - 0.5) * aspect;
          float t = uTime * 0.6 + uScroll * 1.2;
          float v = sin(p.x*4.0 + t);
          v += sin((p.y*4.0 + t)*0.8);
          v += sin((p.x*4.0 + p.y*4.0 + t)*1.2);
          v += sin(length(p)*8.0 - t*2.0);
          float md = length(uMouse - uv) * 6.0;
          v += sin(md - t*3.0)*0.8;
          v = v*0.125 + 0.5;
          vec3 col = mix(uC1, uC2, v);
          col = mix(col, uC3, smoothstep(0.45, 0.85, v));
          gl_FragColor = vec4(col, 1.0);
        }
      `,

      glitch: `
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uMouse;
        uniform float uScroll;
        uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;

        float hash(vec2 p){return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);}

        void main(){
          vec2 uv = vUv;
          float t = uTime * 0.25 + uScroll * 1.5;
          float scanline = sin(uv.y*uResolution.y*1.2)*0.5+0.5;
          scanline = pow(scanline, 3.0)*0.15;
          float blockY = floor(uv.y * 22.0) / 22.0;
          float glitch = step(0.82, hash(vec2(blockY, floor(t*7.0))));
          float xOffset = (hash(vec2(blockY, floor(t*7.0)+1.0)) - 0.5) * 0.12 * glitch;
          uv.x += xOffset;
          float md = length(uMouse - uv);
          float mInfl = (1.0 - smoothstep(0.0, 0.3, md)) * 0.5;
          vec3 col = mix(uC1, uC2, uv.y + sin(uv.x*8.0 + t)*0.08);
          col = mix(col, uC3, glitch + mInfl);
          col += vec3(scanline);
          col.r += hash(uv + t)*0.06;
          col.b += hash(uv - t)*0.06;
          gl_FragColor = vec4(col, 1.0);
        }
      `,

      starfield: `
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uMouse;
        uniform float uScroll;
        uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;

        float hash(vec2 p){return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);}

        void main(){
          vec2 uv = vUv;
          vec2 aspect = vec2(uResolution.x/uResolution.y, 1.0);
          vec3 col = mix(uC1, uC2, uv.y*0.7 + 0.15);
          float t = uTime * 0.05 + uScroll * 0.3;
          vec2 m = (uMouse - 0.5) * 0.08;
          for(int layer=0; layer<4; layer++){
            float depth = float(layer)+1.0;
            vec2 sp = (uv + m*depth*0.8) * (10.0 + depth*10.0);
            vec2 ci = floor(sp);
            vec2 cf = fract(sp) - 0.5;
            float h = hash(ci);
            float twinkle = 0.5 + 0.5*sin(t*10.0 + h*40.0);
            float starSize = (0.04 + h*0.08) * (1.0 - float(layer)*0.15);
            float star = (1.0 - smoothstep(0.0, starSize, length(cf)))*step(0.78, h);
            col = mix(col, uC3, star * twinkle * (1.0 - float(layer)*0.2));
          }
          gl_FragColor = vec4(col, 1.0);
        }
      `,

      static: `
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uMouse;
        uniform float uScroll;
        uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;

        void main(){
          vec2 uv = vUv;
          vec3 col = mix(uC1, uC2, uv.y);
          float md = length(uMouse - uv);
          col = mix(col, uC3, (1.0 - smoothstep(0.0, 0.45, md))*0.35);
          float angle = uv.x*2.0 - uv.y*1.0;
          col = mix(col, uC2, sin(angle*3.14159 + uTime*0.1 + uScroll)*0.10 + 0.10);
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    };

    const fragment = fragments[variant] || fragments.noise;

    let program;
    try {
      program = new Program(gl, {
        vertex,
        fragment,
        uniforms: {
          uTime: { value: 0 },
          uResolution: { value: [canvas.clientWidth, canvas.clientHeight] },
          uMouse: { value: [0.5, 0.5] },
          uScroll: { value: 0 },
          uC1: { value: c1 },
          uC2: { value: c2 },
          uC3: { value: c3 },
        },
      });
    } catch (e) {
      console.warn('Shader compile failed for variant', variant, e);
      return;
    }

    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

    let mouseTarget = [0.5, 0.5];
    let mouseEased = [0.5, 0.5];
    let scrollTarget = 0;
    let scrollEased = 0;

    function applySize() {
      const rect = (parent || canvas).getBoundingClientRect();
      const w = Math.max(rect.width, 1);
      const h = Math.max(rect.height, 1);
      renderer.setSize(w, h);
      // OGL overrides canvas inline style with pixel values — re-force 100%
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.position = 'absolute';
      canvas.style.inset = '0';
      program.uniforms.uResolution.value = [w * dpr, h * dpr];
    }

    // Wait one frame for layout to settle, then size
    requestAnimationFrame(() => {
      applySize();
      requestAnimationFrame(applySize);
    });

    // Track parent size changes (responsive + image loads after page)
    if ('ResizeObserver' in window && parent) {
      const ro = new ResizeObserver(applySize);
      ro.observe(parent);
    }
    window.addEventListener('resize', applySize);
    window.addEventListener('load', applySize);

    window.addEventListener('pointermove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      mouseTarget = [Math.max(0, Math.min(1, x)), Math.max(0, Math.min(1, y))];
    });

    window.addEventListener('scroll', () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollTarget = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    }, { passive: true });

    let isVisible = true;
    let isTabActive = true;

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
      }, { threshold: 0 });
      obs.observe(parent || canvas);
    }
    document.addEventListener('visibilitychange', () => {
      isTabActive = document.visibilityState === 'visible';
    });

    const start = performance.now();
    function loop(now) {
      if (isVisible && isTabActive) {
        mouseEased[0] += (mouseTarget[0] - mouseEased[0]) * 0.08;
        mouseEased[1] += (mouseTarget[1] - mouseEased[1]) * 0.08;
        scrollEased += (scrollTarget - scrollEased) * 0.06;
        program.uniforms.uMouse.value = mouseEased;
        program.uniforms.uScroll.value = scrollEased;
        program.uniforms.uTime.value = (now - start) * 0.001;
        renderer.render({ scene: mesh });
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
