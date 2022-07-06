import {MyApp} from "../../public/config-main.js";
import {map as gradeTitleMap} from "./course-vote-map.js";

document.addEventListener("DOMContentLoaded",function (){
    const tbody = this.querySelector("table>tbody");
    let initTableWith2dArr = function (arr2d,titles){
        let table = document.createElement("table");
        let tbody = document.createElement("tbody");
        table.appendChild(tbody);
        let fragment = document.createDocumentFragment();
        arr2d.forEach(row => {
            let tr = document.createElement("tr");
            row.forEach((col,index) => {
                let td = document.createElement("td");
                let height = td.getBoundingClientRect().height;
                td.dataset.itemTitle = titles[index];
                td.innerHTML = col;
                td.style.height = height;
                td.style.transition = ".3s";
                tr.appendChild(td);
            })
            fragment.appendChild(tr);
        });
        tbody.appendChild(fragment);
        return table;
    };

    let getGrade = function (){
    fetch2("../coursevote/CheckCourseVote",{
        method:"post",
        body:new FormData(),
        headers:new Headers({
            "content-type":"application/x-www-form-urlencoded"
        })
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

                let table = initTableWith2dArr(arr2d,Object.keys(json[0]));
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