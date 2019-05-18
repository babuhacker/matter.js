
    var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter .Bodies;

var engine;
var box1;
var engine;
var world;
var boxes=[];
var boundaries = [];
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
    //Engine.run(engine);
   
   boundaries.push(new Boundary(250,200,1000*0.6,20,0.3));
    boundaries.push(new Boundary(450,400,1000*0.6,20,-0.3));
 

}
function mouseDragged(){
    boxes.push(new Box(mouseX,mouseY,random(10,20)));

}
function draw(){
       
    background(51);
    Engine.update(engine);
    for(var i = 0; i < boxes.length; i++){
      boxes[i].show();
        
		}
		for(var i=0;i< boundaries.length;i++){
	boundaries[i].show();
}
}


  
