import {formControl} from "./init.js";

document.addEventListener("DOMContentLoaded",function () {
    const loginBtn = formControl[0].formElement.querySelector("#login");
    const forgetPwdBtn = formControl[0].formElement.querySelector("#forget-pwd");
    const backImage = document.getElementById("background-image");

    window.onmousemove = function (ev){
        let {x,y} = ev;
        let {left,top,height,width} = formControl[0].formElement.getBoundingClientRect();
        let [cx,cy] = [left+width/2,top+height/2];
        let {clientWidth,clientHeight} = document.documentElement;
        let [dx,dy] = [cx-x,cy-y];
        let dis = Math.hypot(dx,dy);
        let b = Math.max(-1 * 30/clientHeight * dis + 30,0);
        backImage.style.filter = "blur("+b+"px)";

    }
   /* formControl[0].formElement.onmouseover = function (){
        backImage.style.filter = "blur(30px)";
        this.style.filter = "blur(0)";
    };
    formControl[0].formElement.onmouseout = function (){
        backImage.style.filter = "blur(0)";
    };*/

    loginBtn.onclick = function (){
        location = "./main.html";
    };
    forgetPwdBtn.onclick = function (){
        location = "./forget-pwd.html";

    };

});