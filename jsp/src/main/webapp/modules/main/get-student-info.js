import {keyWord,keywordTitleMap} from "./keyword-title-map.js";

document.addEventListener("DOMContentLoaded",function () {
    const memorandumPageContainer = this.querySelector("#memorandum-page-container");
    const informationPageContainer = this.querySelector("#information-page-container");
    const usernameContainer = memorandumPageContainer.querySelector("h1>span");
    const infoContainer = informationPageContainer.querySelector("dl");
    fetch2("../main/CheckStudentInfo?username="+localStorage.getItem("usernaem")+"" +
        "&occupation="+localStorage.getItem("occupation")+"",{
        method:"get",
    })
        .then(response => response.json())
        .then(json => {
            /*
            * birthday: "此字段输入生日"
                department: "此字段输入院系或专业"
                gender :  "此字段输入性别"
                id :  "此字段输入ID"
                occupation: "student"
                position: "此字段输入职位"
                startTime:  "此字段输入入学时间"
                username : "此字段输入用户名"
                * */
            console.log(json);
            usernameContainer.innerHTML = "，" + json.username;


            // console.log(map);

            for (let name in json) {
                if(!keyWord.includes(name))return false;

                let dt = document.createElement("dt");
                let dd = document.createElement("dd");
                dt.innerHTML = keywordTitleMap.get(name);
                dd.innerHTML = json[name];

                infoContainer.appendChild(dt);
                infoContainer.appendChild(dd);
            }
        });


});