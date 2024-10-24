var menuOut = document.getElementById('menuout');
var burguer = document.getElementById('burguer')
var btnX = document.getElementById('btn-x')

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

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        menuOut.style.display = 'none'
        burguer.style.display = 'none'
    } if (window.innerWidth < 768 && btnX.style.display == 'none') {
        burguer.style.display = 'block'
    } if (window.innerWidth < 768){
        burguer.style.display = 'block'
    }
}
