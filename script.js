// Footer copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Demo contact form (no backend wired up yet — see README)
const contactForm = document.querySelector('.contact-form');
const formAlert = document.getElementById('formAlert');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    formAlert.classList.remove('d-none');
    contactForm.reset();
  });
}
