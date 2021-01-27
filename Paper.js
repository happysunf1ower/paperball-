class Paper 
{
    constructor(x, y, radius) 
    {
      var options = 
      {
          isStatic: false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
          //'velocityY': 10;
         
      }
      this.body = Bodies.circle(x, y, 60, options);
      this.radius = radius;
      this.image = loadImage("paper.png");
      
      
      World.add(world, this.body);
   

    }

    display()
    {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      //pos.x = mouseX;
      //pos.y = mouseY;
      scale(1);
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius);
      pop();
    }
}
  