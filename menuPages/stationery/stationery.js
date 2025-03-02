document.addEventListener("DOMContentLoaded", function () {
    const products = new Map([
        ["دفتر 100 ورقة", { img: "../../sales/notebook.jpg", price: "8,000 ل.س" }],
        ["قلم حبر أزرق", { img: "../../sales/blue_pen.jpg", price: "2,000 ل.س" }],
        ["قلم رصاص", { img: "../../sales/pencil.jpg", price: "1,500 ل.س" }],
        ["ممحاة", { img: "../../sales/eraser.jpg", price: "1,000 ل.س" }],
        ["براية معدنية", { img: "../../sales/sharpener.jpg", price: "2,500 ل.س" }],
        ["مسطرة بلاستيكية 30 سم", { img: "../../sales/ruler.jpg", price: "3,000 ل.س" }],
        ["ألوان خشبية 12 لون", { img: "../../sales/color_pencils.jpg", price: "10,000 ل.س" }],
        ["ألوان مائية", { img: "../../sales/water_colors.jpg", price: "15,000 ل.س" }],
        ["كراس رسم", { img: "../../sales/drawing_pad.jpg", price: "12,000 ل.س" }],
        ["غراء سائل", { img: "../../sales/glue.jpg", price: "2,500 ل.س" }],
        ["مقص ورق", { img: "../../sales/scissors.jpg", price: "4,000 ل.س" }],
        ["ملف أوراق بلاستيكي", { img: "../../sales/document_folder.jpg", price: "6,000 ل.س" }]
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
