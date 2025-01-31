document.addEventListener('DOMContentLoaded', () => {


    const navbar = document.getElementById('header-top');
    const bookmark = document.getElementById('bookmark');
    const olinkbar = document.getElementById('links-contain');
    const olinks = document.getElementById('links');
    const logo = document.getElementById('stashey');

    function mobile() { 
        navbar.style.height = "80px";
        bookmark.style.right = "8vw";
        olinkbar.style.display = "none";
        olinks.style.display = "none";
        logo.style.marginTop = "17px";
        bookmark.style.height = "110px";

    }

    function desktop() {
        if (!navbar || !bookmark || !olinkbar || !olinks) return;
        navbar.style.height = "";
        bookmark.style.right = ""; 
        olinkbar.style.display = "";
        olinks.style.display = "";
        logo.style.marginTop = "";
        bookmark.style.height = "";
    }

   
    if (document.documentElement.clientWidth < 1000) {
        mobile();
    } else {
        desktop();
    }


    window.addEventListener("resize", () => {
        if (document.documentElement.clientWidth < 1000) {
            mobile();
        } else {
            desktop();
        }
    });
    });










