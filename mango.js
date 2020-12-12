class Mango {
    constructor(x,y,r)
     {
        var options = {
         'isStatic':true,
          'friction':1,
          'restitution':0
        };
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("sprites/mango.png")
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world, this.body);
}

display(){
  var mangopos =this.image.position;

  push()
  translate(mangopos.x,mangopos.y);
  imageMode(CENTER);
  image(this.image, 0, 0, this.r, options);
  //ellipse(0,0,this.r,this.r)
  pop()
}

}
