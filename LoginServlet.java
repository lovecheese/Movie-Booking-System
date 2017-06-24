package common.Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.Statement;
import java.util.List;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.http.fileupload.FileItem;
import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.apache.tomcat.util.http.fileupload.disk.DiskFileItemFactory;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;
import org.apache.tomcat.util.http.fileupload.servlet.ServletRequestContext;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		

		response.setContentType("text/html");
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");

		PrintWriter writer = null;
		writer = response.getWriter();

		// Information of database
		final String url="jdbc:mysql://localhost:3306/movie_ticket?useUnicode=true" +
		                        "&characterEncoding=utf-8";
		final String username="root";
		final String password="ren avril";

		// statement to access database
		Connection conn=null;
		Statement stmt=null;
		ResultSet st=null;

		String Username=null;
		String Password=null;

		DiskFileItemFactory factory = new DiskFileItemFactory();
		ServletFileUpload upload = new ServletFileUpload(factory);
		List<FileItem> items;
		try {
			items = (List<FileItem>)upload.parseRequest(new ServletRequestContext(request));
			for (FileItem item : items) {
				if (item.isFormField()) {
					String fieldName = item.getFieldName();
					if (fieldName != null && fieldName.equals("username")) {
						Username = item.getString();
					} else if (fieldName != null && fieldName.equals("password")) {
						Password = item.getString();
					}
				}
			}
		} catch (FileUploadException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		
		//sql statement
		System.out.println(Username + ": " + Password);
		final String querystring_1 = "SELECT username FROM userInfo where username='"
		                         + Username + "'";
		final String querystring_2 = "SELECT password FROM userInfo where username='"
		                         + Username + "'";

		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch(ClassNotFoundException e) {
			System.out.println("cannot find the driver!!!");
			e.printStackTrace();
		}

		try {
			conn = DriverManager.getConnection(url, username, password);
			if (conn == null) {
				System.out.println("cannot access the database!!!");
			} else {
				System.out.println("can access the database");
				stmt = conn.createStatement();
				conn.setAutoCommit(false);

				st = stmt.executeQuery(querystring_1);
				if (!st.next()) {
					writer.write("u_n_e");
				} else {
					st = stmt.executeQuery(querystring_2);
					if (st.next() && !st.getString("password").equals(Password)) {
						writer.write("p_w");
					} else {
						writer.write("OK");
					}
				}
			}
		} catch(SQLException e) {
			e.printStackTrace();
		} finally {
			if (st != null) {
				try {
					st.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			if (stmt != null) {
				try {
					stmt.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			if (conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}

}
