class Game {
  //propiedades
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./images/fondo.png";

    this.actorObj = new Chiquito()
    this.malaObj = new Tomatina ()
    this.maloObj = new Tomaton ()

    this.malaArr = []
    this.maloArr = []

    //tomatina
    //tomaton
    //fondo
  }

  //metodos

  dibujarFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
  };

  //dibjar y sacar en pantalla elementos
  //colocacion de elementos
  //movimientos de los elementos
  //
  gameLoop = () => {
    // 1. limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. acciones y movimientos elementos
    
    //this.actorObj.gravedadActor();
    this.malaObj.moveTomatina()
    this.maloObj.moveTomaton ()


    // 3. dibujar elementos
    this.dibujarFondo();
    this.actorObj.dibujarActor();
    this.malaObj.dibujarMala()
    this.maloObj.dibujarMalo()
    
    

    // 4. recursion

    requestAnimationFrame(this.gameLoop);
  };
}
