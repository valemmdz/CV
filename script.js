// 1. Efecto de Scroll en Navbar
function handleScroll() {
    const nav = document.querySelector('nav');
    // Alternar el fondo de la barra de navegación al hacer scroll
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(15, 23, 42, 0.9)';
    } else {
        nav.style.background = 'var(--nav-glass)';
    }

    // Lógica para resaltar el enlace activo
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - nav.offsetHeight - 50; // Ajuste para el tamaño de la barra
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').substring(1) === current) {
            a.classList.add('active');
        }
    });
}

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll); // Ejecutar al cargar para establecer la posición inicial


// 2. Animación de Aparición al hacer Scroll (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Opcional: dejar de observar una vez animado
            // observer.unobserve(entry.target); 
        } else {
            // Opcional: Remover la clase si quieres que se desanime al salir de la vista
            // entry.target.classList.remove('active');
        }
    });
}, {
    root: null,
    threshold: 0.15 // Se activa cuando el 15% del elemento es visible
});

revealElements.forEach(el => revealObserver.observe(el));


// 3. Menú Móvil (Básico)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    // Al hacer clic, se puede alternar una clase en navLinks para mostrar/ocultar el menú
    // Por ejemplo: navLinks.classList.toggle('show');
    alert("Funcionalidad móvil: Aquí se debe implementar la lógica para mostrar el menú 'nav-links' en pantallas pequeñas.");
});








































