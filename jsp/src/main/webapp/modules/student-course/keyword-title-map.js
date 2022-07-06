/*<String,String>*/let map = null;
/*enum*/let keyWord = ["occupation", "birthday", "department", "gender",
    "id", "position", "startTime", "username", "leaderName", "leaderTel",
    "Cname","Ccre","Cno","Tname","Tno"];

(function (){
    let title = ["职业","生日","院系","性别","ID","职位","入学时间","用户名",
        function (occupation){return occupation === "student"?"导员姓名":"院长姓名"},
        function (occupation){return occupation === "student"?"导员电话":"院长电话"},
        "课程名","学分","课程号","老师名","老师号"];
    let res = [];
    for(let i = 0;i<keyWord.length;i++){
        res[i] = [keyWord[i],title[i]];
    }
    map = new Map(res);
})();
export {map};