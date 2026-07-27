              const products = [
                {
                  id: "p1",
                  name: "Premium ANC Headphones",
                  price: 299.99,
                  img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
                  cat: "Audio",
                },
                {
                  id: "p2",
                  name: "Minimalist Smart Watch",
                  price: 199.5,
                  img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
                  cat: "Wearables",
                },
                {
                  id: "p3",
                  name: "Nike Air Max Pro",
                  price: 129.0,
                  img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
                  cat: "Footwear",
                },
                {
                  id: "p4",
                  name: "DJI Mini Drone",
                  price: 499.0,
                  img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=600&q=80",
                  cat: "Gadgets",
                },
                {
                  id: "p5",
                  name: "MacBook Pro M2",
                  price: 1299.0,
                  img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
                  cat: "Laptops",
                },
                {
                  id: "p6",
                  name: "Luxury Perfume",
                  price: 85.0,
                  img: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
                  cat: "Accessories",
                },
                {
                  id: "p7",
                  name: "Retro Sunglasses",
                  price: 45.0,
                  img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
                  cat: "Accessories",
                },
                {
                  id: "p8",
                  name: "Leather Backpack",
                  price: 150.0,
                  img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
                  cat: "Bags",
                },
                {
                  id: "p9",
                  name: "Ergonomic Chair",
                  price: 320.0,
                  img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80",
                  cat: "Home",
                },
                {
                  id: "p10",
                  name: "Desk Plant",
                  price: 25.0,
                  img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
                  cat: "Home",
                },
                {
                  id: "p11",
                  name: "Modern Lamp",
                  price: 75.0,
                  img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
                  cat: "Home",
                },
                {
                  id: "p12",
                  name: "iPhone 14 Pro",
                  price: 999.0,
                  img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=600&q=80",
                  cat: "Phones",
                },
              ];  
              const productGrid = document.getElementById("productGrid");

productGrid.innerHTML = products
  .map(
    (p) => `
      <div class="product-card animate-on-scroll">
        <div class="product-img-wrapper">
          <img src="${p.img}" alt="${p.name}">
          <div class="product-actions">
            <button class="action-btn" onclick="addToCart('${p.id}','${p.name}',${p.price},'${p.img}')">
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

        <div class="product-rating">
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-half-fill"></i>
        </div>

        <div class="product-price">
          $${p.price.toFixed(2)}
        </div>
      </div>
    `
  )
  .join("");
  // 
