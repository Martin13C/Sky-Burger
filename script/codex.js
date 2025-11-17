// MENÚ MÓVIL + CAMBIO DE ÍCONO
const menuBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('animate-fade-in');

  // CAMBIO DE ÍCONO
  iconOpen.classList.toggle('hidden');
  iconClose.classList.toggle('hidden');
});

// Navbar con efecto al hacer scroll
const navbar = document.getElementById("navbar");
const bmenu = document.getElementById("menu-toggle");
const links = document.getElementById("menu");
const botonP = document.getElementById("boton-pedido");
const logo = document.getElementById("logo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {

    logo.src = "/public/LOGO BLANCO.png"

    navbar.classList.add("color-2", "shadow-lg");

    links.classList.add("text-color-1");
    links.classList.remove("text-color-2");

    bmenu.classList.add("text-color-3","hover:text-red-500");
    bmenu.classList.remove("text-color-2");

    botonP.classList.add("color-1");
    botonP.classList.remove("color-2");
  } else {
    logo.src = "/public/LOGO HORIZONTAL.png"
    navbar.classList.remove("color-2", "shadow-lg");

    links.classList.remove("text-color-1");
    links.classList.add("text-color-2");

    bmenu.classList.remove("text-color-3","hover:text-red-500");
    bmenu.classList.add("text-color-2");

    botonP.classList.remove("color-1");
    botonP.classList.add("color-2");
  }
});


// codigo para msj por whatsapp 
    const form = document.getElementById('whatsapp-simple');
    
    // CAMBIÁ ESTE NÚMERO por el del local (solo números, con 54 y sin 15)
    const numeroLocal = "543856123456";  // ← ACÁ VA TU NÚMERO REAL

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('name2').value.trim();
        const mensaje = document.getElementById('message').value.trim();

        const texto = `Hola!%0ASoy *${nombre}*%0AVengo de la página web y estoy interesado en:%0A%0A${mensaje}%0A%0A¡Gracias!`;

        const url = `https://wa.me/${numeroLocal}?text=${texto}`;
        window.open(url, '_blank');
    });


document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los elementos que quieres animar.
    // Usamos la clase 'animar-al-scroll' como marcador.
    const elementsToObserve = document.querySelectorAll('.animar-al-scroll');

    // Opciones del observador:
    // threshold: 0.1 significa que la animación se disparará cuando el 10% del elemento sea visible.
    // Puedes ajustarlo entre 0 (cualquier píxel) y 1 (elemento completamente visible).
    const observerOptions = {
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // El elemento es visible: Disparamos la animación.
                const element = entry.target;

                // 1. Añadimos la clase base de Animate.css
                element.classList.add('animate__animated'); 

                // 2. Opcional: para que la animación no se repita
                // al volver a hacer scroll sobre ella.
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Iteramos sobre todos los elementos seleccionados y empezamos a observarlos.
    elementsToObserve.forEach(el => {
        observer.observe(el);
    });
});