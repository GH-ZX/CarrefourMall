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


