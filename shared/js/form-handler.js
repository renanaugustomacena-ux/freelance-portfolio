/* ============================================
   FORM HANDLER
   Basic contact form validation + mailto fallback
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.contact-form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const fields = form.querySelectorAll('[required]');
      let isValid = true;

      // Clear previous errors
      form.querySelectorAll('.form-error').forEach(err => err.remove());
      form.querySelectorAll('.input--error').forEach(inp => inp.classList.remove('input--error'));

      fields.forEach(field => {
        const value = field.value.trim();

        if (!value) {
          showError(field, 'Questo campo è obbligatorio');
          isValid = false;
          return;
        }

        if (field.type === 'email' && !isValidEmail(value)) {
          showError(field, 'Inserisci un indirizzo email valido');
          isValid = false;
        }

        if (field.type === 'tel' && !isValidPhone(value)) {
          showError(field, 'Inserisci un numero di telefono valido');
          isValid = false;
        }
      });

      if (isValid) {
        const name = form.querySelector('[name="name"]')?.value || '';
        const email = form.querySelector('[name="email"]')?.value || '';
        const message = form.querySelector('[name="message"]')?.value || '';
        const to = form.dataset.email || '';

        if (to) {
          const subject = encodeURIComponent(`Contatto dal sito web - ${name}`);
          const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`);
          window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
        }

        showSuccess(form);
      }
    });
  });

  function showError(field, message) {
    field.classList.add('input--error');
    const error = document.createElement('span');
    error.className = 'form-error';
    error.textContent = message;
    field.parentNode.appendChild(error);
  }

  function showSuccess(form) {
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      const originalText = btn.textContent;
      btn.textContent = 'Messaggio inviato!';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        form.reset();
      }, 3000);
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPhone(phone) {
    return /^[\d\s\-+()]{7,}$/.test(phone);
  }
});
