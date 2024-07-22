document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery-slide');
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;
    let testimonialIndex = 0;

    function showNextImage() {
        const totalImages = gallery.children.length;
        gallery.scrollLeft += gallery.clientWidth;

        if (currentIndex >= totalImages - 1) {
            gallery.scrollLeft = 0;
            currentIndex = 0;
        } else {
            currentIndex++;
        }
    }

    function showNextTestimonial() {
        testimonials[testimonialIndex].classList.remove('active');
        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
        testimonials[testimonialIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000); // Cambiar imagen cada 3 segundos
    setInterval(showNextTestimonial, 5000); // Cambiar testimonio cada 5 segundos
});
