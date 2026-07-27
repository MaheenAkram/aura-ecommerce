document.querySelectorAll(".add-cart-home").forEach((btn) => {
  btn.addEventListener("click", () => {

    addToCart(
      btn.dataset.id,
      btn.dataset.name,
      Number(btn.dataset.price),
      btn.dataset.img
    );

  });
});


const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {

  newsletterForm.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you for subscribing!");

    newsletterForm.reset();

  });

}
