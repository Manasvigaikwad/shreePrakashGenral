function initMobileMenu() {
    const header = document.querySelector('header.navbar');
    if (!header) return;

    if (header.querySelector('.mobile-menu-toggle')) return;

    const btn = document.createElement('button');
    btn.className = 'mobile-menu-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open navigation menu');

    for (let i = 0; i < 3; i++) {
        const span = document.createElement('span');
        span.className = 'bar';
        btn.appendChild(span);
    }

    header.insertBefore(btn, header.firstChild);

    const nav = header.querySelector('.primary-nav');

    btn.addEventListener('click', () => {
        const isOpen = header.classList.toggle('nav-open');
        btn.setAttribute('aria-expanded', String(isOpen));

        if (!nav) return;
        nav.style.display = isOpen ? 'flex' : 'none';
        nav.style.flexDirection = isOpen ? 'column' : '';
    });

    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (!header.classList.contains('nav-open')) return;
        header.classList.remove('nav-open');
        btn.setAttribute('aria-expanded', 'false');
        if (nav) {
            nav.style.display = 'none';
            nav.style.flexDirection = '';
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            header.classList.remove('nav-open');
            btn.setAttribute('aria-expanded', 'false');
            if (nav) {
                nav.style.display = '';
                nav.style.flexDirection = '';
            }
        }
    });
}

function initSearchFocus() {
    const searchInput = document.querySelector('input[id="searchInput"]');
    if (!searchInput) return;

    searchInput.addEventListener('focus', () => {
        searchInput.parentElement?.classList.add('shadow-md');
    });

    searchInput.addEventListener('blur', () => {
        searchInput.parentElement?.classList.remove('shadow-md');
    });
}

function initCheckboxInteractions() {
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
            const parent = e.target.closest('label');
            if (!parent) return;
            parent.classList.toggle('text-primary', e.target.checked);
        });
    });
}

async function loadCartFromFirebase() {
    const customerEmail = localStorage.getItem('customerEmail');
    if (!customerEmail) return;

    const safeEmail = customerEmail.replace(/\./g, '_').replace(/@/g, '_');
    const url = `https://store-8721e-default-rtdb.firebaseio.com/carts/${safeEmail}.json`;

    try {
        const response = await fetch(url);
        if (!response.ok) return;

        const data = await response.json();
        const cartItems = document.getElementById('cartItems');
        if (!cartItems) return;

        if (!data) {
            cartItems.innerHTML = '<h3>Your cart is empty</h3>';
            return;
        }

        let html = '';
        let subtotal = 0;

        Object.values(data).forEach((item) => {
            subtotal += item.price * item.quantity;
            html += `
        <div class="group flex flex-col md:flex-row gap-6 p-4 border rounded-lg mb-4">
            <div class="w-full md:w-32 h-32">
                <img src="${item.image || 'assets/no-image.png'}" style="width:100%;height:100%;object-fit:cover">
            </div>
            <div class="flex-grow">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
                <p>Qty: ${item.quantity}</p>
            </div>
        </div>
        `;
        });

        cartItems.innerHTML = html;
        const tax = Math.round(subtotal * 0.05);
        const subtotalEl = document.getElementById('subtotal');
        const taxEl = document.getElementById('tax');
        const totalEl = document.getElementById('total');

        if (subtotalEl) subtotalEl.innerText = '₹' + subtotal;
        if (taxEl) taxEl.innerText = '₹' + tax;
        if (totalEl) totalEl.innerText = '₹' + (subtotal + tax);
    } catch (error) {
        console.error('Cart load failed:', error);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initSearchFocus();
    initCheckboxInteractions();
    if (!window.SKIP_GLOBAL_CART) {
        loadCartFromFirebase();
    }
});

async function addToCart(name, price, image) {
    const customerEmail = localStorage.getItem('customerEmail');
    if (!customerEmail) {
        alert('Please subscribe first');
        return;
    }

    const safeEmail = customerEmail.replace(/\./g, '_').replace(/@/g, '_');
    const url = `https://store-8721e-default-rtdb.firebaseio.com/carts/${safeEmail}.json`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, price: Number(price), image, quantity: 1 })
        });

        if (!response.ok) {
            throw new Error('Unable to add item to cart');
        }

        alert('Added to cart successfully');
        window.location.href = 'addtocart.html';
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

function sendOrder() {
    fetch('order.php')
        .then((response) => response.text())
        .then((data) => {
            alert(data);
        })
        .catch((error) => {
            console.error('Order failed:', error);
        });
}

function increaseQty(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart[index]) return;
    cart[index].quantity += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}

function decreaseQty(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart[index]) return;
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}
