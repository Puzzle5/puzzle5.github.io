        document.addEventListener('DOMContentLoaded', () => {
            const projectsMenu = document.querySelector('.projects-menu');
            const projectsNav = document.querySelector('.projects-nav');

            // *Important*:  Hide the element *before* attaching event listeners.
            projectsNav.style.display = 'none';

            projectsMenu.addEventListener('mouseenter', () => {
                projectsNav.style.display = 'flex';
            });

            projectsMenu.addEventListener('mouseleave', () => {
                projectsNav.style.display = 'none';
            });
        });
