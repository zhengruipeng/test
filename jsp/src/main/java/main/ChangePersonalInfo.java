package main;
import com.alibaba.fastjson.JSONObject;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.util.Map;

@WebServlet("/main/ChangePersonalInfo")
public class ChangePersonalInfo extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public ChangePersonalInfo(){
        super();
    }

    protected void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException {

    }
    protected void doPost(HttpServletRequest request,HttpServletResponse response) throws IOException {
        PrintWriter out = response.getWriter();

        //从前端传过来的两个值用户名和密码

        //occupation代表登录者的职业，枚举类型，有三个值
        //teacher老师，
        //student学生
        //manager管理员，
        //根据给定职业的不同分别连接至不同的数据表
        String occupation = request.getParameter("occupation");
        String id = request.getParameter("username");
        String info = request.getParameter("info");
        info = new String(info.getBytes(StandardCharsets.ISO_8859_1), StandardCharsets.UTF_8);


        Map<String,String> lessonsMap = (Map<String,String>) JSONObject.parse(info);

        String sql = "";

        lessonsMap.forEach((String title,String value) -> {
            //title代表传输信息的标题，跟数据库标题一致
            //value代表这个标题的信息
            //利用ID和occupation生成更新的Sql语句，把所有的键值对都填上。
            System.out.print(title);
            System.out.print(value);
        });

        //数据库操作

        //JDBC code here...



        int effectLine = 1;

        //如果受影响的行数大于0输出success
        //否则输出fail
        if(effectLine>0){
            out.println("success");
        }else{
            out.println("fail");
        }

    }
}
