<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link href="main.css" rel="stylesheet" type="text/css" />
    <link href="menu.css" rel="stylesheet" type="text/css" />
</head>
<body>
<!--
    可以随时向dataMap中添加新的信息：添加方法：
        如果添加新的数据块则复制一个已有的，按顺序换个名字
        之后__belongTo属性代表这个资源的来源，随便写
        之后在UnionMap.js中把后加的资源包引入，之后添加到数组里，其它的全自动

     可以通过鼠标右键访问工具栏。

     accessSuffix.js用于管理所有支持的后缀，如果文件后缀是支持后缀中的话，
     比较两个资源是否统一的时候会默认忽略后缀
     需要添加直接添加就行

-->
<?php
/*    include_once "selectdir.php";
    $json = json_decode($_POST['path']);
    foreach($json as $add=>$name){
        echo json_encode(selectdir($name,$add));
    }
*/?>
<main>

</main>
<script type="module">
    // import {unionMap} from "./UnionMap.js"
    import {parseMap} from "./ParseMap.js"
    document.addEventListener("DOMContentLoaded",function (){
        let unionMap = [
            <?php
            include_once "selectdir.php";
            $json = json_decode($_POST['path']);
            foreach($json as $add=>$name){
                $json_str = json_encode(selectdir($name,$add));
                echo $json_str.",";
            }
            ?>
        ];
        const main = this.querySelector("main");

        unionMap.forEach(map => {
            parseMap.parse(map,main);
        })
    })
</script>
<script type="module" src="./checkFiles.js"></script>
<script type="module" src="./searchBackUp.js"></script>
<script type="module" src="./autoMatchAllBackUp.js"></script>
</body>
</html>