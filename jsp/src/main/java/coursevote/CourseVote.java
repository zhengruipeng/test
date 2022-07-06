package coursevote;
import com.alibaba.fastjson.JSONObject;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.util.Map;

@WebServlet("/coursevote/CourseVote")
public class CourseVote extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public CourseVote(){
        super();
    }

    private String join(int[] arr,String splitor){
        StringBuilder sb = new StringBuilder();
        for(int value :arr){
            sb.append(value);
            sb.append(splitor);
        }
        sb.delete(sb.length()-1,sb.length()-1);
        return sb.toString();
    };

    private String join(String[] arr,String splitor) {
        StringBuilder sb = new StringBuilder();
        for(String value :arr){
            sb.append(value);
            sb.append(splitor);
        }
        sb.delete(sb.length()-1,sb.length()-1);
        return sb.toString();
    };
    protected void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException {

    }

    protected void doPost(HttpServletRequest request,HttpServletResponse response) throws IOException {
        response.setCharacterEncoding("UTF-8");
//        response.setContentType("text/html;charset=UTF-8");
//        response.getWriter().append("1234");
        PrintWriter out = response.getWriter();

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
        //基本思路：在tb_uservotestorage表中查找这个人的投票数据，
        //如果他曾经投过票的话就跳过，
        //如果在这个表中查到这个人投票五票以上禁止投票
        //如果本身没到五个加上这几票过于五个了的话就劫到五个为止。
        //JDBC code here...


        //投票的课程名数组
        String[] votedCourseNo = new String[]{"java","计算机图形学"};

        if(votedCourseNo.length > 0){
            out.println("success:"+this.join(votedCourseNo,","));
        }else{
            out.println("fail");
        }


    }

}
