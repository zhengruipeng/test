import {formControl} from "./init.js";
import {notify} from "../../public/notification/notification.js";

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
        let username = formControl[0].formElement.querySelector("input[name='username']").value;
        let password = formControl[0].formElement.querySelector("input[name='password']").value;
        let occupation = formControl[0].formElement.querySelector("input[name='occupation']").value;

        fetch2("../login/CheckLogin"/*?username="+formControl[0].formElement.username.value+"&password="+formControl[0].formElement.password.value+""*/,{
            body:new FormData(formControl[0].formElement),
            method:"post",
            headers:new Headers({
                "content-type":"application/x-www-form-urlencoded"
            })
        }).then(response => response.text())

            .then(text => {
                // console.log(text);
                if(text.indexOf("success") !== -1){
                    location = "./main.html?username="+username+"&occupation="+occupation;
                }else{
                    notify.print("密码错误，请再次尝试登录");

                }
            })
    };
    forgetPwdBtn.onclick = function (){
        location = "./forget-pwd.html";

    };

});