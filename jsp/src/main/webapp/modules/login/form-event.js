import {formControl} from "./init.js";
import {notify} from "../../public/notification/notification.js";
import {IdentifyingCode,currentCode} from "../../functions/Identifying-code/Identifying-code.js"

document.addEventListener("DOMContentLoaded",async function () {
    const loginBtn = formControl[0].formElement.querySelector("#login");
    const forgetPwdBtn = formControl[0].formElement.querySelector("#forget-pwd");
    const backImage = document.getElementById("background-image");


    //获取HTML标签
    const idCodeInput = formControl[0].formElement.querySelector("#id-code");
    const container = formControl[0].formElement.querySelector("#id-code-container");


    //创建一个验证码实例
    let ic = new IdentifyingCode();

    //生成一个六位的验证码，可修改
    ic.initRandomCode(6);

    //ic.encrypt()对验证码进行加密，异步进行
    await ic.encrypt()
        //ic.gui(width,height)生成验证码的图片，第一个参数是图片宽度，第二个参数是高度
    let canvas = await ic.gui(150, 75)
        //向body中添加生成的图片
    container.appendChild(canvas);
        //当验证摁扭点击的时候触发一个函数


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

    loginBtn.onclick = async function (){
        let username = formControl[0].formElement.querySelector("input[name='username']").value;
        let password = formControl[0].formElement.querySelector("input[name='password']").value;
        let idCode = formControl[0].formElement.querySelector("#idCode");
        let occupation = formControl[0].formElement.querySelector("input[name='occupation']").value;

        let code = idCodeInput.value;
        let res = await ic.check(code);
        //输出
        if(!res){
            notify.print("验证码错误");
            return false;

        }

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
                    localStorage.setItem("username",username);
                    localStorage.setItem("occupation",occupation);

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