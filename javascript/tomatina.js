class Tomatina {
  constructor() {
    this.mala = new Image();
    this.mala.src = "./images/tomatina2.png";
    this.x = canvas.width;
    let randomNumYMala = Math.random() * (10, canvas.height - 40);
    let randomYMala = Math.floor(randomNumYMala);
    this.y = randomYMala;
    this.w = 40;
    this.h = 40;
    this.speed = 2;
    this.limitUp = 10;
    this.limitDown = 750;
  }

  //metodos

  dibujarTomatina = () => {
    ctx.drawImage(this.mala, this.x, this.y, this.w, this.h);
  };

  moveTomatina = (speed) => {
    this.x = this.x - this.speed;
  };
}
