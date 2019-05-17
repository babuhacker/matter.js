
    var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter .Bodies;

var engine;
var box1;
var engine;
var world;
var boxes=[];
var ground;
function windowResized(){
 
	resizeCanvas(windowWidth, windowHeight);
}
function setup() {
    var can = createCanvas(windowWidth,windowHeight);
	
	can.style('display','block');
	can.style('z-index','-1');
	can.position(0,0);
	
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
   
    var options={
        isStatic:true
    }
    ground = Bodies.rectangle(windowWidth/2,height,width,10,options);
    World.add(world,ground);
}
function mousePressed(){
    boxes.push(new Box(mouseX,mouseY,30,30));

}
function draw(){
       
    background(51);
    for(var i = 0; i < boxes.length; i++){
      boxes[i].show();
        
}

}


  
