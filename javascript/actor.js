class Chiquito {
  constructor() {
    this.actor = new Image();
    this.actor.src = "./images/actor.png";
    this.x = 20;
    this.y = 250;
    this.w = 80;
    this.h = 120;
    this.mov = 30;
    this.upLimit = 10;
    this.downLimit = 370;
    this.rightLimit = 710;
    this.leftLimit = 0;
  }

  //métodos

  dibujarActor = () => {
    ctx.drawImage(this.actor, this.x, this.y, this.w, this.h);
  };

  movUpActor = () => {
    if (this.y > this.upLimit) {
      this.y = this.y - this.mov;
    }
  };

  movDownActor = () => {
    if (this.y < this.downLimit) {
      this.y = this.y + this.mov;
    }
  };
  movLActor = () => {
    if (this.x > this.leftLimit) {
      this.x = this.x - this.mov;
    }
  };
  movRActor = () => {
    if (this.x < this.rightLimit) {
      this.x = this.x + this.mov;
    }
  };
}
