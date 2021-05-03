var canvas
var ctx
var img
var scene = []

//Initial the application
window.onload = function () {
    canvas = document.getElementById("gamePool");
    ctx = canvas.getContext("2d");
    scene.push(new backGround("mainBackground", 0, 0))
    //img = document.getElementById("mainBackground");
    //ctx.drawImage(img, 0, 0);
}