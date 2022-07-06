package coursevote;
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

@WebServlet("/coursevote/CheckCourseVote")
public class CheckCourseVote extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public CheckCourseVote(){
        super();
    }
    protected void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException {
        PrintWriter out = response.getWriter();
        out.println("4441");

    }
    protected void doPost(HttpServletRequest request,HttpServletResponse response) throws IOException {
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();


        //数据库操作
        //取出所有投票数据
        //JDBC code here...



        ResultSet set = null;

        //把所有的结果集中的字段传入map中


        TreeMap<String, Map> map = new TreeMap<String,Map>();
        TreeMap<String,String> childmap1 = new TreeMap<String,String>();
        childmap1.put("Cno","课程号");
        childmap1.put("Cname","课程名");
        childmap1.put("Cnum","票数");
        map.put("0",childmap1);

        TreeMap<String,String> childmap2 = new TreeMap<String,String>();
        childmap2.put("Cno","课程号");
        childmap2.put("Cname","课程名");
        childmap2.put("Cnum","票数");
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



}
