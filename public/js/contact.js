document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const btn = document.getElementById('send-btn');
  const status = document.getElementById('form-status');

  const fields = [
    { el: document.getElementById('name') },
    { el: document.getElementById('email') },
    { el: document.getElementById('subject') },
    { el: document.getElementById('message') },
  ];

  function clearFieldError(el) {
    el.classList.remove('invalid');
    el.removeAttribute('aria-invalid');
    const existing = el.parentElement.querySelector('.error-text');
    if (existing) existing.remove();
  }

  function showFieldError(el, msg) {
    clearFieldError(el);
    el.classList.add('invalid');
    el.setAttribute('aria-invalid', 'true');
    const note = document.createElement('div');
    note.className = 'error-text';
    note.textContent = msg;
    el.parentElement.appendChild(note);
  }

  // Live clear error on input
  fields.forEach(({ el }) => {
    el.addEventListener('input', () => {
      if (el.value.trim()) {
        clearFieldError(el);
      }
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = '';
    status.classList.remove('status-error');

    // Validate required fields (marked with *)
    let hasError = false;
    fields.forEach(({ el }) => {
      if (!el.value.trim()) {
        hasError = true;
        showFieldError(el, '该字段不能为空');
      }
    });

    if (hasError) {
      status.textContent = '某个字段不能为空';
      status.classList.add('status-error');
      return; // Block submission and skip loading
    }

    // Start loading state
    btn.disabled = true;
    btn.classList.add('loading');
    btn.textContent = 'Sending...';

    // Simulate network delay (2.3s)
    setTimeout(function () {
      btn.disabled = false;
      btn.classList.remove('loading');
      btn.textContent = 'Send Message';
      status.textContent = 'Message sent successfully!';
      form.reset();
    }, 2300);
  });
});