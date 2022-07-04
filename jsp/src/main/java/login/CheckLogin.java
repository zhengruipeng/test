package login;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/login/CheckLogin")
public class CheckLogin extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public CheckLogin(){
        super();
    }

    protected void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException {
        PrintWriter out = response.getWriter();
        /*out.println(request.getParameter("username"));
        out.println(request.getParameter("password"));
        out.println("success");*/
    }
    protected void doPost(HttpServletRequest request,HttpServletResponse response) throws IOException {
        PrintWriter out = response.getWriter();

        //从前端传过来的两个值用户名和密码
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        //occupation代表登录者的职业，枚举类型，有三个值
        //teacher老师，
        //student学生
        //manager管理员，
        //根据给定职业的不同分别连接至不同的数据表
        String occupation = request.getParameter("occupation");

        //数据库操作

        //JDBC code here...

        Boolean isRight = true;

        // 如果对上了返回success
        if(isRight){
            out.println("success");
        }
        //没对上返回fail
        else {
            out.println("fail");
        }

    }
}
