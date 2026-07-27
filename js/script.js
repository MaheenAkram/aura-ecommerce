document.addEventListener('DOMContentLoaded', () => {
  // Loader
  const loader = document.querySelector('.loader-wrapper');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 500);
    }, 800);
  }

  // Custom Cursor
  const cursor = document.querySelector('.cursor');
  if (cursor && window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
    
    document.querySelectorAll('a, button, .product-card, input').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });
  } else if (cursor) {
    cursor.style.display = 'none';
  }

  // Scroll Progress
  const progressBar = document.querySelector('.scroll-progress');
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (progressBar) {
      progressBar.style.width = (winScroll / height) * 100 + '%';
    }
    
    // Sticky Header
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // Mobile Menu
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const closeMenuBtn = document.querySelector('.close-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('active');
    });
    closeMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
    window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    mobileMenu.classList.remove("active");
  }
});
  }

  // Shopping Cart Logic
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  const cartBtn = document.querySelector('.cart-btn');
  const cartSidebar = document.querySelector('.cart-sidebar');
  const cartOverlay = document.querySelector('.cart-overlay');
  const closeCartBtn = document.querySelector('.close-cart');
  
  const toggleCart = () => {
    if(cartSidebar && cartOverlay) {
      cartSidebar.classList.toggle('active');
      cartOverlay.classList.toggle('active');
    }
  };

  if(cartBtn) cartBtn.addEventListener('click', (e) => { e.preventDefault(); toggleCart(); });
  if(closeCartBtn) closeCartBtn.addEventListener('click', toggleCart);
  if(cartOverlay) cartOverlay.addEventListener('click', toggleCart);

  // Add to Cart
  window.addToCart = function(id, title, price, img) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id, title, price, img, qty: 1 });
    }
    saveCart();
    updateCartUI();
    showToast('Product added to cart!');
    if (!cartSidebar.classList.contains('active')) {
      toggleCart();
    }
  };

  window.removeFromCart = function(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
  };

  window.updateQty = function(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
      item.qty += change;
      if (item.qty <= 0) {
        removeFromCart(id);
      } else {
        saveCart();
        updateCartUI();
      }
    }
  };

  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function updateCartUI() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const cartTotal = document.querySelector('.total-price');
    
    if(!cartItemsContainer) return;

    let total = 0;
    let count = 0;
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p style="text-align:center; color:var(--text-sec); margin-top:2rem;">Your cart is empty.</p>';
    } else {
      cart.forEach(item => {
        total += item.price * item.qty;
        count += item.qty;
        cartItemsContainer.innerHTML += `
          <div class="cart-item">
            <img src="${item.img}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-info">
              <div class="cart-item-title">${item.title}</div>
              <div class="cart-item-price">$${item.price.toFixed(2)}</div>
              <div class="qty-controls">
                <button class="qty-btn" onclick="updateQty('${item.id}', -1)">-</button>
                <span>${item.qty}</span>
                <button class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
              </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">
              <i class="ri-delete-bin-line"></i>
            </button>
          </div>
        `;
      });
    }
    
    if(cartCount) cartCount.textContent = count;
    if(cartTotal) cartTotal.textContent = '$' + total.toFixed(2);
  }

  // Toast Notification
  function showToast(message) {
    const container = document.querySelector('.toast-container');
    if(!container) return;
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="ri-check-line"></i> <span>${message}</span>`;
    container.appendChild(toast);
    
    // Trigger reflow
    toast.offsetHeight;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // Initialize UI
  updateCartUI();

  // Back to Top Button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.innerHTML = '<i class="ri-arrow-up-line"></i>';
  document.body.appendChild(backToTopBtn);

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  // Scroll Reveal Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
});
