class Game {
  //propiedades
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./images/fondo.png";

    this.actorObj = new Chiquito();
    
    this.tomatinaArr = []
    this.tomatonArr = []

    this.frame = 0; // para crear la cadencia con la que salen malas
    this.isGameOn = true
  }

  //metodos

  colisionTomatina = () =>{
    
    this.tomatinaArr.forEach((eachTomatina)=>{
      if (
        this.actorObj.x < eachTomatina.x + eachTomatina.w &&
        this.actorObj.x + this.actorObj.w > eachTomatina.x &&
        this.actorObj.y < eachTomatina.y + eachTomatina.h &&
        (this.actorObj.h - 20) + this.actorObj.y > eachTomatina.y
      ) {
        console.log("colision")
        this.gameOver();
      }} 
      )
  }

  colisionTomaton = () =>{
    
    this.tomatonArr.forEach((eachTomaton)=>{
      if (
        (this.actorObj.x < eachTomaton.x + eachTomaton.w) &&
        this.actorObj.x + this.actorObj.w > eachTomaton.x &&
        this.actorObj.y < eachTomaton.y + eachTomaton.h &&
        this.actorObj.h + this.actorObj.y > eachTomaton.y
      ) {
        console.log("colision")
        this.gameOver()
      }
    }
    )
  }

  gameOver = () =>{
    this.isGameOn = false
    canvas.style.display = "none"
    pantallaFinal.style.display = "block"
  }

  añadirTomatina = () => {
    if (this.frame % 120 === 0) {
      let nuevaTomatina = new Tomatina();
      this.tomatinaArr.push(nuevaTomatina);
    }
  };

  añadirTomaton = () => {
    if(this.frame % 300 === 0){
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

    this.añadirTomatina ();
    this.añadirTomaton ();
    this.colisionTomatina ();
    this.colisionTomaton ();

    // todo this.actorObj.limiteXMovActor()
    

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
if (this.isGameOn === true){
   requestAnimationFrame(this.gameLoop);
}
   
  };
}
