// header and menu animations
document.addEventListener('DOMContentLoaded', () => {
  
    const nav = document.getElementById('header-top') as HTMLElement | null;
    const menuCont = document.getElementById('links-contain') as HTMLElement | null;
    const menu = document.getElementById('links') as HTMLElement | null;
    const bookmark = document.getElementById('bookmark') as HTMLElement | null;
  
    // Ensure elements are found before adding event listeners
    if (nav && menuCont && menu && bookmark) {
      bookmark.addEventListener('click', () => {
        nav.classList.toggle('color');
        menuCont.classList.toggle('height');
        menuCont.classList.toggle('color2');
        menu.classList.toggle('visibility');
        bookmark.classList.toggle('heightB');
      });
    }
  });
  