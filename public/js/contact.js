document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const btn = document.getElementById('send-btn');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = '';

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