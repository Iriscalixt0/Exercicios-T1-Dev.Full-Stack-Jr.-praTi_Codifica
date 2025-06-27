document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('hamburger');
    const menu = document.getElementById('menu-links');

    btn.addEventListener('click', function () {
        menu.classList.toggle('mostrar');
    });
});
