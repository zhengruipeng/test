document.addEventListener("DOMContentLoaded",function () {
    const studentTableNav = this.querySelector("#student-table-nav");
    const courseTableNav = this.querySelector("#course-table-nav");
    studentTableNav.onclick = function (){
        location = "../functions/format-form/form/view/form.jsp?table=student&handlePage=set-info.jsp";

    };
    courseTableNav.onclick = function (){
        location = "../functions/format-form/form/view/form.jsp?table=course&handlePage=set-info.jsp";

    };


});