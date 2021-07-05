class Ground{
 constructor (x, y, w, h){

    var options = {
   isStatic : true 
   }

   this.body = Bodies.rectangle(x, y, w, h, options );
   this.h = h;
   this.w = w;
   World.add(world, this.body);
 }

 display(){

    var groundPos = this.body.position;
    //fill(120);
    //rect(pos.x, pos.y, this.w, this.h)
    push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,255,0)
			rect(0,0,this.w, this.h);
			pop()
 }

}