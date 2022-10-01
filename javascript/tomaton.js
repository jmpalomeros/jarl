class Tomaton {

    constructor(){

        this.mala = new Image()
        this.mala.src = "./images/tomaton.png"
        this.x = 700;
        this.y = 200;
        this.w= 100;
        this.h=100;
        this.speed = 4
                


    }

    //metodos

    dibujarMalo = () => {
        ctx.drawImage(this.mala,this.x, this.y, this.w, this.h )
    }

    moveTomaton = () => {
        this.x = this.x - this.speed
    }





}