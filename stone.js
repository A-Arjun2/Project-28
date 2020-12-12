class Stone {
    constructor(x,y,r)
     {
        var options = {
         'isStatic':false,
          'friction':1,
          'restitution':0,
          'density':1.2
        };
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("sprites/stone.png")
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world, this.body);
}

display(){
  var stonepos =this.image.position;

  push()
  translate(stonepos.x,stonepos.y);
  imageMode(CENTER);
  image(this.image, 0, 0, this.r);
  //ellipse(0,0,this.r,this.r)
  pop()
}

}

