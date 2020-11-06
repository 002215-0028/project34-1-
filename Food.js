class food{
    constructor(x, y, r) {}
        
        image = loadImage("images/Milk.png");
    
        
      
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER)
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
      }
}