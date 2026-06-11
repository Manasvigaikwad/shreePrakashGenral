
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "secondary-fixed-dim": "#bfc9c6",
                    "secondary-container": "#dbe5e2",
                    "on-tertiary": "#ffffff",
                    "surface-bright": "#f9f9f7",
                    "tertiary-container": "#8b001a",
                    "surface-variant": "#e2e3e0",
                    "surface-container-low": "#f4f4f1",
                    "surface": "#f9f9f7",
                    "on-surface": "#1a1c1b",
                    "inverse-primary": "#93d5af",
                    "surface-container-high": "#e8e8e6",
                    "surface-container": "#eeeeec",
                    "on-background": "#1a1c1b",
                    "inverse-surface": "#2f3130",
                    "on-primary-container": "#7cbd99",
                    "on-tertiary-fixed-variant": "#92001c",
                    "surface-container-lowest": "#ffffff",
                    "on-tertiary-container": "#ff908f",
                    "on-error-container": "#93000a",
                    "tertiary-fixed": "#ffdad8",
                    "on-secondary-fixed": "#141d1c",
                    "primary-fixed": "#aef1ca",
                    "tertiary-fixed-dim": "#ffb3b1",
                    "on-primary-fixed-variant": "#075135",
                    "error": "#ba1a1a",
                    "secondary-fixed": "#dbe5e2",
                    "background": "#f9f9f7",
                    "primary": "#003420",
                    "on-primary-fixed": "#002112",
                    "on-secondary": "#ffffff",
                    "on-primary": "#ffffff",
                    "outline-variant": "#bfc9c1",
                    "primary-container": "#004d31",
                    "surface-dim": "#dadad8",
                    "primary-fixed-dim": "#93d5af",
                    "on-error": "#ffffff",
                    "tertiary": "#61000f",
                    "surface-tint": "#296a4b",
                    "outline": "#707972",
                    "on-tertiary-fixed": "#410007",
                    "on-secondary-container": "#5d6664",
                    "on-secondary-fixed-variant": "#3f4947",
                    "secondary": "#57605e",
                    "inverse-on-surface": "#f1f1ef",
                    "surface-container-highest": "#e2e3e0",
                    "on-surface-variant": "#404943",
                    "error-container": "#ffdad6"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "margin-mobile": "16px",
                    "container-max": "1280px",
                    "base": "8px",
                    "gutter": "24px",
                    "margin-desktop": "32px"
            },
            "fontFamily": {
                    "label-md": ["Hanken Grotesk"],
                    "headline-lg-mobile": ["Hanken Grotesk"],
                    "title-md": ["Hanken Grotesk"],
                    "body-sm": ["Hanken Grotesk"],
                    "label-sm": ["Hanken Grotesk"],
                    "body-lg": ["Hanken Grotesk"],
                    "headline-xl": ["Hanken Grotesk"],
                    "headline-lg": ["Hanken Grotesk"]
            },
            "fontSize": {
                    "label-md": ["14px", {"lineHeight": "16px", "letterSpacing": "0.01em", "fontWeight": "600"}],
                    "headline-lg-mobile": ["24px", {"lineHeight": "32px", "fontWeight": "700"}],
                    "title-md": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                    "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                    "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "500"}],
                    "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "headline-xl": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700"}]
            }
          },
        },
      }


        async function addToCart(name, price, image) {

            console.log("Button clicked");

            const customerEmail = localStorage.getItem("customerEmail");

            console.log("Email:", customerEmail);

            if (!customerEmail) {
                alert("Please subscribe first");
                return;
            }

            const safeEmail = customerEmail.replace(/\./g, "_").replace(/@/g, "_");

            console.log("Safe email:", safeEmail);

            try {
                const url = `https://store-8721e-default-rtdb.firebaseio.com/carts/${safeEmail}.json`;

                console.log(url);

                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,
                        price,
                        image,
                        quantity: 1
                    })
                });

                console.log("Status:", response.status);

                const result = await response.text();
                console.log("Firebase response:", result);

                alert("Added to cart successfully");
                window.location.href = "addtocart.html";

            } catch (error) {
                console.error(error);
                alert(error.message);
            }
        }

        window.addToCart = addToCart;

        document.addEventListener("click", (e) => {
            if (!e.target.classList.contains("add-to-cart"))
                return;

            addToCart(
                e.target.dataset.name,
                Number(e.target.dataset.price),
                e.target.dataset.image
            );
        });