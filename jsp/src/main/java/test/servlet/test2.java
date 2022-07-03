package test.servlet;

import java.util.TreeMap;

public class test2 {
    public static void main(String[] args){
        TreeMap<String,String> map = new TreeMap<String,String>();
        map.put("username","此字段输入用户名");
        map.put("id","此字段输入ID");
        map.put("gender","此字段输入性别");
        map.put("birthday","此字段输入生日");
        map.put("department","此字段输入院系或专业");
        map.put("position","此字段输入职位");
        map.put("startTime","此字段输入入学时间");

        System.out.println(map.get("id"));
    }
}
