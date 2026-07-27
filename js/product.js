const related = [
  {
    id: "p2",
    name: "Minimalist Smart Watch",
    price: 199.5,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    cat: "Wearables",
  },
  {
    id: "p4",
    name: "DJI Mini Drone",
    price: 499,
    img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=600&q=80",
    cat: "Gadgets",
  },
  {
    id: "p6",
    name: "Luxury Perfume",
    price: 85,
    img: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
    cat: "Accessories",
  },
  {
    id: "p11",
    name: "Modern Lamp",
    price: 75,
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
    cat: "Home",
  },
];
const container = document.getElementById("relatedProducts");
if (container) {
  container.innerHTML = related
    .map(
      (p) => `
      <div class="product-card animate-on-scroll">
        <div class="product-img-wrapper">
          <img src="${p.img}" alt="${p.name}">
          <div class="product-actions">
            <button class="action-btn"
              onclick="addToCart('${p.id}','${p.name}',${p.price},'${p.img}')">
              <i class="ri-shopping-cart-line"></i>
            </button>

            <a href="product.html" class="action-btn">
              <i class="ri-eye-line"></i>
            </a>

            <button class="action-btn">
              <i class="ri-heart-line"></i>
            </button>
          </div>
        </div>

        <div class="product-category">${p.cat}</div>
        <h3 class="product-title">${p.name}</h3>
        <div class="product-price">$${p.price.toFixed(2)}</div>
      </div>
    `
    )
    .join("");
}
const mainImage = document.getElementById("main-image");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.src;

    thumbs.forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
  });
});
const qtyInput = document.getElementById("qty");
document.querySelector(".minus-btn").addEventListener("click", () => {
  qtyInput.value = Math.max(1, Number(qtyInput.value) - 1);
});
document.querySelector(".plus-btn").addEventListener("click", () => {
  qtyInput.value = Number(qtyInput.value) + 1;
});
document.querySelector(".add-cart-btn").addEventListener("click", () => {
  addToCart(
    "p1",
    "Premium ANC Headphones",
    299.99,
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
  );
});
