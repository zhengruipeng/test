
document.addEventListener("DOMContentLoaded",function () {

    let isopened = true;

        const asideLogoBtn = document.querySelector("#aside-logo");
        const aside = document.querySelector("aside");
        const main = document.querySelector("main");

        asideLogoBtn.onmouseover = function () {
            if (aside.classList.contains("aside-close")) {
                this.style.transform = "translate(10px,0)";
            }
        };
        asideLogoBtn.onmouseout = function () {
            this.style.transform = "";
        };
        asideLogoBtn.onclick = function () {
            this.onmouseout.call(this, null);
            if (isopened) {
                isopened = false;
                asideLogoBtn.className = "aside-logo-close";
                aside.className = "aside-close";
                main.style.filter = "blur(0)";
            } else {
                isopened = true;
                asideLogoBtn.className = "aside-logo-open";
                aside.className = "aside-open";
                main.style.filter = "blur(10px)";
            }
        };

});