//creating variables.
var bgImg;
var snitch,snitchImg;
var bludger,bludgerImg;
var harry,harryImg;
var snitchGroup;
var bludgerGroup;

function preload(){
    //loading background image.
    bgImg = loadImage("quidditch_pitch5.jpeg");
    //loading image for the snitches.
    snitchImg = loadImage("snitch.png");
    //loading image for the bludgers
    bludgerImg = loadImage("bludger.png");
    //loading image for harry(PC).
    harryImg = loadImage("harry1.png");
}

function setup(){
    //creating harry(PC) sprite.
    harry = createSprite(300,350,100,30);
    harry.addImage("harry_potter",harryImg);
    harry.scale = 2.5;

    //creating snitch and bludger groups.
    snitchGroup = createGroup();
    bludgerGroup = createGroup();
}

function draw(){
    //creating canvas and adding background image.
    createCanvas(displayWidth -5,displayHeight -108);
    image(bgImg,0,0,displayWidth -5,displayHeight -108);
    //background("silver");

    harry.x = World.mouseX;
    harry.y = World.mouseY;

    createSnitches();
    createBludgers();

    drawSprites();
}

function createSnitches(){
    //creating snitch if frame count is 100 or a multiple of 100
    if (frameCount %100 === 0){
        snitch = createSprite(1600,100,20,20);
        snitch.addImage("snitch",snitchImg);
        snitch.velocityX = -6;
        snitch.scale = 0.5;
        snitch.y = Math.round(random(100,500));

        snitch.lifetime = 500;

        snitchGroup.add(snitch);
    }
}

function createBludgers(){
    //creating bludger if frame count is 200 or a multiple of 200
    if (frameCount %200 === 0){
        bludger = createSprite(1200,100,20,20);
        bludger.addImage("bludger",bludgerImg);
        bludger.velocityX = -4;
        bludger.scale = 0.7;
        bludger.y = Math.round(random(100,500));

        bludger.lifetime = 500;

        bludgerGroup.add(bludger);
    }
}