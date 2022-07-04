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
                let sno = tr.querySelector("td[data-item-title='Sno']").innerText;
                let tno = tr.querySelector("td[data-item-title='Tno']").innerText;

                lessons[counter++] = {cno,sno,tno};
                selectedTr.push(tr);
            });

            let jsonString = JSON.stringify(lessons);
            console.log(jsonString);

            let formData = new FormData();
            formData.append("lessons",jsonString);

            fetch2("../selectcourse/DeleteCourse",{
                method:"post",
                body:formData,
                headers:{
                    "content-type":"application/x-www-form-urlencoded"
                }
            }).then(response => response.text())
                .then(text => {
                    console.log(text);
                    if(text === "fail"){
                        notify.print("删除错误");
                        return false;
                    }
                    console.log(selectedTr);
                    selectedTr.forEach((/*HTMLTableRowElement*/tr,index) => {
                        tr.parentElement?.removeChild(tr);
                        notify.print("已删除课程");
                        // selectedTr.splice(index,1);
                        /*tr.style.height = "0";
                        tr.innerHTML = "";
                        tr.ontransitionend = function (){
                            this.parentElement.removeChild(this);
                        };*/
                    });
                    selectedTr = [];

                });
        }
    });



});
