window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#8b0000';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});
