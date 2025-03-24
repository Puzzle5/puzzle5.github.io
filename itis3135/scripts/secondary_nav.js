const projectsMenu = document.querySelector('.projects-menu');
const projectsNav = document.querySelector('.projects-nav');

// Add this line to hide the menu initially
projectsNav.style.display = 'none';

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
