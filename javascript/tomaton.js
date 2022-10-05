class Tomaton {

    constructor(){

        this.malo = new Image();
        this.malo.src = "./images/tomaton.png";
        this.x = canvas.width;
        let randomNumYMalo = Math.random() * (10,canvas.height -60);
        let randomYMalo = Math.floor(randomNumYMalo);
        this.y = randomYMalo;
        this.w= 70;
        this.h=60;
        this.speed = 4
            
    }

    //metodos

    dibujarTomaton = () => {
        ctx.drawImage(this.malo,this.x, this.y, this.w, this.h )
    }

    moveTomaton = (speed) => {
        this.x = this.x - this.speed
    }





}