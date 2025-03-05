document.addEventListener('DOMContentLoaded', () => {
    // تحديث وظيفة زر "التفاصيل" لعرض صورة أكبر في النافذة المنبثقة
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.product-card');
            if (!card) return; // تأكد من وجود البطاقة
            const modal = document.getElementById('productModal');
            const title = card.querySelector('.product-title')?.textContent || '';
            const description = card.querySelector('.product-description')?.textContent || '';
            const image = card.querySelector('.product-image img')?.src || '';
            const originalPrice = card.querySelector('.original-price')?.textContent || '';
            const discountedPrice = card.querySelector('.discounted-price')?.textContent || '';
            
            modal.querySelector('.modal-image').src = image;
            modal.querySelector('.modal-title').textContent = title;
            modal.querySelector('.modal-description').textContent = description;
            modal.querySelector('.modal-price').innerHTML = `
                <p>السعر الأصلي: <strike>${originalPrice}</strike></p>
                <p>السعر بعد الخصم: ${discountedPrice}</strike></p>
            `;
            modal.style.display = 'block';
        });
    });
    
    document.querySelector('.close-modal').addEventListener('click', () => {
        document.getElementById('productModal').style.display = 'none';
    });

    // تعديل وظيفة زر "إضافة للسلة"
    document.querySelectorAll('.cart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.textContent = "تم الاضافة ✓";
            btn.classList.add("modified");
        });
    });

    // إغلاق المودال عند النقر خارج المحتوى
    window.onclick = function(event) {
        const modal = document.getElementById('productModal');
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});