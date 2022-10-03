class Tomaton {

    constructor(){

        this.malo = new Image();
        this.malo.src = "./images/tomaton.png";
        this.x = canvas.width;
        let randomNumYMalo = Math.random() * canvas.height;
        let randomYMalo = Math.floor(randomNumYMalo);
        this.y = randomYMalo;
        this.w= 100;
        this.h=100;
        this.speed = 4
                


    }

    //metodos

    dibujarTomaton = () => {
        ctx.drawImage(this.malo,this.x, this.y, this.w, this.h )
    }

    moveTomaton = () => {
        this.x = this.x - this.speed
    }





}