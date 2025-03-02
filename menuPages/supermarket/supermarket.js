document.addEventListener("DOMContentLoaded", function () {
    const products = new Map([
        ["سكر 1 كغ", { img: "../../sales/sugar.jpg", price: "18,000 ل.س" }],
        ["رز مصري 1 كغ", { img: "../../sales/rice.jpg", price: "25,000 ل.س" }],
        ["عدس مجروش 1 كغ", { img: "../../sales/lentils.jpg", price: "15,000 ل.س" }],
        ["زيت نباتي 1 لتر", { img: "../../sales/vegetable_oil.jpg", price: "30,000 ل.س" }],
        ["شاي 200 غ", { img: "../../sales/tea.jpg", price: "22,000 ل.س" }],
        ["قهوة سريعة التحضير", { img: "../../sales/instant_coffee.jpg", price: "35,000 ل.س" }],
        ["مكرونة 500 غ", { img: "../../sales/pasta.jpg", price: "12,000 ل.س" }],
        ["حليب طويل الأمد 1 لتر", { img: "../../sales/milk.jpg", price: "16,000 ل.س" }],
        ["بسكويت شوكولا", { img: "../../sales/chocolate_biscuit.jpg", price: "10,000 ل.س" }],
        ["عصير برتقال 1 لتر", { img: "../../sales/orange_juice.jpg", price: "14,000 ل.س" }],
        ["جبنة مثلثات", { img: "../../sales/cheese.jpg", price: "27,000 ل.س" }],
        ["شوكولاتة بالبندق", { img: "../../sales/chocolate.jpg", price: "20,000 ل.س" }]
    ]);
    
    
    

    const productsContainer = document.getElementById("products");

    // إنشاء زر السلة
    const cartButton = document.createElement("button");
    cartButton.classList.add("cart-button");
    cartButton.innerHTML = "🛒 <span class='cart-badge'>0</span>";
    document.body.appendChild(cartButton);

    // العثور على العنصر المسؤول عن العداد
    const cartBadge = cartButton.querySelector(".cart-badge");

    let cartCount = 0; // عدد المنتجات في السلة

    // تحديث الرقم على السلة
    function updateCartBadge() {
        if (cartCount > 0) {
            cartBadge.style.display = "flex";
            cartBadge.textContent = cartCount;
        } else {
            cartBadge.style.display = "none";
        }
    }

    products.forEach((product, name) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.img}" alt="${name}">
            <h3 class="product-name">${name}</h3>
            <p class="price">${product.price}</p>
            <button class="buy-btn">اشترِ المنتج</button>
            <div class="quantity-control" style="display: none;">
                <button class="minus-btn">−</button>
                <span class="quantity">1</span>
                <button class="plus-btn">+</button>
            </div>
        `;

        const buyBtn = productCard.querySelector(".buy-btn");
        const quantityControl = productCard.querySelector(".quantity-control");
        const minusBtn = productCard.querySelector(".minus-btn");
        const plusBtn = productCard.querySelector(".plus-btn");
        const quantitySpan = productCard.querySelector(".quantity");

        let quantity = 1; // العدد الافتراضي

        buyBtn.addEventListener("click", function () {
            buyBtn.style.display = "none"; // إخفاء زر "اشتر المنتج"
            quantityControl.style.display = "flex"; // إظهار العداد
            cartCount++; // زيادة عدد المنتجات في السلة
            updateCartBadge();
        });

        minusBtn.addEventListener("click", function () {
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
                cartCount--; // تقليل العدد عند إنقاص الكمية
                updateCartBadge();
            } else {
                quantityControl.style.display = "none"; // إخفاء العداد إذا وصل العدد للصفر
                buyBtn.style.display = "block"; // إعادة إظهار زر الشراء
                cartCount--; // تقليل العدد عند حذف المنتج
                updateCartBadge();
            }
        });

        plusBtn.addEventListener("click", function () {
            quantity++;
            quantitySpan.textContent = quantity;
            cartCount++; // زيادة العدد عند إضافة المنتج
            updateCartBadge();
        });

        productsContainer.appendChild(productCard);
    });
});
