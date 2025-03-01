const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const homeSection = document.querySelector('.home');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Change icon between menu and cancel
    if (navLinks.classList.contains('active')) {
        menuIcon.innerHTML = '&#10005;'; // Change to cancel icon
        homeSection.style.marginTop = '300px';
    } else {
        menuIcon.innerHTML = '&#9776;'; // Change back to menu icon
        homeSection.style.marginTop = '50px';
    }
});

document.querySelectorAll('#nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active'); // Hide nav links
            menuIcon.innerHTML = '&#9776;'; // Change back to menu icon
            homeSection.style.marginTop = '50px'; // Reset margin
        }
    });
});