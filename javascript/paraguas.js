
class Paraguas{

    constructor() {
        this.paraguas = new Image();
        this.paraguas.src = "./images/azul.png";
        let randomNumXParaguas = Math.random() * (10, canvas.width - 60);
        let randomXParaguas = Math.floor(randomNumXParaguas);
        this.x = randomXParaguas;
        let randomNumYParaguas = Math.random() * (10, canvas.height - 60);
        let randomYParaguas = Math.floor(randomNumYParaguas);
        this.y = randomYParaguas;
        this.w = 80;
        this.h = 100;
       
    }

    //metodos

    dibujarParaguas = () => {
        ctx.drawImage(this.paraguas, this.x, this.y, this.w, this.h);
    }
}