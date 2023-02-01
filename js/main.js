var burgerMenu = document.querySelector('.maboite');
var body = document.querySelector('body');

burgerMenu.addEventListener('click', function() {
    body.classList.toggle("background")
});