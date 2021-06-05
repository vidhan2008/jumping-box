var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;
var wall1;
var wall2;
var wall3;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 = createSprite(100,585,190,30)
surface1.shapeColor = "green"

surface2=createSprite(300,585,190,30)
surface2.shapeColor = "red"

surface3=createSprite(500,585,190,30)
surface3.shapeColor = "pink"

surface4=createSprite(700,585,190,30)
surface4.shapeColor = "blue"

wall1=createSprite(810,300,30,600)
wall1.shapeColor = "white"

wall2=createSprite(-10,300,30,600)
wall2.shapeColor = "white"

wall3=createSprite(400,-10,800,30)
wall3.shapeColor = "white"

    //create box sprite and give velocity

box = createSprite(random(20,750),300,50,50)
box.shapeColor = "white"
box.velocityY=4
box.velocityX=4
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    //add condition to check if box touching surface and make it box
if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor = "green"
}

if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor = "red"
}

if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor = "pink"
}

if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor = "blue"
}

if(wall1.isTouching(box) ){
    box.bounceOff(wall1)
}

if(wall2.isTouching(box) ){
    box.bounceOff(wall2)
}

if(wall3.isTouching(box) ){
    box.bounceOff(wall3)
}
    drawSprites();
}
