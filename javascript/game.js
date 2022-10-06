class Game {
  //propiedades
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./images/fondo.png";

    this.actorObj = new Chiquito();

    this.tomatinaArr = [];
    this.tomatonArr = [];
    this.recompensaArr = [];
    this.paraguasArr = [];

    this.frame = 0;
    this.tomatinaFrame = 120;
    this.tomatonFrame = 300;

    this.isGameOn = true;

    this.score = 0;
    this.life = 10;

    this.audio = new Audio("./audio/grito.mp3");
    this.audioTormenta = new Audio("./audio/siete_caballos.mp3");
    this.audioCuen = new Audio("./audio/cuen.mp3");
    this.audioVidaExtra = new Audio("./audio/epetekan.mp3");
    this.audioSombrilla = new Audio ("./audio/camarerorl.mp3")

    this.vidas = document.querySelector("#vidas");
    this.puntuacion = document.querySelector("#puntuacion");
    this.chiste = document.querySelector("#chiste");

    this.chistesArr = [
      "Trabajas menos que el sastre de Tarzán",
      "Estan las cosas muy mal, estamos firendo los huevos son saliva",
      "Paparl, paparl, llévamos al circorl. No hijo, quien quiera verte que venga a casa",
      "Ese fistro pecador, afortunado que en lugar de lineas en la mano tenía bingos",
      "Ayer escuché a mi vecina gritaar:Dame más por el chiquito. No me puedo creer que se capaz de vender a su hijo",
      "Eres más feo que el Fary comiendo limones",
      "Tienes más peligro que Roldan jugando al Monopoly",
      "No te digo trigo por no llamarte Rodrigo",
      "Te voy a hacer una guarrerida española",
      "En vez de graduado escolar tenía una etiqueta de Anís del Mono",
      "Eres más peligro que un tiroteo en un ascensor",
      "Tienes más pinturas que el neceser de Marujita Diaz",
      "Eres más falso que el flequillo del Dioni",
      "Ere más violento que el entrenador de los Pogüer Renlle",
      "Tienes menos curvas que una pista de aterrizaje",
      "Uno que nació después de los dolores",
    ];
  }

  //metodos

  colisionTomatina = () => {
    this.tomatinaArr.forEach((eachTomatina, index) => {
      if (
        this.actorObj.x < eachTomatina.x + eachTomatina.w &&
        this.actorObj.x + this.actorObj.w - 20 > eachTomatina.x &&
        this.actorObj.y < eachTomatina.y + eachTomatina.h &&
        this.actorObj.h - 20 + this.actorObj.y > eachTomatina.y
      ) {
        this.tomatinaArr.splice(index, 1);
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
    this.tomatonArr.forEach((eachTomaton, index) => {
      if (
        this.actorObj.x < eachTomaton.x + eachTomaton.w &&
        this.actorObj.x + this.actorObj.w - 20 > eachTomaton.x &&
        this.actorObj.y < eachTomaton.y + eachTomaton.h &&
        this.actorObj.h - 20 + this.actorObj.y > eachTomaton.y
      ) {
        this.tomatonArr.splice(index, 1);
        if (this.life > 2) {
          this.life = this.life - 2;
          vidas.innerText = this.life;
        } else {
          this.gameOver();
        }
      }
    });
  };

  capturaRecompensa = () => {
    this.recompensaArr.forEach((eachRecompensa) => {
      if (
        this.actorObj.x < eachRecompensa.x + eachRecompensa.w &&
        this.actorObj.x + this.actorObj.w > eachRecompensa.x &&
        this.actorObj.y < eachRecompensa.y + eachRecompensa.h &&
        this.actorObj.h + this.actorObj.y > eachRecompensa.y
      ) {
        this.audioVidaExtra.play()
        this.audioVidaExtra.volume = 0.3;
        this.recompensaArr.splice(eachRecompensa, 1);
        if (this.life < 10) {
          this.life++;
          vidas.innerText = this.life;
        }
      }
    });
  };

  capturarParaguas = () =>{
    this.paraguasArr.forEach((eachParaguas) => {
      if (
        this.actorObj.x < eachParaguas.x + eachParaguas.w &&
        this.actorObj.x + this.actorObj.w > eachParaguas.x &&
        this.actorObj.y < eachParaguas.y + eachParaguas.h &&
        this.actorObj.h + this.actorObj.y > eachParaguas.y
      ) {
        this.audioSombrilla.play();
        this.audioSombrilla.volume = 0.3;
        this.recompensaArr.splice(eachParaguas, 1);
        if (this.life < 10) {
          this.life+=2;
          vidas.innerText = this.life;
        }
      }
    });
  }

  gameOver = () => {
    this.isGameOn = false;
    canvas.style.display = "none";
    pantallaMedia.style.display = "none";
    pantallaFinal.style.display = "block";
    this.audioTormenta.pause();
    this.audioCuen.pause();
    this.audioVidaExtra.pause();
    this.audioSombrilla.pause();
    this.audioGameOver.play();
    this.audioGameOver.volume = 0.3;
    this.vidas.innerText = this.life;
    };

  añadirTomatina = () => {
    if (this.frame % this.tomatinaFrame === 0) {
      let nuevaTomatina = new Tomatina();
      this.tomatinaArr.push(nuevaTomatina);
    }
  };

  añadirTomaton = () => {
    if (this.frame % this.tomatonFrame === 0) {
      let nuevoTomaton = new Tomaton();
      this.tomatonArr.push(nuevoTomaton);
    }
  };

  modoDuplicar = () => {
    if (this.frame % 600 === 0) {
      this.audioTormenta.play();
      this.audioTormenta.volume = 0.3;
      let nuevaTomatina = new Tomatina();
      this.tomatinaArr.push(nuevaTomatina);
      let nuevoTomaton = new Tomaton();
      this.tomatonArr.push(nuevoTomaton);
    }
  };

  modoMasUno = () => {
   setInterval(() => {
      let nuevaTomatina = new Tomatina();
      this.tomatinaArr.push(nuevaTomatina);
      let nuevoTomaton = new Tomaton();
      this.tomatonArr.push(nuevoTomaton)
    }, 3000);
  };

  modoAluvion = () => {
    if (this.frame % 2100 === 0) {
      this.audioCuen.play();
      this.audioCuen.volume = 0.3;
      this.tomatinaFrame = 20;
      setTimeout(() => {
        this.tomatinaFrame = 120;
      }, 2000)
    }
    };

  añadirRecompensa = () => {
    if (this.frame % 1200 === 0) {
      let recompensa = new Reward();
      this.recompensaArr.push(recompensa);
    } else if (this.frame % 300 === 0) {
      this.recompensaArr.forEach((eachRecompensa) => {
        this.recompensaArr.splice(eachRecompensa, 1);
        this.recompensaArr.shift();
      });
    }
  };

 añadirParaguas = () => {
    if(this.frame % 1860 === 0){
      let paraguas = new Paraguas ()
      this.paraguasArr.push(paraguas);   
      } else if (this.frame % 300 === 0){
        this.paraguasArr.forEach(()=> {
          this.paraguasArr.shift()
        })
      }
    }
  
  gameScore = () => {
    if (this.tomatinaArr.length !== 0 && this.tomatinaArr[0].x < -50) {
      this.score++;
      puntuacion.innerText = this.score;
      this.tomatinaArr.shift();
    }

    if (this.tomatonArr.length !== 0 && this.tomatonArr[0].x < -80) {
      this.score = this.score + 2;
      puntuacion.innerText = this.score;
      this.tomatonArr.shift();
    }
  };

  cuentaChistes = () => {
    if (this.frame % 600 === 0) {
      let chisteRandom = Math.floor(Math.random() * this.chistesArr.length);
      let chisteElegido = this.chistesArr[chisteRandom];
      chisteElegido = chisteElegido.toString();
      chiste.innerText = chisteElegido;
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
    this.añadirRecompensa();
    this.colisionTomatina();
    this.colisionTomaton();
    this.capturaRecompensa();
    this.gameScore();
    this.cuentaChistes();
    this.modoDuplicar();
    this.modoAluvion();
    this.añadirParaguas();
    this.capturarParaguas();
    

    // 3. dibujar elementos

    this.dibujarFondo();
    this.actorObj.dibujarActor();

    this.tomatinaArr.forEach((eachTomatina) => {
      eachTomatina.dibujarTomatina();
    });

    this.tomatonArr.forEach((eachTomaton) => {
      eachTomaton.dibujarTomaton();
    });

    this.recompensaArr.forEach((eachRecompensa) => {
      eachRecompensa.dibujarReward();
    });

    this.paraguasArr.forEach((eachParaguas) =>{
      eachParaguas.dibujarParaguas();
    })

    // 4. recursion

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
