const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Message sent successfully!");

    contactForm.reset();
  });
}
