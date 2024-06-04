function toggleText(image) {
    // Encuentra el contenedor de la imagen
    var container = image.parentElement;
    // Encuentra el elemento de superposición (overlay) dentro del contenedor
    var overlay = container.querySelector('.overlay');
    // Cambia la visibilidad del overlay
    overlay.style.visibility = overlay.style.visibility === 'visible' ? 'hidden' : 'visible';
}