document.addEventListener("DOMContentLoaded", function () {
    const products = new Map([
        ["تيشيرت رجالي", { img: "../../sales/mens_tshirt.jpg", price: "15000 ل.س" }],
        ["قميص رسمي", { img: "../../sales/mens_shirt.jpg", price: "25000 ل.س" }],
        ["بنطال جينز", { img: "../../sales/jeans.jpg", price: "30000 ل.س" }],
        ["جاكيت شتوي", { img: "../../sales/winter_jacket.jpg", price: "50000 ل.س" }],
        ["حذاء رياضي", { img: "../../sales/sneakers.jpg", price: "35000 ل.س" }],
        ["بلوزة نسائية", { img: "../../sales/womens_blouse.jpg", price: "20000 ل.س" }],
        ["عباية نسائية", { img: "../../sales/womens_abaya.jpg", price: "55000 ل.س" }],
        ["حقيبة يد", { img: "../../sales/handbag.jpg", price: "40000 ل.س" }],
        ["شال صوفي", { img: "../../sales/wool_scarf.jpg", price: "12000 ل.س" }],
        ["ملابس رياضية", { img: "../../sales/sportswear.jpg", price: "45000 ل.س" }],
        ["بدلة رسمية", { img: "../../sales/suit.jpg", price: "90000 ل.س" }],
        ["حذاء رسمي", { img: "../../sales/formal_shoes.jpg", price: "50000 ل.س" }]
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