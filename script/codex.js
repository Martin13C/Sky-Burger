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

        bmenu.classList.add("text-color-3", "hover:text-red-500");
        bmenu.classList.remove("text-color-2");

        botonP.classList.add("color-1");
        botonP.classList.remove("color-2");
    } else {
        logo.src = "/public/LOGO HORIZONTAL.png"
        navbar.classList.remove("color-2", "shadow-lg");

        links.classList.remove("text-color-1");
        links.classList.add("text-color-2");

        bmenu.classList.remove("text-color-3", "hover:text-red-500");
        bmenu.classList.add("text-color-2");

        botonP.classList.remove("color-1");
        botonP.classList.add("color-2");
    }
});

// CERRAR AL TOCAR FUERA
window.addEventListener('click', (e) => {
    // Verificamos si el menú móvil está visible (no tiene la clase 'hidden')
    const isMenuOpen = !mobileMenu.classList.contains('hidden');

    if (isMenuOpen && !mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('animate-fade-in');

        // Restauramos los íconos (mostramos el de abrir, ocultamos el de cerrar)
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
    }
});



// codigo para msj por whatsapp 
const form = document.getElementById('whatsapp-simple');

if (form) {
    // 543837404041 ejemplo de numero
    const numeroLocal = "543856123456";  // ← numero real

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = document.getElementById('name2').value.trim();
        const mensaje = document.getElementById('message').value.trim();

        const texto = `Hola!%0ASoy *${nombre}*%0AVengo de la página web y estoy interesado en:%0A%0A${mensaje}%0A%0A¡Gracias!`;

        const url = `https://wa.me/${numeroLocal}?text=${texto}`;
        window.open(url, '_blank');
    });
}



// =======================================
// ANIMACIONES AUTOMÁTICAS (on scroll)
// =======================================

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("[data-animate]");

    elements.forEach(el => {
        el.classList.add("pre-anim"); // invisible antes del scroll
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const anim = entry.target.getAttribute("data-animate");

                entry.target.classList.add("anim-visible"); // aparece suave

                if (anim && anim.trim() !== "") {
                    entry.target.classList.add("animate__animated", anim);
                }

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));
});



// === SKYBURGER PERSONALIZADA ===
document.querySelectorAll('#skyburger-builder input').forEach(i => i.addEventListener('change', actualizarResumen));
document.getElementById('nota-extra').addEventListener('input', actualizarResumen);
actualizarResumen(); // Primera carga

function actualizarResumen() {
    const form = document.getElementById('skyburger-builder');
    const resumen = document.getElementById('resumen-final');

    let texto = "🍔 *Tu SkyBurger a medida:*\n\n";

    const panInput = form.querySelector('input[name="pan"]:checked');
    if (panInput) {
        texto += `🍔 ${panInput.value}\n`;
    }

    const carneInput = form.querySelector('input[name="carne"]:checked');
    if (carneInput) {
        texto += `🫓 ${carneInput.value} de carne vacuna\n`;
    }

    const extras = [];
    form.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
        const emoji = cb.getAttribute('data-emoji') || '•';
        extras.push({ emoji: emoji, nombre: cb.value });
    });

    if (extras.length > 0) {
        texto += `\n✨ *Extras:*\n`;
        extras.forEach(e => {
            texto += `${e.emoji} ${e.nombre}\n`;
        });
    }

    const nota = document.getElementById('nota-extra').value.trim();
    if (nota) texto += `\n📝 *Nota:* ${nota}`;

    resumen.innerHTML = texto.replace(/\n/g, '<br>').replace(/\*([^*]*?)\*/g, '<strong>$1</strong>');
}

function enviarSkyBurger() {
    const form = document.getElementById('skyburger-builder');
    let mensaje = "¡Hola Sky-Burger! Quiero esta hamburguesa personalizada:\n\n";

    const panInput = form.querySelector('input[name="pan"]:checked');
    const carneInput = form.querySelector('input[name="carne"]:checked');

    if (!panInput || !carneInput) {
        alert('Por favor seleccioná el tipo de pan y cantidad de medallones');
        return;
    }

    mensaje += `${panInput.value}\n${carneInput.value} de carne vacuna\n`;

    const extras = [];
    form.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => extras.push(cb.value));
    if (extras.length > 0) {
        mensaje += `\nExtras:\n`;
        extras.forEach(e => mensaje += `• ${e}\n`);
    }

    const nota = document.getElementById('nota-extra').value.trim();
    if (nota) mensaje += `\nNota: ${nota}\n`;

    mensaje += `\n¿Cuánto sale y cuándo puedo pasar a retirar? Gracias!`;

    const telefono = "5493835123456"; // ← Numero
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}