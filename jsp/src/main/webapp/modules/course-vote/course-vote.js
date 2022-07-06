import {notify} from "../../public/notification/notification.js";
import {MyApp} from "../../public/config-main.js"



document.addEventListener("DOMContentLoaded",function main(){

    MyApp.customEvent.addListener("tableinit",function (){

        const table = document.querySelector("main>table");
        const tbody = table.querySelector("tbody");
        let trs = Array.from(tbody.querySelectorAll("tr"));
        const spans = Array.from(tbody.querySelectorAll("span.select-justify"));
        const deleteCourseBtn = document.querySelector("#delete-course");

        deleteCourseBtn.onclick = function (){
            let lessons = {};
            let selectedTr = [];
            let counter = 0;
            spans.forEach((/*HTMLSpanElement*/span,index) => {
                //如果没选中就跳过
                if(!span.classList.contains("select-justify-ensure"))return false;

                let tr = span.parentElement.parentElement;
                let cno = tr.querySelector("td[data-item-title='Cno']").innerText;

                lessons[counter++] = {cno};
                selectedTr.push(tr);
            });

            if(selectedTr.length === 0){
                notify.print("没有选中任何一项");
                return false;

            }

            let jsonString = JSON.stringify(lessons);
            console.log(jsonString);

            let formData = new FormData();
            formData.append("lessons",jsonString);

            fetch2("../coursevote/CourseVote",{
                method:"post",
                body:formData,
                headers:{
                    "content-type":"application/x-www-form-urlencoded"
                }
            }).then(response => response.text())
                .then(text => {
                     if(text === "fail"){
                        notify.print("操作错误");
                        return false;
                    }
                    console.log(selectedTr);
                     text = text.substring(text.indexOf(":")+1,text.length);
                     // text = text.split(",");
                   notify.print("为"+text+"投票成功");
                    selectedTr = [];

                });
        }
    });



});
