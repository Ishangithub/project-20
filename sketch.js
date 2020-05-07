var bullet,wall;
var speed ,weight,thickness;
var dammage




function setup() {
  createCanvas(1600,400);
  


speed=random(223,321);
weight=random(30,52);

bullet= createSprite(50,200,50,50);
bullet .velocityX=speed;

thickness=random(22,83);

wall=createSprite(1500,200,thickness,height/2);
wall.shapeColor=color(80,80,80);

}

function draw() {
  background(0); 
  dammage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

  if(isTouching(bullet ,wall)){
    bullet.velocityX=0;;


  

if(dammage>=10){
bullet.shapeColor="red";

}


if(dammage<10){

bullet.shapeColor="green";

}
  }

  drawSprites();
}


function isTouching(a,b){
  if (a.x - b.x < b.width/2 + a.width/2
    && b.x - a.x < b.width/2 + a.width/2
    && a.y - b.y < b.height/2 + a.height/2
    && b.y - a.y < b.height/2 + a.height/2) {
    return true ;
}
else {
  return false;
}

}















