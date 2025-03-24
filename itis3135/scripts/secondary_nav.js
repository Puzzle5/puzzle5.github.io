const projectsMenu = document.querySelector('.projects-menu');
const projectsNav = document.querySelector('.projects-nav');

projectsMenu.addEventListener('mouseenter', () => {
    projectsNav.style.display = 'flex';
});

projectsMenu.addEventListener('mouseleave', () => {
    projectsNav.style.display = 'none';
});

projectsNav.addEventListener('mouseenter', () => {
    projectsNav.style.display = 'flex';
});

projectsNav.addEventListener('mouseleave', () => {
    projectsNav.style.display = 'none';
});
