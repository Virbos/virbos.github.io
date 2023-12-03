console.log("Hello, curious one");

var i = 0;
var x = 0;
var titletxt = 'Virbos';
var subtitletxt = 'The linux distribution for nerds, by nerds.';
var speed = 50; /* ms */

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function typeWriterTitle() {
    if (i < titletxt.length) {
        document.getElementById("virbos-title").innerHTML += titletxt.charAt(i);
        i++;
        setTimeout(typeWriterTitle, speed);
    } else {
        delay(100).then(() => typeWriterSubtitle())
    }
}

function typeWriterSubtitle() {
    if (x < subtitletxt.length) {
        document.getElementById("virbos-subtitle").innerHTML += subtitletxt.charAt(x);
        x++;
        setTimeout(typeWriterSubtitle, speed);
    }
}

typeWriterTitle();

var colors = ["00ff00", "0D8CFF", "F0A500", "FF1E19", "D00EE8", "FFFF00", "0DDF96", "B6FF0D"]

function randomColor() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    document.getElementById("maincss").innerHTML = '@import url("index.css");\n\n:root {\n    --accent: #' + colors[randomIndex] + ' !important;\n}';
    document.getElementById("matrix").src = "matrix/matrix.html?color=" + colors[randomIndex];
}

randomColor()