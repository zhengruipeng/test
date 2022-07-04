
import {MyApp} from "../../public/config-main.js"



document.addEventListener("DOMContentLoaded",function main(){

    MyApp.customEvent.addListener("tableinit",function (){

        const table = document.querySelector("main>table");
        const tbody = table.querySelector("tbody");
        let trs = Array.from(tbody.querySelectorAll("tr"));

        trs.forEach((tr,index) => {
            if(index === 0){
                let td = document.createElement("td");
                td.innerHTML = "是否选中";
                tr.appendChild(td);
                return false;

            }

            let selected = document.createElement("span");
            selected.className = "select-justify"
            selected.addEventListener("click",function (){
                this.classList.toggle("select-justify-ensure");
            });
            let td = document.createElement("td");
            td.appendChild(selected);
            tr.appendChild(td);
        });

    });



});
