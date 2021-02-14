var canvas, edges, music, box;
var first, second, third, fourth;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    
    canvas = createCanvas(800,600);

    box = createSprite(10,50,25,25);
    box.shapeColor="white";
    box.x = Math.round(random(30,370));

    box.velocityX=7;
    box.velocityY=7;

    first = createSprite(85,590,205,25);
    first.shapeColor="red";
    
    second = createSprite(295,590,205,25);
    second.shapeColor="green";

    third = createSprite(505,590,205,25);
    third.shapeColor="yellow";

    fourth = createSprite(715,590,205,25);
    fourth.shapeColor="blue";
}

function draw() {
    background(rgb(169,169,169));

    edges = createEdgeSprites();
    box.bounceOff(edges);
    
    if(isTouching(box,first)){ 
        box.shapeColor ="red";
        box.velocityX = 0;
        box.velocityY = 0;
        music.play();
    }

    if(isTouching(box,second)){ 
        box.shapeColor = "green";
        bounceOff(box,second);
    }

    if(isTouching(box,third)){ 
        box.shapeColor = "yellow";
        bounceOff(box,third);
    }

    if(isTouching(box,fourth)){ 
        box.shapeColor = "blue";
        bounceOff(box,fourth);
    }

    drawSprites();

}

function isTouching(object1,object2){

    if(object2.x-object1.x < object1.width/2 + object2.width/2 && object1.x-object2.x < object1.width/2 + object2.width/2 && object2.y-object1.y < object1.height/2 + object2.height/2 && object1.y-object2.y < object1.height/2 + object2.height/2){
  
      return true;
    
     }else {
  
      return false;
     }
  }
