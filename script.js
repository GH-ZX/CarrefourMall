    // mainhtml script
    
    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    let position = 0;
    const cardWidth = 300;
    let visibleCards = window.innerWidth <= 768 ? 1 : 4;
    const totalCards = 6;

// Add resize listener to update visibleCards when screen size changes
window.addEventListener('resize', () => {
    visibleCards = window.innerWidth <= 768 ? 1 : 4;
    position = 0;
    track.style.transform = `translateX(${position}px)`;
});


    nextButton.addEventListener('click', () => {
        position -= cardWidth;
        const limit = -cardWidth * (totalCards - visibleCards);
        
        if (position < limit) {
            position = 0;
        }
        track.style.transform = `translateX(${position}px)`;
    });

    prevButton.addEventListener('click', () => {
        position += cardWidth;
        if (position > 0) {
            position = -cardWidth * (totalCards - visibleCards);
        }
        track.style.transform = `translateX(${position}px)`;
    });


    // تسريع حركة الكاروسل التلقائية
    let autoScrollInterval = setInterval(() => {
        position -= cardWidth;
        if (position < -cardWidth * (totalCards - visibleCards)) {
            position = 0;
        }
        track.style.transform = `translateX(${position}px)`;
    }, 4000); // كل4 ثواني
    
    // إيقاف الحركة التلقائية عند تفاعل المستخدم
    [prevButton, nextButton].forEach(button => {
        button.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
    });



    // CartScript
    
    // حساب السعر الإجمالي
    function updateTotalPrice() {
        const items = document.querySelectorAll('.cart-item');
        let total = 0;

        items.forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').dataset.price);
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            total += price * quantity;
        });

        document.querySelector('.price-amount').textContent = total + '$';
    }

    // التحكم في الكمية
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', () => {
            const container = button.parentElement;
            const quantitySpan = container.querySelector('.quantity');
            let quantity = parseInt(quantitySpan.textContent);
            
            if (button.classList.contains('plus')) {
                quantity++;
            } else if (quantity > 1) {
                quantity--;
            }
            
            quantitySpan.textContent = quantity;
            updateTotalPrice();
        });
    });

    // التحقق من العنوان قبل إتمام الشراء
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            const address = document.querySelector('.delivery-address textarea').value.trim();
            if (!address) {
                alert('يرجى كتابة عنوان التوصيل');
                return;
            }
        
        // التحقق من اختيار طريقة الدفع
        const selectedPayment = document.querySelector('.payment-method[style*="background: rgb(255, 224, 0)"]');
        if (!selectedPayment) {
            alert('يرجى اختيار طريقة الدفع');
            return;
        }

        alert('تم إتمام عملية الشراء بنجاح!\nسيتم التوصيل إلى العنوان: ' + address);
    });

    // اختيار طريقة الدفع
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', () => {
            document.querySelectorAll('.payment-method').forEach(m => 
                m.style.background = 'white');
            method.style.background = '#FFE000';
        });
    });
}