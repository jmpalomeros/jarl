
class Tomatina {

    constructor(){

        this.mala = new Image()
        this.mala.src = "./images/tomatina2.png"
        this.x = 700;
        this.y = 60;
        this.w= 50;
        this.h=50;
        this.speed = 2
    
    }

    //metodos

    dibujarTomatina = () => {
        ctx.drawImage(this.mala,this.x, this.y, this.w, this.h )
    }

    moveTomatina = () => {
        this.x = this.x - this.speed
    }





}