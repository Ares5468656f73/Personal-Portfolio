// Maneja el primer desplegable (About Me)
document.getElementById('toggle-info').addEventListener('click', function() {
    const aboutSection = document.getElementById('about-me');
    const projectsSection = document.getElementById('projects');

    // Abre About Me
    if (aboutSection.classList.contains('hidden')) {
        aboutSection.classList.remove('hidden');
        aboutSection.style.maxHeight = aboutSection.scrollHeight + "px"; // Expande About Me

        // Abre Projects después de un pequeño retraso
        setTimeout(() => {
            projectsSection.classList.remove('hidden');
            projectsSection.style.maxHeight = projectsSection.scrollHeight + "px"; // Expande Projects

            // Cierra About Me pero deja Projects abierto
            setTimeout(() => {
                aboutSection.style.maxHeight = "0"; // Colapsa About Me
                setTimeout(() => {
                    aboutSection.classList.add('hidden'); // Añade hidden a About Me

                    // Cierra Projects
                    setTimeout(() => {
                        projectsSection.style.maxHeight = "0"; // Colapsa Projects
                        setTimeout(() => {
                            projectsSection.classList.add('hidden'); // Añade hidden a Projects

                            // Vuelve a abrir About Me
                            aboutSection.classList.remove('hidden');
                            aboutSection.style.maxHeight = aboutSection.scrollHeight + "px"; // Expande About Me
                        }, 50); // Tiempo para que Projects se colapse
                    }, 50); // Tiempo para que About Me se colapse
                }, 500); // Espera la duración de la animación
            }, 500); // Espera a que Projects se abra
        }, 200); // Espera a que About Me se abra
    }
});

// Maneja el segundo desplegable (Mis Proyectos)
document.getElementById('toggle-projects').addEventListener('click', function() {
    const projectsSection = document.getElementById('projects');

    if (projectsSection.classList.contains('hidden')) {
        projectsSection.classList.remove('hidden');
        projectsSection.style.maxHeight = projectsSection.scrollHeight + "px"; // Expande la sección
    } else {
        projectsSection.style.maxHeight = "0"; // Colapsa a 0
        setTimeout(() => {
            projectsSection.classList.add('hidden');
        }, 500); // Espera la duración de la animación
    }
});