// header and menu animations
document.addEventListener('DOMContentLoaded', () => {
  
    const nav = document.getElementById('header-top');
    const menuCont = document.getElementById('links-contain');
    const menu = document.getElementById('links');
    const bookmark = document.getElementById('bookmark');
  

      bookmark.addEventListener('click', () => {
        nav.classList.toggle('color');
        menuCont.classList.toggle('height');
        menuCont.classList.toggle('color2');
        menu.classList.toggle('visibility');
        bookmark.classList.toggle('heightB');
      });



function goHome() {
  window.location.href = 'https://Stashey13.github.io'
};



  });
  

