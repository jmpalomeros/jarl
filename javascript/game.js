class Game {
  //propiedades
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./images/fondo.png";

    this.actorObj = new Chiquito();

    this.tomatinaArr = [];
    this.tomatonArr = [];
    this.recompensaArr = [];

    this.frame = 0;
    this.isGameOn = true;

    this.score = 0;
    this.life = 10;

    this.vidas = document.querySelector("#vidas");
    this.puntuacion = document.querySelector("#puntuacion");
  }

  //metodos

  colisionTomatina = () => {
    this.tomatinaArr.forEach((eachTomatina) => {
      if (
        this.actorObj.x < eachTomatina.x + eachTomatina.w &&
        this.actorObj.x + (this.actorObj.w - 20) > eachTomatina.x &&
        this.actorObj.y < eachTomatina.y + eachTomatina.h &&
        this.actorObj.h - 20 + this.actorObj.y > eachTomatina.y
      ) {
        this.tomatinaArr.splice(eachTomatina,1);
        if (this.life > 1) {
          this.life--;
          vidas.innerText = this.life;
        } else if (this.life <= 1) {
          this.gameOver();
        }
      }
    });
  };

  colisionTomaton = () => {
    this.tomatonArr.forEach((eachTomaton) => {
      if (
        this.actorObj.x < eachTomaton.x + eachTomaton.w &&
        this.actorObj.x + this.actorObj.w > eachTomaton.x &&
        this.actorObj.y < eachTomaton.y + eachTomaton.h &&
        this.actorObj.h + this.actorObj.y > eachTomaton.y
      ) {
        this.tomatonArr.splice(eachTomaton,1);
        if(this.life > 2){
          this.life - 2;
          vidas.innerText = this.life;
        } else if (this.life <= 2){
        this.gameOver(); 
        }
        }
    });
  };

  capturaRecompensa = () =>{
    this.recompensaArr.forEach((eachRecompensa) => {
      if (
        this.actorObj.x < eachRecompensa.x + eachRecompensa.w &&
        this.actorObj.x + this.actorObj.w > eachRecompensa.x &&
        this.actorObj.y < eachRecompensa.y + eachRecompensa.h &&
        this.actorObj.h + this.actorObj.y > eachRecompensa.y
      ) {
        this.recompensaArr.splice(eachRecompensa,1);
        if(this.life < 11){
          this.life ++;
          vidas.innerText = this.life;
        } 
        }
      }
    );
  }

  gameOver = () => {
    this.isGameOn = false;
    canvas.style.display = "none";
    pantallaMedia.style.display = "none";
    pantallaFinal.style.display = "block";
  };

  añadirTomatina = () => {
    if (this.frame % 120 === 0) {
      let nuevaTomatina = new Tomatina();
      this.tomatinaArr.push(nuevaTomatina);
    }
  };

  añadirTomaton = () => {
    if (this.frame % 360 === 0) {
      let nuevoTomaton = new Tomaton();
      this.tomatonArr.push(nuevoTomaton);
    }
  };

  noCoincidenciamalos = () => {
    this.tomatonArr[this.y] !== this.tomatinaArr[this.y];
  };

  añadirRecompensa = () =>{
    if(this.frame % 600 === 0){
      let recompensa = new Reward ();
      this.recompensaArr.push(recompensa);
      } else if(this.frame % 180 === 0){
        this.recompensaArr.forEach((eachRecompensa)=>{
          this.recompensaArr.splice(eachRecompensa,1)
        })
      } 
  }

  gameScore = () => {
    if (this.tomatinaArr.length !== 0 && this.tomatinaArr[0].x < -50) {
      this.score++;
      this.tomatinaArr.shift();
      console.log(this.score);
    }

    if (this.tomatonArr.length !== 0 && this.tomatonArr[0].x < -80) {
      this.tomatonArr.shift();
      this.score = this.score + 2;
      console.log(this.score);
    }
  };

  dibujarFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
  };

  gameLoop = () => {
    this.frame = this.frame + 1; //para sacar a las malas segun frames

    // 1. limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. acciones y movimientos elementos
    this.tomatinaArr.forEach((eachTomatina) => {
      eachTomatina.moveTomatina();
    });

    this.tomatonArr.forEach((eachTomaton) => {
      eachTomaton.moveTomaton();
    });

    this.añadirTomatina();
    this.añadirTomaton();
    this.noCoincidenciamalos();
    this.añadirRecompensa();
    this.colisionTomatina();
    this.colisionTomaton();
    this.capturaRecompensa();
    this.gameScore();

    // 3. dibujar elementos

    this.dibujarFondo();
    this.actorObj.dibujarActor();

    this.tomatinaArr.forEach((eachTomatina) => {
      eachTomatina.dibujarTomatina();
    });

    this.tomatonArr.forEach((eachTomaton) => {
      eachTomaton.dibujarTomaton();
    });

    this.recompensaArr.forEach((eachRecompensa)=>{
      eachRecompensa.dibujarReward();
    });
    

    // 4. recursion
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
