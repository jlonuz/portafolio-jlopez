// Galery masonry effect
$('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        gutter: '.gutter'
    }
});
// Authomatic scroll
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var textContainer = document.getElementById('text-container');
    var words = ["¡Hola!", "Welcome", "Bienvenida", "Adelante", "Pase usted"]; // Arreglo de palabras
    var currentWordIndex = 0;

    // Función para mostrar la próxima palabra
    function showNextWord() {
      if (currentWordIndex < words.length) {
        textContainer.textContent = words[currentWordIndex];
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(showNextWord, 2000); // Cambia a la siguiente palabra después de 1 segundo
      }
    }

    // Comenzar la animación mostrando la primera palabra
    showNextWord();
  });

