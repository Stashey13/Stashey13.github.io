
// header and menu animations
document.addEventListener('DOMContentLoaded', function() {



const nav = document.getElementById('header-top');
const menuCont = document.getElementById('links-contain');
const menu = document.getElementById('links');
const bookmark = document.getElementById('bookmark');

bookmark.addEventListener('click', function() {
    nav.classList.toggle('color');
    menuCont.classList.toggle('height');
    menuCont.classList.toggle('color2')
    menu.classList.toggle('visibility');
    bookmark.classList.toggle('heightB');
})



//
})