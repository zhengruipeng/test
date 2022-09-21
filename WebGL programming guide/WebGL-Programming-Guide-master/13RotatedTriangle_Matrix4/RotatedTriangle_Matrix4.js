/**
 * Created by hushhw on 17/12/14.
 */
//RotatedTriangle.js
// 变换矩阵旋转
/*
var VSHADER_SOURCE =
    //x' = x cos b - y sin b
    //y' = x sin b + y cosb
    //z' = z
    'attribute vec4 a_Position;\n' +
    'uniform mat4 u_xformMatrix;\n' +
    'void main() {\n' +
    'gl_Position = u_xformMatrix * a_Position;\n' +
    '}\n';

var FSHADER_SOURCE=
    'void main(){'+
    'gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);'+
    '}';

var ANGLE = 90.0;

function main(){

    var canvas = document.getElementById("webgl");
    if(!canvas){
        console.log("Failed to retrieve the <canvas> element");
        return;
    }

    var gl = getWebGLContext(canvas);
    if(!gl){
        console.log("Failed to get the rendering context for WebGL");
        return;
    }

    if(!initShaders(gl,VSHADER_SOURCE,FSHADER_SOURCE)){
        console.log("Failed to initialize shaders.");
        return;
    }

    //设置顶点位置
    var n = initVertexBuffers(gl);
    if (n < 0) {
        console.log('Failed to set the positions of the vertices');
        return;
    }

    var xformMatrix = new Matrix4();

    xformMatrix.setRotate(ANGLE, 0, 0, 1);

    var u_xformMatrix = gl.getUniformLocation(gl.program, 'u_xformMatrix');
    if(u_xformMatrix < 0){
        console.log("Failed to get the storage location of u_xformMatrix");
        return;
    }

    gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix.elements);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.TRIANGLES, 0, n);
}

function initVertexBuffers(gl) {
    var vertices = new Float32Array(
        [0.0, 0.5, -0.5, -0.5, 0.5, -0.5]
    );
    var n=3; //点的个数

    //创建缓冲区对象
    var vertexBuffer = gl.createBuffer();
    if(!vertexBuffer){
        console.log("Failed to create thie buffer object");
        return -1;
    }

    //将缓冲区对象保存到目标上
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

    //向缓存对象写入数据
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if(a_Position < 0){
        console.log("Failed to get the storage location of a_Position");
        return -1;
    }

    //将缓冲区对象分配给a_Postion变量
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

    //连接a_Postion变量与分配给它的缓冲区对象
    gl.enableVertexAttribArray(a_Position);

    return n;
}
*/
/*
// 变换矩阵平移
var VSHADER_SOURCE =
    //x' = x cos b - y sin b
    //y' = x sin b + y cosb
    //z' = z
    'attribute vec4 a_Position;\n' +
    'uniform mat4 u_xformMatrix;\n' +
    'void main() {\n' +
    'gl_Position = u_xformMatrix * a_Position;\n' +
    '}\n';

var FSHADER_SOURCE=
    'void main(){'+
    'gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);'+
    '}';

var Tx = 0.5, Ty = 0.5, Tz = 0.0;

function main(){

    var canvas = document.getElementById("webgl");
    if(!canvas){
        console.log("Failed to retrieve the <canvas> element");
        return;
    }

    var gl = getWebGLContext(canvas);
    if(!gl){
        console.log("Failed to get the rendering context for WebGL");
        return;
    }

    if(!initShaders(gl,VSHADER_SOURCE,FSHADER_SOURCE)){
        console.log("Failed to initialize shaders.");
        return;
    }

    //设置顶点位置
    var n = initVertexBuffers(gl);
    if (n < 0) {
        console.log('Failed to set the positions of the vertices');
        return;
    }

    var xformMatrix = new Matrix4();

    xformMatrix.setTranslate(0.5, 0.5, 0.5);

    var u_xformMatrix = gl.getUniformLocation(gl.program, 'u_xformMatrix');
    if(u_xformMatrix < 0){
        console.log("Failed to get the storage location of u_xformMatrix");
        return;
    }

    gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix.elements);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.TRIANGLES, 0, n);
}

function initVertexBuffers(gl) {
    var vertices = new Float32Array(
        [0.0, 0.5, -0.5, -0.5, 0.5, -0.5]
    );
    var n=3; //点的个数

    //创建缓冲区对象
    var vertexBuffer = gl.createBuffer();
    if(!vertexBuffer){
        console.log("Failed to create thie buffer object");
        return -1;
    }

    //将缓冲区对象保存到目标上
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

    //向缓存对象写入数据
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if(a_Position < 0){
        console.log("Failed to get the storage location of a_Position");
        return -1;
    }

    //将缓冲区对象分配给a_Postion变量
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

    //连接a_Postion变量与分配给它的缓冲区对象
    gl.enableVertexAttribArray(a_Position);

    return n;
}
*/

// 变换矩阵缩放
var VSHADER_SOURCE =
    //x' = x cos b - y sin b
    //y' = x sin b + y cosb
    //z' = z
    'attribute vec4 a_Position;\n' +
    'uniform mat4 u_xformMatrix;\n' +
    'void main() {\n' +
    'gl_Position = u_xformMatrix * a_Position;\n' +
    '}\n';

var FSHADER_SOURCE=
    'void main(){'+
    'gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);'+
    '}';

var Sx = 1.0, Sy = 1.5, Sz = 1.0;

function main(){

    var canvas = document.getElementById("webgl");
    if(!canvas){
        console.log("Failed to retrieve the <canvas> element");
        return;
    }

    var gl = getWebGLContext(canvas);
    if(!gl){
        console.log("Failed to get the rendering context for WebGL");
        return;
    }

    if(!initShaders(gl,VSHADER_SOURCE,FSHADER_SOURCE)){
        console.log("Failed to initialize shaders.");
        return;
    }

    //设置顶点位置
    var n = initVertexBuffers(gl);
    if (n < 0) {
        console.log('Failed to set the positions of the vertices');
        return;
    }

    var xformMatrix = new Matrix4();

    xformMatrix.setScale(0.5, 1.5, 1.0);

    var u_xformMatrix = gl.getUniformLocation(gl.program, 'u_xformMatrix');
    if(u_xformMatrix < 0){
        console.log("Failed to get the storage location of u_xformMatrix");
        return;
    }

    gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix.elements);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.TRIANGLES, 0, n);
}

function initVertexBuffers(gl) {
    var vertices = new Float32Array(
        [0.0, 0.5, -0.5, -0.5, 0.5, -0.5]
    );
    var n=3; //点的个数

    //创建缓冲区对象
    var vertexBuffer = gl.createBuffer();
    if(!vertexBuffer){
        console.log("Failed to create thie buffer object");
        return -1;
    }

    //将缓冲区对象保存到目标上
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

    //向缓存对象写入数据
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if(a_Position < 0){
        console.log("Failed to get the storage location of a_Position");
        return -1;
    }

    //将缓冲区对象分配给a_Postion变量
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

    //连接a_Postion变量与分配给它的缓冲区对象
    gl.enableVertexAttribArray(a_Position);

    return n;
}
