var car1,wall1,bigWall,sum1,sum11;
var car2,wall2,sum2,sum22;
var car3,wall3,sum3,sum33;
var car4,wall4,sum4,sum44;
var speed1,weight1;
var speed2,weight2;
var speed3,weight3;
var speed4,weight4;

function setup() {
  createCanvas(1600,400);
  bigWall = createSprite(1150,0,50,1600);  
  bigWall.shapeColor="purple";
  ///////
  car1 = createSprite(50,50,20,20);
  car1.shapeColor="pink";
  wall1 = createSprite(0,100,2450,10);
  speed1 = random(55,100);
  weight1 = random(400,1500);
  car1.velocityX = speed1;
  /////////
  car2 = createSprite(50,150,20,20);
  car2.shapeColor="pink";
  wall2 = createSprite(0,200,2450,10);
  speed2 = random(55,100);
  weight2 = random(400,1500);
  car2.velocityX = speed2;
  ////////////
  car3 = createSprite(50,250,20,20);
  car3.shapeColor="pink";
  wall3 = createSprite(0,300,2450,10);
  speed3 = random(55,100);
  weight3 = random(400,1500);
  car3.velocityX = speed3;
  /////////
  car4 = createSprite(50,350,20,20);
  car4.shapeColor="pink";
  wall4 = createSprite(0,400,2450,10);
  speed4 = random(55,100);
  weight4 = random(400,1500);
  car4.velocityX = speed4;
  //////////


}

function draw() {
  background("black");
  if(car1.isTouching(bigWall)){
    car1.velocityX=0;
    sum1=0.5*weight1*speed1*speed1;
    sum11=sum1/22500;
  }  
  if(sum11>180){
    car1.shapeColor="red"
  }
  if(sum11>80 && sum11<180){
    car1.shapeColor="yellow"
  }
  if(sum11<80){
    car1.shapeColor="green"
  }
  if(car2.isTouching(bigWall)){
    car2.velocityX=0;
    sum2=0.5*weight2*speed2*speed2;
    sum22=sum2/22500;
  }  
  if(sum22>180){
    car2.shapeColor="red"
  }
  if(sum22>80 && sum22<180){
    car2.shapeColor="yellow"
  }
  if(sum22<80){
    car2.shapeColor="green"
  }
  if(car3.isTouching(bigWall)){
    car3.velocityX=0;
    sum3=0.5*weight3*speed3*speed3;
    sum33=sum3/22500;
  }  
  if(sum33>180){
    car3.shapeColor="red"
  }
  if(sum33>80 && sum33<180){
    car3.shapeColor="yellow"
  }
  if(sum33<80){
    car3.shapeColor="green"
  }
   if(car4.isTouching(bigWall)){
    car4.velocityX=0;
    sum4=0.5*weight1*speed4*speed4;
    sum44=sum4/22540;
  }  
  if(sum44>180){
    car4.shapeColor="red"
  }
  if(sum44>80 && sum44<180){
    car4.shapeColor="yellow"
  }
  if(sum44<80){
    car4.shapeColor="green"
  }
  drawSprites();
}
