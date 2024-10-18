document.getElementById('toggle-info').addEventListener('click', function() {
    const aboutSection = document.getElementById('about-me');
    const projectsSection = document.getElementById('projects');
    const progressBar = document.getElementById('progress-bar');
    const body = document.body;

    // Cambia el fondo al iniciar el proceso
    body.classList.add('executing');
    progressBar.style.width = '0%'; // Reinicia la barra

    // Función para animar la barra de progreso
    function animateProgressBar(targetWidth, duration) {
        let currentWidth = parseFloat(progressBar.style.width);
        const increment = (targetWidth - currentWidth) / (duration / 20);
        const interval = setInterval(() => {
            currentWidth += increment;
            if (currentWidth >= targetWidth) {
                clearInterval(interval);
                currentWidth = targetWidth; // Asegúrate de que no exceda el objetivo
            }
            progressBar.style.width = currentWidth + '%';
        }, 20);
    }

    // Ejecutar pasos de manera secuencial
    aboutSection.classList.remove('hidden'); // Abre "About Me"
    animateProgressBar(25, 300); // Barra al 25% en 300ms

    setTimeout(() => {
        projectsSection.classList.remove('hidden'); // Abre "Projects"
        animateProgressBar(50, 400); // Barra al 50% en 400ms

        setTimeout(() => {
            aboutSection.classList.add('hidden'); // Cierra "About Me"
            animateProgressBar(75, 500); // Barra al 75% en 500ms

            setTimeout(() => {
                projectsSection.classList.add('hidden'); // Cierra "Projects"
                animateProgressBar(100, 600); // Barra al 100% en 600ms

                // Reabre "About Me" después de un retraso
                setTimeout(() => {
                    aboutSection.classList.remove('hidden'); // Reabre
                    aboutSection.style.maxHeight = aboutSection.scrollHeight + "px";
                    body.classList.remove('executing'); // Vuelve al fondo original
                }, 300);
            }, 500); // Cierra "Projects"
        }, 400); // Cierra "About Me"
    }, 300); // Abre "Projects"
});

// Manejo del segundo desplegable (Mis Proyectos)
document.getElementById('toggle-projects').addEventListener('click', function() {
    const projectsSection = document.getElementById('projects');

    if (projectsSection.classList.contains('hidden')) {
        projectsSection.classList.remove('hidden');
        projectsSection.style.maxHeight = projectsSection.scrollHeight + "px"; // Expande
    } else {
        projectsSection.style.maxHeight = "0"; // Colapsa
        setTimeout(() => {
            projectsSection.classList.add('hidden'); // Oculta después de colapsar
        }, 500);
    }
});
