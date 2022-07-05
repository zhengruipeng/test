package main;
import com.alibaba.fastjson.JSONObject;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.util.TreeMap;

@WebServlet("/main/CheckVoteInfo")
public class CheckVoteInfo extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public CheckVoteInfo(){
        super();
    }

    protected void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException {
        response.setCharacterEncoding("UTF-8");

        PrintWriter out = response.getWriter();
        //数据库操作

        //JDBC code here...

        //获取那个投票的表

        ResultSet set = null;

        //把所有的结果集中的字段传入map中
        //一个人登录理论上结果集只有一行
        //如果有好几行就揍门鑫博
        TreeMap<String,String> map = new TreeMap<String,String>();
        map.put("java","1");
        map.put("计算机图形学","2");
        map.put("计算机密码","3");
        map.put("计算机音频学","3");
        map.put("机械学习","3");
        map.put("JS基础理论","3");
        
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
