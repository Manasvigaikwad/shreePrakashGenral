
tailwind.config = {
        darkMode: "class",
        theme: {
                extend: {
                        "colors": {
                                "primary-container": "#004d31",
                                "on-tertiary-fixed": "#410007",
                                "surface-container-high": "#e8e8e6",
                                "inverse-surface": "#2f3130",
                                "tertiary-container": "#8b001a",
                                "surface-tint": "#296a4b",
                                "tertiary-fixed-dim": "#ffb3b1",
                                "secondary-fixed": "#dbe5e2",
                                "on-primary": "#ffffff",
                                "surface-container": "#eeeeec",
                                "surface-dim": "#dadad8",
                                "primary-fixed-dim": "#93d5af",
                                "on-secondary-fixed": "#141d1c",
                                "on-tertiary": "#ffffff",
                                "on-secondary-container": "#5d6664",
                                "error": "#ba1a1a",
                                "surface-variant": "#e2e3e0",
                                "on-tertiary-fixed-variant": "#92001c",
                                "surface-container-lowest": "#ffffff",
                                "surface": "#f9f9f7",
                                "on-primary-fixed": "#002112",
                                "tertiary-fixed": "#ffdad8",
                                "tertiary": "#61000f",
                                "on-secondary": "#ffffff",
                                "inverse-primary": "#93d5af",
                                "error-container": "#ffdad6",
                                "on-primary-fixed-variant": "#075135",
                                "on-tertiary-container": "#ff908f",
                                "on-secondary-fixed-variant": "#3f4947",
                                "primary-fixed": "#aef1ca",
                                "outline-variant": "#bfc9c1",
                                "on-surface": "#1a1c1b",
                                "on-background": "#1a1c1b",
                                "secondary-container": "#dbe5e2",
                                "on-error": "#ffffff",
                                "background": "#f9f9f7",
                                "inverse-on-surface": "#f1f1ef",
                                "surface-container-low": "#f4f4f1",
                                "on-primary-container": "#7cbd99",
                                "secondary-fixed-dim": "#bfc9c6",
                                "outline": "#707972",
                                "surface-container-highest": "#e2e3e0",
                                "on-error-container": "#93000a",
                                "surface-bright": "#f9f9f7",
                                "primary": "#003420",
                                "secondary": "#57605e",
                                "on-surface-variant": "#404943"
                        },
                        "borderRadius": {
                                "DEFAULT": "0.125rem",
                                "lg": "0.25rem",
                                "xl": "0.5rem",
                                "full": "0.75rem"
                        },
                        "spacing": {
                                "container-max": "1280px",
                                "margin-desktop": "32px",
                                "gutter": "24px",
                                "base": "8px",
                                "margin-mobile": "16px"
                        },
                        "fontFamily": {
                                "title-md": ["Hanken Grotesk"],
                                "headline-lg-mobile": ["Hanken Grotesk"],
                                "headline-lg": ["Hanken Grotesk"],
                                "body-lg": ["Hanken Grotesk"],
                                "label-sm": ["Hanken Grotesk"],
                                "label-md": ["Hanken Grotesk"],
                                "body-sm": ["Hanken Grotesk"],
                                "headline-xl": ["Hanken Grotesk"]
                        },
                        "fontSize": {
                                "title-md": ["16px", { "lineHeight": "28px", "fontWeight": "600" }],
                                "headline-lg-mobile": ["24px", { "lineHeight": "32px", "fontWeight": "700" }],
                                "headline-lg": ["28px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700", "text-align": "center" }],
                                "body-lg": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                                "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }],
                                "label-md": ["14px", { "lineHeight": "16px", "letterSpacing": "0.01em", "fontWeight": "600" }],
                                "body-sm": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
                                "headline-xl": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700" }]
                        }
                },
        },
}

// Simple micro-interaction for filter toggles
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
                const parent = e.target.closest('label');
                if (e.target.checked) {
                        parent.classList.add('text-primary');
                } else {
                        parent.classList.remove('text-primary');
                }
        });
});

const searchInput = document.querySelector('input[type="text"]');

if (searchInput) {

        searchInput.addEventListener('focus', () => {
                searchInput.parentElement.classList.add('shadow-md');
        });

        searchInput.addEventListener('blur', () => {
                searchInput.parentElement.classList.remove('shadow-md');
        });

}

tailwind.config = {
        darkMode: "class",
        theme: {
                extend: {
                        "colors": {
                                "inverse-surface": "#2f3130",
                                "secondary-fixed-dim": "#bfc9c6",
                                "surface-container-highest": "#e2e3e0",
                                "surface-container-high": "#e8e8e6",
                                "secondary-fixed": "#dbe5e2",
                                "on-tertiary-fixed": "#410007",
                                "surface-variant": "#e2e3e0",
                                "surface-container-lowest": "#ffffff",
                                "primary-container": "#004d31",
                                "tertiary-fixed-dim": "#ffb3b1",
                                "primary-fixed-dim": "#93d5af",
                                "tertiary-container": "#8b001a",
                                "inverse-on-surface": "#f1f1ef",
                                "primary": "#003420",
                                "on-primary": "#ffffff",
                                "on-error": "#ffffff",
                                "surface-container": "#eeeeec",
                                "surface": "#f9f9f7",
                                "on-error-container": "#93000a",
                                "tertiary": "#61000f",
                                "surface-bright": "#f9f9f7",
                                "on-secondary": "#ffffff",
                                "primary-fixed": "#aef1ca",
                                "background": "#f9f9f7",
                                "secondary": "#57605e",
                                "on-secondary-fixed-variant": "#3f4947",
                                "on-secondary-container": "#5d6664",
                                "on-background": "#1a1c1b",
                                "on-surface-variant": "#404943",
                                "surface-tint": "#296a4b",
                                "on-tertiary": "#ffffff",
                                "error-container": "#ffdad6",
                                "tertiary-fixed": "#ffdad8",
                                "surface-container-low": "#f4f4f1",
                                "outline-variant": "#bfc9c1",
                                "on-tertiary-container": "#ff908f",
                                "outline": "#707972",
                                "on-surface": "#1a1c1b",
                                "on-secondary-fixed": "#141d1c",
                                "on-primary-fixed": "#002112",
                                "on-primary-container": "#7cbd99",
                                "error": "#ba1a1a",
                                "secondary-container": "#dbe5e2",
                                "on-tertiary-fixed-variant": "#92001c",
                                "inverse-primary": "#93d5af",
                                "on-primary-fixed-variant": "#075135",
                                "surface-dim": "#dadad8"
                        },
                        "borderRadius": {
                                "DEFAULT": "0.125rem",
                                "lg": "0.25rem",
                                "xl": "0.5rem",
                                "full": "0.75rem"
                        },
                        "spacing": {
                                "base": "8px",
                                "gutter": "24px",
                                "margin-desktop": "32px",
                                "container-max": "1280px",
                                "margin-mobile": "16px"
                        },
                        "fontFamily": {
                                "headline-xl": ["Hanken Grotesk"],
                                "body-sm": ["Hanken Grotesk"],
                                "label-sm": ["Hanken Grotesk"],
                                "label-md": ["Hanken Grotesk"],
                                "body-lg": ["Hanken Grotesk"],
                                "headline-lg": ["Hanken Grotesk"],
                                "headline-lg-mobile": ["Hanken Grotesk"],
                                "title-md": ["Hanken Grotesk"]
                        },
                        "fontSize": {
                                "headline-xl": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                                "body-sm": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
                                "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }],
                                "label-md": ["14px", { "lineHeight": "16px", "letterSpacing": "0.01em", "fontWeight": "600" }],
                                "body-lg": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                                "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                                "headline-lg-mobile": ["24px", { "lineHeight": "32px", "fontWeight": "700" }],
                                "title-md": ["20px", { "lineHeight": "28px", "fontWeight": "600" }]
                        }
                },
        },
}


tailwind.config = {
        darkMode: "class",
        theme: {
                extend: {
                        "colors": {
                                "tertiary-fixed-dim": "#ffb3b1",
                                "surface-container": "#eeeeec",
                                "surface-tint": "#296a4b",
                                "surface": "#f9f9f7",
                                "surface-container-highest": "#e2e3e0",
                                "on-secondary-container": "#5d6664",
                                "tertiary": "#61000f",
                                "on-secondary-fixed": "#141d1c",
                                "on-background": "#1a1c1b",
                                "on-secondary-fixed-variant": "#3f4947",
                                "secondary": "#57605e",
                                "tertiary-fixed": "#ffdad8",
                                "primary-fixed-dim": "#93d5af",
                                "error-container": "#ffdad6",
                                "surface-variant": "#e2e3e0",
                                "surface-container-lowest": "#ffffff",
                                "on-primary-fixed-variant": "#075135",
                                "on-primary-fixed": "#002112",
                                "on-error-container": "#93000a",
                                "on-secondary": "#ffffff",
                                "surface-container-low": "#f4f4f1",
                                "on-tertiary-container": "#ff908f",
                                "secondary-fixed": "#dbe5e2",
                                "secondary-container": "#dbe5e2",
                                "tertiary-container": "#8b001a",
                                "secondary-fixed-dim": "#bfc9c6",
                                "on-tertiary-fixed": "#410007",
                                "on-error": "#ffffff",
                                "surface-bright": "#f9f9f7",
                                "inverse-on-surface": "#f1f1ef",
                                "on-primary-container": "#7cbd99",
                                "inverse-primary": "#93d5af",
                                "error": "#ba1a1a",
                                "on-tertiary": "#ffffff",
                                "background": "#f9f9f7",
                                "outline-variant": "#bfc9c1",
                                "outline": "#707972",
                                "surface-container-high": "#e8e8e6",
                                "primary": "#003420",
                                "primary-container": "#004d31",
                                "on-tertiary-fixed-variant": "#92001c",
                                "on-primary": "#ffffff",
                                "on-surface": "#1a1c1b",
                                "inverse-surface": "#2f3130",
                                "primary-fixed": "#aef1ca",
                                "surface-dim": "#dadad8",
                                "on-surface-variant": "#404943"
                        },
                        "borderRadius": {
                                "DEFAULT": "0.125rem",
                                "lg": "0.25rem",
                                "xl": "0.5rem",
                                "full": "0.75rem"
                        },
                        "spacing": {
                                "base": "8px",
                                "gutter": "24px",
                                "margin-mobile": "16px",
                                "margin-desktop": "32px",
                                "container-max": "1280px"
                        },
                        "fontFamily": {
                                "label-sm": ["Hanken Grotesk"],
                                "headline-lg-mobile": ["Hanken Grotesk"],
                                "label-md": ["Hanken Grotesk"],
                                "body-sm": ["Hanken Grotesk"],
                                "body-lg": ["Hanken Grotesk"],
                                "title-md": ["Hanken Grotesk"],
                                "headline-xl": ["Hanken Grotesk"],
                                "headline-lg": ["Hanken Grotesk"]
                        },
                        "fontSize": {
                                "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }],
                                "headline-lg-mobile": ["24px", { "lineHeight": "32px", "fontWeight": "700" }],
                                "label-md": ["14px", { "lineHeight": "16px", "letterSpacing": "0.01em", "fontWeight": "600" }],
                                "body-sm": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
                                "body-lg": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                                "title-md": ["20px", { "lineHeight": "28px", "fontWeight": "600" }],
                                "headline-xl": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                                "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }]
                        }
                }
        }
}




function sendOrder() {
        fetch("order.php")
                .then(response => response.text())
                .then(data => {
                        alert(data);
                });
}

tailwind.config = {
        darkMode: "class",
        theme: {
                extend: {
                        "colors": {
                                "surface-variant": "#e2e3e0",
                                "secondary": "#57605e",
                                "surface-container-low": "#f4f4f1",
                                "background": "#f9f9f7",
                                "primary-fixed-dim": "#93d5af",
                                "tertiary-fixed": "#ffdad8",
                                "on-secondary-fixed": "#141d1c",
                                "primary-container": "#004d31",
                                "on-primary": "#ffffff",
                                "secondary-fixed": "#dbe5e2",
                                "on-primary-fixed": "#002112",
                                "primary": "#003420",
                                "outline": "#707972",
                                "tertiary-container": "#8b001a",
                                "on-tertiary": "#ffffff",
                                "secondary-fixed-dim": "#bfc9c6",
                                "on-error-container": "#93000a",
                                "tertiary": "#61000f",
                                "primary-fixed": "#aef1ca",
                                "outline-variant": "#bfc9c1",
                                "on-secondary-container": "#5d6664",
                                "surface-dim": "#dadad8",
                                "surface-container-highest": "#e2e3e0",
                                "on-tertiary-fixed-variant": "#92001c",
                                "on-surface-variant": "#404943",
                                "tertiary-fixed-dim": "#ffb3b1",
                                "on-secondary-fixed-variant": "#3f4947",
                                "on-background": "#1a1c1b",
                                "inverse-surface": "#2f3130",
                                "on-tertiary-fixed": "#410007",
                                "secondary-container": "#dbe5e2",
                                "surface-bright": "#f9f9f7",
                                "on-tertiary-container": "#ff908f",
                                "on-primary-fixed-variant": "#075135",
                                "inverse-on-surface": "#f1f1ef",
                                "inverse-primary": "#93d5af",
                                "on-primary-container": "#7cbd99",
                                "surface-tint": "#296a4b",
                                "on-secondary": "#ffffff",
                                "error-container": "#ffdad6",
                                "surface-container": "#eeeeec",
                                "surface-container-high": "#e8e8e6",
                                "error": "#ba1a1a",
                                "surface-container-lowest": "#ffffff",
                                "on-surface": "#1a1c1b",
                                "surface": "#f9f9f7",
                                "on-error": "#ffffff"
                        },
                        "borderRadius": {
                                "DEFAULT": "0.125rem",
                                "lg": "0.25rem",
                                "xl": "0.5rem",
                                "full": "0.75rem"
                        },
                        "spacing": {
                                "container-max": "1280px",
                                "base": "8px",
                                "gutter": "24px",
                                "margin-mobile": "16px",
                                "margin-desktop": "32px"
                        },
                        "fontFamily": {
                                "headline-lg": ["Hanken Grotesk"],
                                "label-sm": ["Hanken Grotesk"],
                                "headline-lg-mobile": ["Hanken Grotesk"],
                                "title-md": ["Hanken Grotesk"],
                                "headline-xl": ["Hanken Grotesk"],
                                "label-md": ["Hanken Grotesk"],
                                "body-lg": ["Hanken Grotesk"],
                                "body-sm": ["Hanken Grotesk"]
                        },
                        "fontSize": {
                                "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                                "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }],
                                "headline-lg-mobile": ["24px", { "lineHeight": "32px", "fontWeight": "700" }],
                                "title-md": ["20px", { "lineHeight": "28px", "fontWeight": "600" }],
                                "headline-xl": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                                "label-md": ["14px", { "lineHeight": "16px", "letterSpacing": "0.01em", "fontWeight": "600" }],
                                "body-lg": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                                "body-sm": ["14px", { "lineHeight": "20px", "fontWeight": "400" }]
                        }
                },
        },
}




async function addToCart(name, price, image) {

        const customerEmail = localStorage.getItem("customerEmail");

        if (!customerEmail) {
                alert("Please subscribe first");
                return;
        }

        const safeEmail = customerEmail.replace(/\./g, "_").replace(/@/g, "_");
        const url = `https://store-8721e-default-rtdb.firebaseio.com/carts/${safeEmail}.json`;

        try {
                const response = await fetch(url, {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                                name,
                                price: Number(price),
                                image,
                                quantity: 1
                        })
                });

                if (!response.ok) {
                        throw new Error("Unable to add item to cart");
                }

                alert("Added to cart successfully");
                window.location.href = "addtocart.html";
        } catch (error) {
                console.error(error);
                alert(error.message);
        }
}



if (!window.SKIP_GLOBAL_CART) {
        document.addEventListener("DOMContentLoaded", async () => {

    const customerEmail =
        localStorage.getItem("customerEmail");

    if (!customerEmail) return;

    const safeEmail =
        customerEmail
            .replace(/\./g, "_")
            .replace(/@/g, "_");

    const response = await fetch(
        `https://store-8721e-default-rtdb.firebaseio.com/carts/${safeEmail}.json`
    );

    const data = await response.json();

    const cartItems =
        document.getElementById("cartItems");

    if (!cartItems) return;

    let html = "";
    let subtotal = 0;

    if (!data) {

        cartItems.innerHTML =
            "<h3>Your cart is empty</h3>";

        return;
    }

    Object.values(data).forEach(item => {

         console.log("Cart Item:", item);

        subtotal += item.price * item.quantity;

        html += `
        <div class="group flex flex-col md:flex-row gap-6 p-4 border rounded-lg mb-4">

            <div class="w-full md:w-32 h-32">
                <img src="${item.image || 'assets/no-image.png'}"
                     style="width:100%;height:100%;object-fit:cover">
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

    document.getElementById("subtotal").innerText =
        "₹" + subtotal;

    document.getElementById("tax").innerText =
        "₹" + tax;

    document.getElementById("total").innerText =
        "₹" + (subtotal + tax);

        });
}


if (!window.SKIP_GLOBAL_CART) {
    function increaseQty(index) {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart[index].quantity++;
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload();
    }

    function decreaseQty(index) {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            if (cart[index].quantity > 1) {
                    cart[index].quantity--;
            } else {
                    cart.splice(index, 1);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload();
    }
}



tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-error-container": "#93000a",
                        "secondary": "#57605e",
                        "inverse-primary": "#93d5af",
                        "primary-fixed": "#aef1ca",
                        "inverse-surface": "#2f3130",
                        "surface-dim": "#dadad8",
                        "on-tertiary-fixed": "#410007",
                        "secondary-fixed": "#dbe5e2",
                        "surface-bright": "#f9f9f7",
                        "outline": "#707972",
                        "secondary-fixed-dim": "#bfc9c6",
                        "surface-container-high": "#e8e8e6",
                        "background": "#f9f9f7",
                        "primary-fixed-dim": "#93d5af",
                        "on-secondary-fixed-variant": "#3f4947",
                        "surface-variant": "#e2e3e0",
                        "on-secondary-container": "#5d6664",
                        "tertiary-fixed-dim": "#ffb3b1",
                        "tertiary-container": "#8b001a",
                        "on-primary-fixed": "#002112",
                        "tertiary-fixed": "#ffdad8",
                        "on-secondary": "#ffffff",
                        "on-error": "#ffffff",
                        "on-tertiary": "#ffffff",
                        "on-tertiary-fixed-variant": "#92001c",
                        "secondary-container": "#dbe5e2",
                        "on-primary": "#ffffff",
                        "surface-container": "#eeeeec",
                        "error-container": "#ffdad6",
                        "surface-container-highest": "#e2e3e0",
                        "primary-container": "#004d31",
                        "on-surface-variant": "#404943",
                        "on-background": "#1a1c1b",
                        "inverse-on-surface": "#f1f1ef",
                        "tertiary": "#61000f",
                        "on-primary-fixed-variant": "#075135",
                        "surface-container-lowest": "#ffffff",
                        "surface-container-low": "#f4f4f1",
                        "outline-variant": "#bfc9c1",
                        "on-tertiary-container": "#ff908f",
                        "primary": "#003420",
                        "surface-tint": "#296a4b",
                        "surface": "#f9f9f7",
                        "on-secondary-fixed": "#141d1c",
                        "on-surface": "#1a1c1b",
                        "on-primary-container": "#7cbd99",
                        "error": "#ba1a1a"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "base": "8px",
                        "container-max": "1280px",
                        "margin-desktop": "32px",
                        "margin-mobile": "16px",
                        "gutter": "24px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Hanken Grotesk"],
                        "label-md": ["Hanken Grotesk"],
                        "body-lg": ["Hanken Grotesk"],
                        "body-sm": ["Hanken Grotesk"],
                        "label-sm": ["Hanken Grotesk"],
                        "headline-xl": ["Hanken Grotesk"],
                        "headline-lg-mobile": ["Hanken Grotesk"],
                        "title-md": ["Hanken Grotesk"]
                    },
                    "fontSize": {
                        "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                        "label-md": ["14px", {"lineHeight": "16px", "letterSpacing": "0.01em", "fontWeight": "600"}],
                        "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                        "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "500"}],
                        "headline-xl": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "headline-lg-mobile": ["24px", {"lineHeight": "32px", "fontWeight": "700"}],
                        "title-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}]
                    }
                },
            },
        }

