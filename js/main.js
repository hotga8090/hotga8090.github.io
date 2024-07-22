document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery-slide');
    const testimonials = document.querySelectorAll('.testimonial');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const nextTestimonialButton = document.querySelector('.next-testimonial');
    const prevTestimonialButton = document.querySelector('.prev-testimonial');
    let currentIndex = 0;
    let testimonialIndex = 0;
    let galleryTimer, testimonialTimer;

    function showNextImage() {
        const totalImages = gallery.children.length;
        currentIndex = (currentIndex + 1) % totalImages;
        updateGallery();
    }

    function showPrevImage() {
        const totalImages = gallery.children.length;
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateGallery();
    }

    function updateGallery() {
        gallery.scrollTo({
            left: gallery.clientWidth * currentIndex,
            behavior: 'smooth'
        });
    }

    function showNextTestimonial() {
        testimonials[testimonialIndex].classList.remove('active');
        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
        testimonials[testimonialIndex].classList.add('active');
    }

    function showPrevTestimonial() {
        testimonials[testimonialIndex].classList.remove('active');
        testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
        testimonials[testimonialIndex].classList.add('active');
    }

    function startGalleryTimer() {
        galleryTimer = setInterval(showNextImage, 3000); // Cambiar imagen cada 3 segundos
    }

    function startTestimonialTimer() {
        testimonialTimer = setInterval(showNextTestimonial, 5000); // Cambiar testimonio cada 5 segundos
    }

    nextButton.addEventListener('click', () => {
        clearInterval(galleryTimer);
        showNextImage();
        startGalleryTimer();
    });

    prevButton.addEventListener('click', () => {
        clearInterval(galleryTimer);
        showPrevImage();
        startGalleryTimer();
    });

    nextTestimonialButton.addEventListener('click', () => {
        clearInterval(testimonialTimer);
        showNextTestimonial();
        startTestimonialTimer();
    });

    prevTestimonialButton.addEventListener('click', () => {
        clearInterval(testimonialTimer);
        showPrevTestimonial();
        startTestimonialTimer();
    });

    gallery.addEventListener('mouseover', () => clearInterval(galleryTimer));
    gallery.addEventListener('mouseout', startGalleryTimer);

    testimonials.forEach(testimonial => {
        testimonial.addEventListener('mouseover', () => clearInterval(testimonialTimer));
        testimonial.addEventListener('mouseout', startTestimonialTimer);
    });

    startGalleryTimer();
    startTestimonialTimer();
});
