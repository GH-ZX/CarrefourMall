document.addEventListener("DOMContentLoaded", function () {
    const products = new Map([
        ["مكعبات تركيب", { img: "../../sales/lego.jpg", price: "150,000 ل.س" }],
        ["سيارة تحكم عن بعد", { img: "../../sales/rc_car.jpg", price: "250,000 ل.س" }],
        ["دمية باربي", { img: "../../sales/barbie_doll.jpg", price: "180,000 ل.س" }],
        ["مجموعة قطار كهربائي", { img: "../../sales/train_set.jpg", price: "400,000 ل.س" }],
        ["لعبة صيد السمك", { img: "../../sales/fishing_game.jpg", price: "90,000 ل.س" }],
        ["مطبخ أطفال", { img: "../../sales/kids_kitchen.jpg", price: "320,000 ل.س" }],
        ["مسدس ماء", { img: "../../sales/water_gun.jpg", price: "70,000 ل.س" }],
        ["أرجوحة أطفال", { img: "../../sales/kids_swing.jpg", price: "500,000 ل.س" }],
        ["طقم شطرنج", { img: "../../sales/chess_set.jpg", price: "200,000 ل.س" }],
        ["دراجة أطفال", { img: "../../sales/kids_bike.jpg", price: "600,000 ل.س" }],
        ["بيت ألعاب للأطفال", { img: "../../sales/playhouse.jpg", price: "750,000 ل.س" }],
        ["لعبة مونوبولي", { img: "../../sales/monopoly.jpg", price: "180,000 ل.س" }]
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