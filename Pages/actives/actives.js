    // Image preview functionality
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');

    document.querySelectorAll('.activity-image-container').forEach(container => {
        const img = container.querySelector('.activity-image');
        
        container.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = img.src;
        });
    });

    // Close modal when clicking outside
    modal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Prevent modal from closing when clicking on the image
    modalImg.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.style.display = "none";
        }
    });

    // Booking buttons functionality
    document.querySelectorAll('.booking-btn').forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('booked')) {
                this.textContent = '✓ تم الحجز';
                this.classList.add('booked');
            }
        });
    });