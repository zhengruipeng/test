<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="org.apache.commons.fileupload.servlet.ServletFileUpload" %>
<%@ page import="org.apache.commons.fileupload.FileItemIterator" %>
<%@ page import="org.apache.commons.fileupload.FileItemStream" %>
<%@ page import="java.io.ByteArrayOutputStream" %>
<%@ page import="java.io.InputStream" %>
<%@ page import="java.awt.image.BufferedImage" %>
<%@ page import="javax.imageio.ImageIO" %>
<%@ page import="java.util.logging.Logger" %>
<%@ page import="org.imgscalr.Scalr" %><%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2022/07/01
  Time: 14:29
  To change this template use File | Settings | File Templates.
--%>
<%
    ServletFileUpload servletFileUpload = new ServletFileUpload();
    FileItemIterator fileItemIterator = servletFileUpload.getItemIterator(request);
    byte[] imageDatas = null;
    String imageName = null;
    String imgFormatName = null;
    if (fileItemIterator.hasNext()) {
        FileItemStream fileStream = fileItemIterator.next();
        imageName = fileStream.getName();

        if (imageName == null || imageName.trim().length() == 0) {
            throw new Exception("文件名称为空");
        }

        imageName = imageName.toLowerCase();

        if (imageName.endsWith("jpg") || imageName.endsWith("jpeg")) {
            imgFormatName = "jpg";
        } else if (imageName.endsWith("png")) {
            imgFormatName = "png";
        } else if (imageName.endsWith("gif")) {
            imgFormatName = "gif";
        } else {
            throw new Exception("只支持:jpg、png、gif三种图片");
        }

        ByteArrayOutputStream baos = new ByteArrayOutputStream();

        InputStream inputStream = null;

        try {
            inputStream = fileStream.openStream();
            BufferedImage bufferedImage = ImageIO.read(inputStream);
            int width = bufferedImage.getWidth();
            int height = bufferedImage.getHeight();
            BufferedImage needSavedImage = bufferedImage;
            if (width > 600) {
                needSavedImage = org.imgscalr.Scalr.resize(bufferedImage, Scalr.Method.SPEED, 600, Float.valueOf(height * (600.0f/width)).intValue(), org.imgscalr.Scalr.OP_BRIGHTER);

            } else if (height > 600) {
                needSavedImage = org.imgscalr.Scalr.resize(bufferedImage, Scalr.Method.SPEED, Float.valueOf(width * (600.0f/height)).intValue(), 600, org.imgscalr.Scalr.OP_BRIGHTER);

            }
            ImageIO.write(needSavedImage, imgFormatName, baos);
            imageDatas = baos.toByteArray();

        } catch(Exception e) {
//            Logger.error(e.getMessage(), e);
            System.out.println(e.getMessage());
        } finally {
            if (inputStream != null) {
                try {
                    inputStream.close();

                } catch(Exception e) {
//                    Logger.error(e.getMessage(), e);
                    System.out.println(e.getMessage());

                }
            }
        }
    }
%>