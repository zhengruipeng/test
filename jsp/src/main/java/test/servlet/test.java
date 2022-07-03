package test.servlet;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.rmi.ServerException;

@WebServlet("/test")
public class test extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public test(){
        super();
    }

    protected void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException {
        response.getWriter().append("Served at: ").append(request.getContextPath())
                .append("<h1>1234</h1>");
        PrintWriter out = response.getWriter();
        out.println("<a href='http://www.baidu.com'>1234</a>");
    }
}
