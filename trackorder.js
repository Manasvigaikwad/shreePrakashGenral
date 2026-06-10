import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getDatabase,
    ref,
    get
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDXgqHWd5LHHBFkmV5hM-VrsCR4rZVnIKY",
    authDomain: "store-8721e.firebaseapp.com",
    databaseURL: "https://store-8721e-default-rtdb.firebaseio.com",
    projectId: "store-8721e",
    storageBucket: "store-8721e.firebasestorage.app",
    messagingSenderId: "329433695277",
    appId: "1:329433695277:web:8cae78c56617e59dcce4a4"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

async function loadOrder() {

    const orderId =
        new URLSearchParams(window.location.search)
            .get("id");

    if (!orderId) {
        alert("Order ID missing");
        return;
    }

    console.log("Looking for:", orderId);

    const snapshot =
        await get(ref(db, "orders"));

    if (!snapshot.exists()) {
        alert("No orders found");
        return;
    }

    const orders = snapshot.val();

    let order = null;

    Object.values(orders).forEach(item => {
        if (item.orderId === orderId) {
            order = item;
        }
    });

    if (!order) {
    alert("Order not found");
    return;
}

console.log("========== ORDER ==========");
console.log(order);

const firstProduct =
    Array.isArray(order.products)
        ? order.products[0]
        : Object.values(order.products || {})[0];

console.log("========== PRODUCT ==========");
console.log(firstProduct);

document.getElementById("orderId").textContent =
    order.orderId || "";

document.getElementById("estimatedDelivery").textContent =
    order.estimatedDelivery || "";

document.getElementById("orderStatus").textContent =
    order.status || "";

    const productsContainer =
    document.getElementById("productsContainer");

productsContainer.innerHTML = "";

order.products.forEach(product => {

    console.log("Product:", product.name);
    console.log("Image:", product.image);

    productsContainer.innerHTML += `
        <div class="flex items-center gap-6 group">

            <div class="w-24 h-24 rounded-lg overflow-hidden bg-surface-container border border-outline-variant">
                <img
                    src="${product.image}"
                    class="w-full h-full object-cover"
                    alt="${product.name}">
            </div>

            <div class="flex-grow">

                <h4 class="font-title-md text-title-md text-on-surface">
                    ${product.name}
                </h4>

                <div class="mt-3 flex items-center gap-4">

                    <span class="font-label-md">
                        Qty: ${product.quantity}
                    </span>

                    <span class="font-label-md text-primary">
                        ₹${product.price}
                    </span>

                </div>

            </div>

        </div>
    `;
});
}
loadOrder();



