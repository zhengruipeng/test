package selectcourse;
import com.alibaba.fastjson.JSONObject;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.util.Map;
import java.util.TreeMap;

@WebServlet("/selectcourse/CheckCourseGrade")
public class CheckCourseGrade extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public CheckCourseGrade(){
        super();
    }

    protected void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException {
        response.setCharacterEncoding("UTF-8");
//        response.setContentType("text/html;charset=UTF-8");
//        response.getWriter().append("1234");
        PrintWriter out = response.getWriter();

        //用户ID
        String sId = request.getParameter("username");

        //数据库操作

        //JDBC code here...



        ResultSet set = null;

        //把所有的结果集中的字段传入map中


        TreeMap<String, Map> map = new TreeMap<String,Map>();
        TreeMap<String,String> childmap1 = new TreeMap<String,String>();
        childmap1.put("Sno","学号");
        childmap1.put("Cno","课程号");
        childmap1.put("Tno","老师编号");
        childmap1.put("grade","成绩");
        childmap1.put("Tname","老师姓名");
        childmap1.put("Sname","学生姓名");
        map.put("0",childmap1);

        TreeMap<String,String> childmap2 = new TreeMap<String,String>();
        childmap2.put("Sno","学号2");
        childmap2.put("Cno","课程号2");
        childmap2.put("Tno","老师编号2");
        childmap2.put("grade","成绩2");
        childmap2.put("Tname","老师姓名2");
        childmap2.put("Sname","学生姓名2");
        map.put("1",childmap2);


        // 设置json的字符编码，中文乱码
        response.setContentType("text/json;charset=UTF-8");

        // 把role转换为json数据发到前端
        String str = JSONObject.toJSONString(map);

//        out.println(str);
        response.getWriter().append(str);
//        out.flush(); // 刷新，把缓存区的数据发出去
//        out.close(); // 关闭

    }

    protected void doPost(HttpServletRequest request,HttpServletResponse response) throws IOException {
        PrintWriter out = response.getWriter();
        out.println("4441");

    }

}
