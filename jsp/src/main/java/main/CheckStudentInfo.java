package main;
import com.alibaba.fastjson.JSONObject;
import com.sun.deploy.security.CertStore;

import javax.management.relation.Role;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.util.TreeMap;

@WebServlet("/main/CheckStudentInfo")
public class CheckStudentInfo extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public CheckStudentInfo(){
        super();
    }

    protected void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException {
        response.setCharacterEncoding("UTF-8");
//        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        //用户ID
        String sId = request.getParameter("username");
        //occupation代表登录者的职业，枚举类型，有三个值
        //teacher老师，
        //student学生
        //manager管理员，
        //根据给定职业的不同分别连接至不同的数据库
        String occupation = request.getParameter("occupation");

        //数据库操作

        //JDBC code here...

        //如果是学生，则获取用户名、学号、性别、专业、入学时间、生日字段
        //如果是教师，则获取教师号、教师名、性别、教师职位、学院、教师生日字段
        //如果是管理员，则获取管理员账号、管理员姓名、性别字段

        ResultSet set = null;

        //把所有的结果集中的字段传入map中
        //一个人登录理论上结果集只有一行
        //如果有好几行就揍门鑫博
        TreeMap<String,String> map = new TreeMap<String,String>();
        map.put("occupation",occupation);
        map.put("username","此字段输入用户名");
        map.put("id","此字段输入ID");
        map.put("gender","此字段输入性别");
        map.put("birthday","此字段输入生日");
        map.put("department","此字段输入院系或专业");
        map.put("position","此字段输入职位");
        map.put("startTime","此字段输入入学时间");

        // 设置json的字符编码，中文乱码
        response.setContentType("text/json;charset=UTF-8");

        // 把role转换为json数据发到前端
        String str = JSONObject.toJSONString(map);

        out.println(str);
        out.flush(); // 刷新，把缓存区的数据发出去
        out.close(); // 关闭

    }

    protected void doPost(HttpServletRequest request,HttpServletResponse response) throws IOException {
        PrintWriter out = response.getWriter();
        out.println("4441");

    }

}
