import {formControl} from "./init.js";

document.addEventListener("DOMContentLoaded",function () {
    const loginBtn = formControl[0].formElement.querySelector("#login");
    const forgetPwdBtn = formControl[0].formElement.querySelector("#forget-pwd");

    loginBtn.onclick = function (){
        location = "./main.html";
    };
    forgetPwdBtn.onclick = function (){
        location = "./forget-pwd.html";

    };

});