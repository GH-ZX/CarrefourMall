document.addEventListener("DOMContentLoaded", function () {
    const products = new Map([
        ["قهوة تركية", { img: "../../sales/turkish_coffee.jpg", price: "5,000 ل.س" }],
        ["شاي أخضر", { img: "../../sales/green_tea.jpg", price: "3,500 ل.س" }],
        ["عصير برتقال", { img: "../../sales/orange_juice.jpg", price: "4,000 ل.س" }],
        ["مشروب غازي", { img: "../../sales/soda.jpg", price: "2,500 ل.س" }],
        ["عصير تفاح", { img: "../../sales/apple_juice.jpg", price: "4,200 ل.س" }],
        ["ماء معدني", { img: "../../sales/mineral_water.jpg", price: "1,500 ل.س" }],
        ["حليب بالشوكولا", { img: "../../sales/chocolate_milk.jpg", price: "3,800 ل.س" }],
        ["قهوة اسبريسو", { img: "../../sales/espresso.jpg", price: "6,000 ل.س" }],
        ["شاي أسود", { img: "../../sales/black_tea.jpg", price: "3,000 ل.س" }],
        ["مشروب الطاقة", { img: "../../sales/energy_drink.jpg", price: "7,000 ل.س" }],
        ["عصير أناناس", { img: "../../sales/pineapple_juice.jpg", price: "4,500 ل.س" }],
        ["ميلك شيك", { img: "../../sales/milkshake.jpg", price: "6,500 ل.س" }]
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