class Mango {
    constructor(x, y, width, height) 
    {      var options = {
          'restitution':0,
          'friction':1,
          'isStatic': true,                  
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage ("images/mango.png")
      this.Visiblity=225
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
     
     
     // if(this.body.speed < 3){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();
    //    }
    //  //  else{
    //      World.remove(world, this.body);
    //      push();
    //      this.Visiblity = this.Visiblity - 5;
    //      tint(255,0,0,this.Visiblity);
    //      fill(255,0,0,this.Visiblity)
    //      strokeWeight(0);
    //      rect(pos.x, pos.y, this.width, this.height);
    //      pop();
    //    }
       
     }
    
    
    
    }
      
        
  
  
  
  