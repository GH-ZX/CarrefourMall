document.addEventListener("DOMContentLoaded", function () {
    const products = new Map([
        ["تفاح", { img: "../../sales/apple.jpg", price: "500 ل.س" }],
        ["موز", { img: "../../sales/banana.jpg", price: "400 ل.س" }],
        ["برتقال", { img: "../../sales/orang.jpg", price: "600 ل.س" }],
        ["خيار", { img: "../../sales/khr.jpg", price: "350 ل.س" }],
        ["طماطم", { img: "../../sales/tomato.jpg", price: "700 ل.س" }],
        ["ليمون", { img: "../../sales/lemon.jpg", price: "800 ل.س" }],
        ["عنب", { img: "../../sales/grabes.jpg", price: "1500 ل.س" }],
        ["رمان", { img: "../../sales/rmn.jpg", price: "2000 ل.س" }],
        ["فراولة", { img: "../../sales/fru.jpg", price: "2500 ل.س" }],
        ["بطيخ", { img: "../../sales/bth.jpg", price: "1000 ل.س" }],
        ["شمام", { img: "../../sales/bths.jpg", price: "1100 ل.س" }],
        ["كوسا", { img: "../../sales/ksa.jpg", price: "900 ل.س" }]
    ]);


const productsContainer = document.getElementById("products");

// إنشاء زر السلة
const cartButton = document.createElement("button");
cartButton.classList.add("cart-button");
cartButton.innerHTML = "🛒 <span class='cart-badge'>0</span>";
cartButton.addEventListener("click", () => {
    window.location.href = "../../Pages/cart/cart.html";
});
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