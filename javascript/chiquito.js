
class Chiquito{

    constructor(){
        this.actor = new Image()
        this.actor.src = "./images/chiquito.png"
        this.x = 20;
        this.y = 250;
        this.w= 80;
        this.h=100;

    }

    //métodos

    dibujarActor = () => {
        ctx.drawImage(this.actor,this.x, this.y, this.w, this.h )
    }










}