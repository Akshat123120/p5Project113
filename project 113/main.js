var img = "";
function preload(){
 img = loadImage("icon.jpg");
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
}
function draw(){
    image(img,0,0,640,480);
    circle(40,50,60);
    fill("red");
    circle(600,50,60);
    circle(40,425,60);
    circle(600,425,60);
    rect(70,15,500,60)
    rect(70,405,500,60)
    rect(15,80,60,320)
    rect(570,80,60,320)
}
function take_snapshot(){
    save('p5Project.png');
}
