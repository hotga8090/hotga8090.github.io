document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.hero-btn');
    const image = document.querySelector('.hero-image img');
    const title = document.querySelector('.hero-title');

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
});
