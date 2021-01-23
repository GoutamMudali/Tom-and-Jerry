var Tom, Jerry;
var Tom_walking, tom_standing, tom_sitting, jerry_dancing, jerry_searching, Jerry_standing;
var garden, background_img;



function preload() {
    background_img =loadImage("images/garden.png");

    tom_sitting = loadAnimation("images/tomOne.png");
    Tom_walking = loadAnimation("images/tomTwo.png","images/tomThree");
    tom_standing = loadAnimation("images/tomFour.png");

    Jerry_standing = loadAnimation("images/jerryOne.png");
    jerry_dancing = loadAnimation("images/jerryTwo.png","imagesjerryThree");
    jerry_searching = loadAnimation("images/jerryFour.png");





}

function setup(){
    createCanvas(1000,800);
    
    garden = createSprite(500,400);
    garden.addImage(background_img);

    Tom = createSprite(900,650,50,50);
    Tom.addAnimation("sitting",tom_sitting);
    Tom.scale = 0.125;

    Jerry = createSprite(100,650,50,50);
    Jerry.addAnimation("standing",Jerry_standing);
    Jerry.scale = 0.125;



}

function draw() {

  background(255);
    

    if(Tom.x - Jerry.x < (Tom.width - Jerry.width)/2) {

       Tom.velocityX=0;
       
       Tom.addAnimation("standing",tom_standing);
       Tom.x = 300;
       Tom.changeAnimation("standing");

       Jerry.addAnimation("searching",jerry_searching);
       Jerry.changeAnimation("searching");

    }
    
    
    

    
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW) {

    Tom.velocityX = -5;

    Tom.addAnimation("walking",Tom_walking);
    Tom.changeAnimation("walking");

    Jerry.addAnimation("dancing",jerry_dancing);
    Jerry.frameDelay = 25;
    Jerry.changeAnimation("dancing");

  }


}
