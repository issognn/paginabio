// Animación al desplazarse hacia abajo en la página
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight * 0.75) {
            section.classList.add('fadeIn');
            if (!section.classList.contains('slideFromLeft') && !section.classList.contains('slideFromRight')) {
                section.classList.add('slideFromLeft'); // Animación de deslizamiento desde la izquierda para las secciones impares
            } else {
                section.classList.add('slideFromRight'); // Animación de deslizamiento desde la derecha para las secciones pares
            }
        }
    });
});

// Animación al hacer clic en los enlaces del menú
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animación de rebote en el logo del encabezado
document.querySelector('header h1').classList.add('bounce');
