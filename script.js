let cart = [];

    function addToCart(name, price) {
      cart.push({ name, price });
      updateCart();
    }

    function updateCart() {
      const cartList = document.getElementById('cart-list');
      const cartTotal = document.getElementById('cart-total');
      cartList.innerHTML = '';
      let total = 0;

      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp${item.price.toLocaleString()}`;
        li.setAttribute('tabindex', '0');
        cartList.appendChild(li);
        total += item.price;
      });

      cartTotal.textContent = `Rp${total.toLocaleString()}`;
    }

    function checkout() {
      if (cart.length === 0) {
        alert("Keranjang kosong!");
        return;
      }
      alert("Terima kasih! Pesanan Anda sedang diproses.");
      cart = [];
      updateCart();
      showSection('home');
    }

    function showSection(sectionId) {
      const sections = document.querySelectorAll('main > section');
      sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
      });

      const navButtons = document.querySelectorAll('.nav-links button');
      navButtons.forEach(btn => {
        btn.setAttribute('aria-current', 'false');
      });

      const activeSection = document.getElementById(sectionId);
      if (activeSection) {
        activeSection.style.display = 'block';
        // small delay for fade-in effect
        setTimeout(() => activeSection.classList.add('active'), 10);
        activeSection.focus();
      }

      const activeBtn = document.getElementById('nav-' + sectionId);
      if (activeBtn) {
        activeBtn.setAttribute('aria-current', 'page');
      }
    }

    // Initialize default section
    showSection('home');