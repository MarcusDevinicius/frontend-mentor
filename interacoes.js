var menuOut = document.getElementById('menuout');
var burguer = document.getElementById('burguer')

function openMenu() {
    if (menuOut.style.display == 'none') {
        menuOut.style.display = 'block'
        burguer.style.display = 'none'
    } else {
        menuOut.style.display = 'none'
    }
}

function closeMenu() {
    if (menuOut.style.display == 'block') {
        menuOut.style.display = 'none'
        burguer.style.display = 'block'
    }
}

