var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var particle
var particleHieght
var Plinko
var Particle


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
      
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
    
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < particles.length; k++) {
     
     divisions[k].display();
   }
}