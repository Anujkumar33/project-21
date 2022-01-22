 class ground
 {
     constructer(x,y,w,h){
     let options = {
     isStatic:true
     };
    
        this.x=x;
        this.y=y;
        this.width=w;
        this.hight=h;
        ground=bodies.rect(x,y,w,h,options);
        world.add(world,this.body);
     }
     display(){
        rect(this.x,this.y,this.width,this.hight);
        rectMode(CENTER);
     }
 }