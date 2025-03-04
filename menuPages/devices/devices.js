document.addEventListener("DOMContentLoaded", function () {
    const products = new Map([
        ["هاتف ذكي", { img: "../../sales/smartphone.jpg", price: "1,500,000 ل.س" }],
        ["لابتوب", { img: "../../sales/laptop.jpg", price: "4,200,000 ل.س" }],
        ["جهاز لوحي", { img: "../../sales/taplet.jpg", price: "2,000,000 ل.س" }],
        ["سماعات لاسلكية", { img: "../../sales/wireless_earbuds.jpg", price: "350,000 ل.س" }],
        ["ساعة ذكية", { img: "../../sales/smartwatch.jpg", price: "750,000 ل.س" }],
        ["شاشة كمبيوتر", { img: "../../sales/monitor.jpg", price: "2,500,000 ل.س" }],
        ["ماوس لاسلكي", { img: "../../sales/wireless_mouse.jpg", price: "120,000 ل.س" }],
        ["لوحة مفاتيح ميكانيكية", { img: "../../sales/mechanical_keyboard.jpg", price: "350,000 ل.س" }],
        ["بلايستيشن 5", { img: "../../sales/playstation5.jpg", price: "5,000,000 ل.س" }],
        ["جهاز VR", { img: "../../sales/vr_headset.jpg", price: "3,000,000 ل.س" }],
        ["كاميرا رقمية", { img: "../../sales/digital_camera.jpg", price: "4,500,000 ل.س" }],
        ["طابعة ليزرية", { img: "../../sales/laser_printer.jpg", price: "1,800,000 ل.س" }]
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