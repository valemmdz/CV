document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Suave para la Navegación
    const navLinks = document.querySelectorAll('.nav__list a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll suave
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // -70 para compensar el header fijo
                    behavior: 'smooth'
                });

                // Microinteracción: Remover foco después del clic
                this.blur();
            }
        });
    });

    // 2. Microinteracción: Resaltar enlace activo en el menú (Opcional, avanzado)
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.scrollY + header.offsetHeight + 1;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});