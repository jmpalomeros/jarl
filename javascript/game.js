class Game {
  //propiedades
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./images/fondo.png";

    this.actorObj = new Chiquito();
    this.tomatinaObj = new Tomatina () //! borrar
    this.tomatonObj = new Tomaton(); // ! añadir forEach a Tomaton

    this.tomatinaArr = []
    this.tomatonArr = []

    this.frame = 0 // para crear la cadencia con la que salen malas

    //tomatina
    //tomaton
    //fondo
  }

  //metodos

 /* añadirTomatinas = () => {
    if (this.frames % 120 === 0) {
      let nuevaTomatina = new Tomatina();
      this.tomatinaArr.push(nuevaTomatina);
    }*/
  ;
  dibujarFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
  };

  

  gameLoop = () => {

    this.frames = this.frames + 1 //para sacar a las malas segun frames 
    
    // 1. limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. acciones y movimientos elementos

    //this.actorObj.gravedadActor();
    //this.malaArr.moveTomatina()
    
    /*this.tomatinaArr.forEach((eachTomatina) => {
      eachTomatina.moveTomatina();
    });*/
    
    this.tomatonObj.moveTomaton();
    this.tomatinaObj.moveTomatina();
    
    //this.añadirTomatinas();

    // 3. dibujar elementos
    
    this.dibujarFondo();
    this.actorObj.dibujarActor();
    
    
    /*this.tomatinaArr.forEach((eachTomatina) => {
    
      eachTomatina.dibujarTomatina();
    });*/

    this.tomatonObj.dibujarTomaton();
    this.tomatinaObj.dibujarTomatina();
    

    // 4. recursion

    requestAnimationFrame(this.gameLoop);
  };
}
