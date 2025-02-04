// header and menu animations
document.addEventListener('DOMContentLoaded', () => {
  
    const nav = document.getElementById('header-top');
    const menuCont = document.getElementById('links-contain');
    const menu = document.getElementById('links');
    const bookmark = document.getElementById('bookmark');
    const mobileMenu = document.getElementById('mobileMenu');
    const text = document.getElementById('stashey');
  

    if (document.documentElement.clientWidth > 1000) {

      bookmark.addEventListener('click', () => {
        nav.classList.toggle('color');
        menuCont.classList.toggle('height');
        menuCont.classList.toggle('color2');
        menu.classList.toggle('visibility');
        bookmark.classList.toggle('heightB');

      });

    } else {

      bookmark.addEventListener('click', () => {
        nav.classList.toggle('color');
        mobileMenu.classList.toggle('visibility2');
        text.classList.toggle('visibility');
    
        if (mobileMenu.classList.contains('visibility2')) {
          document.body.style.overflow = 'hidden';
          document.documentElement.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
          document.documentElement.style.overflow = '';
        }

      });

    }
    






  });
  

