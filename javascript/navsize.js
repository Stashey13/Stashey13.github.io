document.addEventListener('DOMContentLoaded', () => {


    const navbar = document.getElementById('header-top');
    const bookmark = document.getElementById('bookmark');
    const olinkbar = document.getElementById('links-contain');
    const olinks = document.getElementById('links');
    const logo = document.getElementById('stashey');
    const section1text = document.getElementById('wordsss');

    function mobile1() { 
        navbar.style.height = "80px";
        bookmark.style.right = "8vw";
        olinkbar.style.display = "none";
        olinks.style.display = "none";
        logo.style.marginTop = "17px";
        bookmark.style.height = "110px";
        section1text.style.width = "600px";

    }

    function mobile2() {
        section1text.style.width = "300px";
        section1text.style.minHeight = "none";
    }

    function desktop() {
        if (!navbar || !bookmark || !olinkbar || !olinks) return;
        navbar.style.height = "";
        bookmark.style.right = ""; 
        olinkbar.style.display = "";
        olinks.style.display = "";
        logo.style.marginTop = "";
        bookmark.style.height = "";
        section1text.style.width = "";
    }






    window.addEventListener("resize", () => {
            if (document.documentElement.clientWidth < 1000) {
                mobile1();
            } else if (document.documentElement.clientWidth < 600) {
                mobile2();
            } else {
                desktop();
            }
        });
    


            

        
        
});











