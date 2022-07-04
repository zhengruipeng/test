import {MyApp} from "../../public/config-main.js";
import {map as gradeTitleMap} from "../main/grade-title-map.js";

document.addEventListener("DOMContentLoaded",function (){
    const tbody = this.querySelector("table>tbody");
    let initTableWith2dArr = function (arr2d){
        let table = document.createElement("table");
        let tbody = document.createElement("tbody");
        table.appendChild(tbody);
        let fragment = document.createDocumentFragment();
        arr2d.forEach(row => {
            let tr = document.createElement("tr");
            row.forEach(col => {
                let td = document.createElement("td");
                td.innerHTML = col;
                tr.appendChild(td);
            })
            fragment.appendChild(tr);
        });
        tbody.appendChild(fragment);
        return table;
    };

    let getGrade = function (){
    fetch2("../selectcourse/CheckCourseGrade?username="+localStorage.getItem("username")+"",{
        method:"get",
    }).then(response => response.text())
        .then(text => {
            // try {
                const div = document.createElement("div");
                div.innerHTML = text;

                let json = JSON.parse(div.innerText);
            console.log(json)

                let arr2d = [[]];
                //获取表头
                Object.keys(json[0]).forEach(key => {
                    arr2d[0].push(gradeTitleMap.get(key));
                });

                //获取表格元素
                for (let n in json) {
                    let operation = json[n];
                    let temp = [];
                    for (let name in operation) {
                        temp.push(operation[name]);
                    }
                    arr2d.push(temp);
                }

                let table = initTableWith2dArr(arr2d);
            // console.log(table);
                let trs = Array.from(table.querySelectorAll("tr"));
                trs.forEach(tr => {
                    tbody.appendChild(tr);
                });
                MyApp.customEvent.dispatchEvent("tableinit");
          /*  }catch (e){
                console.log(text);
                getGrade();
            }*/
        })
    };
    getGrade();
})