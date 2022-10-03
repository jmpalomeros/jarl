class Game {
  //propiedades
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./images/fondo.png";

    this.actorObj = new Chiquito();
    
    this.tomatinaArr = []
    this.tomatonArr = []

    this.frame = 0; // para crear la cadencia con la que salen malas

  }

  //metodos

  añadirTomatina = () => {
    if (this.frame % 120 === 0) {
      let nuevaTomatina = new Tomatina();
      this.tomatinaArr.push(nuevaTomatina);
    }
  };

  añadirTomaton = () => {
    if(this.frame % 120 === 0){
      let nuevoTomaton = new Tomaton()
      this.tomatonArr.push(nuevoTomaton)
    }
  }

  dibujarFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
  };

  

  gameLoop = () => {

    this.frame = this.frame + 1 //para sacar a las malas segun frames 
    
    // 1. limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
      

    // 2. acciones y movimientos elementos
    this.tomatinaArr.forEach((eachTomatina) => {
      eachTomatina.moveTomatina();
    });

    this.tomatonArr.forEach((eachTomaton)=>{
      eachTomaton.moveTomaton();
    })

    this.añadirTomatina ()
    this.añadirTomaton ()
    

    // 3. dibujar elementos
    
    this.dibujarFondo();
    this.actorObj.dibujarActor();
    
    
    this.tomatinaArr.forEach((eachTomatina) => {
          eachTomatina.dibujarTomatina();
    });

    this.tomatonArr.forEach((eachTomaton)=>{
      eachTomaton.dibujarTomaton();
    });
    
    

    // 4. recursion

    requestAnimationFrame(this.gameLoop);
  };
}
