// header and menu animations
document.addEventListener('DOMContentLoaded', () => {
  
    const nav = document.getElementById('header-top');
    const menuCont = document.getElementById('links-contain');
    const menu = document.getElementById('links');
    const bookmark = document.getElementById('bookmark');
  

    if (document.documentElement.clientWidth > 1000) {

      bookmark.addEventListener('click', () => {
        nav.classList.toggle('color');
        menuCont.classList.toggle('height');
        menuCont.classList.toggle('color2');
        menu.classList.toggle('visibility');
        bookmark.classList.toggle('heightB');
      });

    } else {
  
      bookmark.addEventListener('click', () =>  {

    

      })
    }






  });
  

