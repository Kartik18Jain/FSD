const productsContainer =
    document.getElementById("products-container");

const cartSection =
    document.getElementById("cart-section");

const cartContainer =
    document.getElementById("cart-container");

const cartBtn =
    document.getElementById("cart-btn");

const closeCart =
    document.getElementById("close-cart");

const cartCount =
    document.getElementById("cart-count");

const cartTotal =
    document.getElementById("cart-total");


// --------------------
// Cart Array
// --------------------

let cart = [];


// --------------------
// Fetch Products
// --------------------

fetch("https://fakestoreapi.com/products")

    .then(response => response.json())

    .then(products => {

        products.forEach(product => {

            // Product Div
            const div = document.createElement("div");


            // Image
            const img = document.createElement("img");

            img.src = product.image;

            img.alt = product.title;


            // Title
            const title = document.createElement("h2");

            title.innerText = product.title;


            // Price
            const price = document.createElement("h3");

            price.innerText =
                "$" + product.price;


            // --------------------
            // Quantity Counter
            // --------------------

            let count = 0;


            const incrementBtn =
                document.createElement("button");

            incrementBtn.innerText = "+";


            const decrementBtn =
                document.createElement("button");

            decrementBtn.innerText = "-";


            const addItemSpan =
                document.createElement("span");

            addItemSpan.innerText = count;


            // + button
            incrementBtn.addEventListener("click", () => {

                count++;

                addItemSpan.innerText = count;

            });


            // - button
            decrementBtn.addEventListener("click", () => {

                if (count > 0) {

                    count--;

                    addItemSpan.innerText = count;

                }

            });


            // --------------------
            // Add To Cart Button
            // --------------------

            const addToCartBtn =
                document.createElement("button");

            addToCartBtn.innerText =
                "Add to Cart";

            addToCartBtn.classList.add("add-cart");


            addToCartBtn.addEventListener("click", () => {

                // Quantity check

                if (count === 0) {

                    alert("Please select quantity");

                    return;

                }


                // Check if product already exists

                const existingProduct =
                    cart.find(item => item.id === product.id);


                if (existingProduct) {

                    // Increase quantity

                    existingProduct.quantity += count;

                }

                else {

                    // Add new product

                    cart.push({

                        id: product.id,

                        title: product.title,

                        price: product.price,

                        image: product.image,

                        quantity: count

                    });

                }


                // Reset quantity

                count = 0;

                addItemSpan.innerText = count;


                // Update Cart

                displayCart();

            });


            // --------------------
            // Add Elements
            // --------------------

            div.appendChild(img);

            div.appendChild(title);

            div.appendChild(price);

            div.appendChild(incrementBtn);

            div.appendChild(addItemSpan);

            div.appendChild(decrementBtn);

            div.appendChild(addToCartBtn);


            productsContainer.appendChild(div);

        });

    })


    .catch(error => {

        console.log("Error:", error);

    });



// --------------------
// Display Cart
// --------------------

function displayCart() {

    // Clear previous cart

    cartContainer.innerHTML = "";


    // If cart is empty

    if (cart.length === 0) {

        cartContainer.innerHTML =
            `<p class="empty-cart">Your cart is empty</p>`;

        cartCount.innerText = 0;

        cartTotal.innerText = "0.00";

        return;

    }


    let total = 0;

    let totalItems = 0;


    // Loop through cart

    cart.forEach(item => {

        // Cart item div

        const cartItem =
            document.createElement("div");

        cartItem.classList.add("cart-item");


        // Image

        const img =
            document.createElement("img");

        img.src = item.image;


        // Information div

        const cartInfo =
            document.createElement("div");

        cartInfo.classList.add("cart-info");


        // Title

        const title =
            document.createElement("h3");

        title.innerText =
            item.title;


        // Price

        const price =
            document.createElement("p");

        price.innerText =
            "$" + item.price;


        // Quantity section

        const quantityDiv =
            document.createElement("div");

        quantityDiv.classList.add("cart-quantity");


        // Minus button

        const minusBtn =
            document.createElement("button");

        minusBtn.innerText = "-";


        // Quantity text

        const quantityText =
            document.createElement("span");

        quantityText.innerText =
            item.quantity;


        // Plus button

        const plusBtn =
            document.createElement("button");

        plusBtn.innerText = "+";


        // --------------------
        // Minus
        // --------------------

        minusBtn.addEventListener("click", () => {

            if (item.quantity > 1) {

                item.quantity--;

            }

            else {

                // Remove item when quantity reaches 0

                cart = cart.filter(
                    product => product.id !== item.id
                );

            }


            displayCart();

        });


        // --------------------
        // Plus
        // --------------------

        plusBtn.addEventListener("click", () => {

            item.quantity++;

            displayCart();

        });


        // --------------------
        // Remove Button
        // --------------------

        const removeBtn =
            document.createElement("button");

        removeBtn.innerText =
            "Remove";

        removeBtn.classList.add("remove-btn");


        removeBtn.addEventListener("click", () => {

            cart = cart.filter(
                product => product.id !== item.id
            );

            displayCart();

        });


        // Add quantity elements

        quantityDiv.appendChild(minusBtn);

        quantityDiv.appendChild(quantityText);

        quantityDiv.appendChild(plusBtn);


        // Add information

        cartInfo.appendChild(title);

        cartInfo.appendChild(price);

        cartInfo.appendChild(quantityDiv);

        cartInfo.appendChild(removeBtn);


        // Add image + information

        cartItem.appendChild(img);

        cartItem.appendChild(cartInfo);


        // Add to cart container

        cartContainer.appendChild(cartItem);


        // Calculate total

        total +=
            item.price * item.quantity;


        totalItems +=
            item.quantity;

    });


    // Update cart count

    cartCount.innerText =
        totalItems;


    // Update total

    cartTotal.innerText =
        total.toFixed(2);

}




cartBtn.addEventListener("click", () => {

    cartSection.classList.add("show");

});




closeCart.addEventListener("click", () => {

    cartSection.classList.remove("show");

});



// Display empty cart initially

displayCart();