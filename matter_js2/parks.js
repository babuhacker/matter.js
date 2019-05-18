function Box(x,y,r){
	
	var options={
		friction : 0,
		restitution: 0.1
		
	}

     this.body = Bodies.circle(x,y,r,options);
   
    this.r=r;
    
    World.add(world,this.body);
    
    this.show=function(){
        
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke(12);
        fill(111);
        circle(0,0,this.r);
        pop();
    }
}
