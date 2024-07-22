document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.hero-btn');
    const image = document.querySelector('.hero-image img');
    const title = document.querySelector('.hero-title');
    const testimonials = document.querySelectorAll('.testimonial');
    const plans = document.querySelectorAll('.plan');
    let testimonialIndex = 0;
    let planIndex = 0;

    // Separar las palabras del título en spans
    title.innerHTML = title.textContent.split(' ').map(word => `<span>${word}</span>`).join(' ');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });

    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });

    // Mostrar el siguiente testimonio
    function showNextTestimonial() {
        testimonials[testimonialIndex].classList.remove('active');
        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
        testimonials[testimonialIndex].classList.add('active');
    }

    // Mostrar el siguiente plan
    function showNextPlan() {
        plans[planIndex].classList.remove('active');
        planIndex = (planIndex + 1) % plans.length;
        plans[planIndex].classList.add('active');
    }

    setInterval(showNextTestimonial, 5000); // Cambiar testimonio cada 5 segundos
    setInterval(showNextPlan, 5000); // Cambiar plan cada 5 segundos

    // Inicializar animaciones de testimonios y planes
    testimonials[0].classList.add('active');
    plans[0].classList.add('active');
});
