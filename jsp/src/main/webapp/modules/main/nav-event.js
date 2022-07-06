document.addEventListener("DOMContentLoaded",function () {
    const studentTableNav = this.querySelector("#student-table-nav");
    const courseTeacherNav = this.querySelector("#course-teacher-nav");
    const courseTableNav = this.querySelector("#course-table-nav");
    const courseVoteNav = this.querySelector("#course-vote-nav");
    const accountManager = this.querySelector("#account-manager");
    const otherManager = this.querySelector("#other-manager");
    const changeSelectCourse = this.querySelector("#change-select-course");
    const myCourse = this.querySelector("#my-course");
    const studentCourse = this.querySelector("#student-course");

    const lis = accountManager?Array.from(accountManager.querySelectorAll("ul>li")):undefined;
    const lis2 = courseTableNav?Array.from(courseTableNav.querySelectorAll("ul>li")):undefined;
    const lis3 = otherManager?Array.from(otherManager.querySelectorAll("ul>li")):undefined;

    //老师管理选课
    courseTeacherNav && (courseTeacherNav.onclick = function (){
        // location = "./selecting-course-teacher.html";
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

    //管理专业
    lis3 && (lis3[0].onclick = function (){
        location = "../functions/format-form/form/view/form.jsp?table=tb_major&handlePage=set-info.jsp&" +
            "enablePlugins=*";
    })
    //管理院系
    lis3 && (lis3[1].onclick = function (){
        location = "../functions/format-form/form/view/form.jsp?table=tb_college&handlePage=set-info.jsp&" +
            "enablePlugins=*";
    })

    courseVoteNav && (courseVoteNav.onclick = function (){
        location = "./course-vote.html";
        // location = "../functions/format-form/form/view/form.jsp?table=tb_course&handlePage=set-info.jsp&" +
        //     "enablePlugins=*";
    });
    changeSelectCourse && (changeSelectCourse.onclick = function (){
        location = "../functions/format-form/form/view/form.jsp?table=tb_select&handlePage=set-info.jsp&" +
            "enablePlugins=*";
    })
    //查看教师上课信息
    myCourse && (myCourse.onclick = function (){
        location = "./my-course.html";
        // location = "../functions/format-form/form/view/form.jsp?table=tb_course&handlePage=set-info.jsp&" +
        //     "enablePlugins=*";
    });
    //查看学生上课信息
    studentCourse && (studentCourse.onclick = function (){
        location = "./student-course.html";
        // location = "../functions/format-form/form/view/form.jsp?table=tb_course&handlePage=set-info.jsp&" +
        //     "enablePlugins=*";
    });

    // courseVoteNav
});