// Maneja el primer desplegable (About Me)
document.getElementById('toggle-info').addEventListener('click', function() {
    const aboutSection = document.getElementById('about-me');
    
    if (aboutSection.classList.contains('hidden')) {
        aboutSection.classList.remove('hidden');
        aboutSection.style.maxHeight = aboutSection.scrollHeight + "px";
    } else {
        aboutSection.style.maxHeight = "0";
        setTimeout(() => {
            aboutSection.classList.add('hidden');
        }, 500);
    }
});

// Maneja el segundo desplegable (Mis Proyectos)
document.getElementById('toggle-projects').addEventListener('click', function() {
    const projectsSection = document.getElementById('projects');

    if (projectsSection.style.maxHeight === "0px" || !projectsSection.style.maxHeight) {
        // Si está colapsado, expándelo
        projectsSection.style.maxHeight = projectsSection.scrollHeight + "px"; // Calcula la altura dinámica del contenido
        projectsSection.style.padding = "20px"; // Asegura que el padding se mantenga cuando se expanda
    } else {
        // Si está expandido, colapsa
        projectsSection.style.maxHeight = "0px"; // Colapsa a 0
        projectsSection.style.padding = "0 20px"; // Reduce el padding durante la animación
    }
});
