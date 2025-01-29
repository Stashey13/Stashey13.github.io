document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.getElementById('header-top');
    const bookmark = document.getElementById('bookmark');
    const olinkbar = document.getElementById('links-contain');
    const olinks = document.getElementById('links');


    function mobile() {
        navbar.style.height = "80px";
        bookmark.style.right = '20%';
        olinkbar.style.display = 'none';
        olinks.style.display = 'none';
    }

    if (document.documentElement.clientWidth < 930) {
        mobile();
    } else {
        desktop();
    }
    
    window.addEventListener("resize", () => {
        if (document.documentElement.clientWidth < 930) {
            mobile();
        } else {
            desktop();
        }
    });









})