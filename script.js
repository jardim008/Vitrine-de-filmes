document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos antes de enviar.');
      return;
    }

    alert(`Obrigado, ${name}! Sua mensagem foi recebida.\nNós responderemos para: ${email}`);
    form.reset();
  });
});
