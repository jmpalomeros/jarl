
class Tomatina {

    constructor(){

        this.mala = new Image()
        this.mala.src = "./images/tomatina2.png"
        this.x = canvas.width;
        let randomNumYMala = Math.random() * canvas.height;
        let randomYMala = Math.floor(randomNumYMala);
        this.y = randomYMala;
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