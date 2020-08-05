var car, wall;
var speed, weight;
var deformation;

function setup() 
{
  createCanvas(1400,1000);



  speed = random(55,100);
  weight = random(400,1400);
  
  
  car = createSprite(10,300,25,25); 
  wall = createSprite(1100,300,60,300);

  car.velocityX = speed;
 
}

function draw() 
{
  background(0); 
  
  deformation = 0.5 * weight * speed * speed / 22500;

  if(deformation < 100)
  {
    car.shapeColor = "green";
  }
 
if(deformation < 180 && deformation > 100)
{
  car.shapeColor = "yellow";
}

if(deformation > 180)
{
  car.shapeColor = "red";
}


car.collide(wall);



  drawSprites();
}