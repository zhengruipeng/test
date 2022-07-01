import {formControl} from "./init.js";

document.addEventListener("DOMContentLoaded",function () {
    const forgetPwdBtn = formControl[0].formElement.querySelector("#forget-pwd");
    const cancelBtn = formControl[0].formElement.querySelector("#cancel");

    forgetPwdBtn.onclick = function (){
        // location = "./forget-pwd.html";

    };
    cancelBtn.onclick = function (){
        location = "./login.html";

    };
});
