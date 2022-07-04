package selectcourse;
import com.alibaba.fastjson.JSONObject;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.sql.ResultSet;
import java.util.Map;
import java.util.TreeMap;

@WebServlet("/selectcourse/DeleteCourse")
public class DeleteCourse extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public DeleteCourse(){
        super();
    }

    protected void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException {

    }

    protected void doPost(HttpServletRequest request,HttpServletResponse response) throws IOException {
        response.setCharacterEncoding("UTF-8");
//        response.setContentType("text/html;charset=UTF-8");
//        response.getWriter().append("1234");
        PrintWriter out = response.getWriter();

        //用户ID
        String lessons = request.getParameter("lessons");
        lessons = new String(lessons.getBytes(StandardCharsets.ISO_8859_1), StandardCharsets.UTF_8);

        Map<String,Map<String,String>> lessonsMap = (Map<String,Map<String,String>>)JSONObject.parse(lessons);

        String sql = "";

        lessonsMap.forEach((String index,Map<String,String> map) -> {
            System.out.print(index);
            //index代表第多少条
            map.forEach((String title,String value) -> {
                //title代表传输信息的标题，可能是三个值cno,sno,tno
                //cno代表value的值是课程号，
                //sno代表value的值是学生标号
                //tno代表教师编号
                //用这几组信息生成一堆sql语句之后放数据库里面执行
                System.out.print(title);
                System.out.print(value);

            });
            System.out.println();
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
