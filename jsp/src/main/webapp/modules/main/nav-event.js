document.addEventListener("DOMContentLoaded",function () {
    const studentTableNav = this.querySelector("#student-table-nav");
    const courseTeacherNav = this.querySelector("#course-teacher-nav");
    const courseTableNav = this.querySelector("#course-table-nav");
    const accountManager = this.querySelector("#account-manager");
    const lis = accountManager?Array.from(accountManager.querySelectorAll("ul>li")):undefined;
    const lis2 = courseTableNav?Array.from(courseTableNav.querySelectorAll("ul>li")):undefined;
    /*studentTableNav.onclick = function (){
        location = "../functions/format-form/form/view/form.jsp?table=student&handlePage=set-info.jsp&" +
            "enablePlugins=aside-UI,file-import,update-monolog&insertPlugins=./modules/main/helloWorld.js";

    };*/
    /*courseTableNav.onclick = function (){
       /!* location = "../functions/format-form/form/view/form.jsp?table=course&handlePage=set-info.jsp&" +
            "enablePlugins=aside-UI,update-monolog&insertPlugins=./modules/main/checkup-grade.js";*!/
        location = "./"
    };*/
    //老师管理选课
    courseTeacherNav && (courseTeacherNav.onclick = function (){
        location = "./selecting-course-teacher.html";
        location = "../functions/format-form/form/view/form.jsp?table=tb_course&handlePage=set-info.jsp&" +
            "enablePlugins=*";
    })
    //已选课程成绩
    lis2 && (lis2[0].onclick = function (){
        location = "./selecting-course.html";
    })
    //选择新课程
    lis2 && (lis2[1].onclick = function (){
        // alert();
        location = "./select-course.html";
    })
    lis && (lis[0].onclick = function (){
        location = "../functions/format-form/form/view/form.jsp?table=tb_student&handlePage=set-info.jsp&" +
            "enablePlugins=*";
    })
    lis && (lis[1].onclick = function (){
        location = "../functions/format-form/form/view/form.jsp?table=tb_teacher&handlePage=set-info.jsp&" +
            "enablePlugins=*";
    })
    lis && (lis[2].onclick = function (){
        location = "../functions/format-form/form/view/form.jsp?table=tb_manager&handlePage=set-info.jsp&" +
            "enablePlugins=*";
    })

});