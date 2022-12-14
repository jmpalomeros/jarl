// *GLOBAL VARIABLES

const pantallaInicial = document.querySelector("#pantalla-inicial");
const starBtn = document.querySelector("#camina-btn");

const pantallaMedia = document.querySelector("#pantalla-media");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const pantallaFinal = document.querySelector("#pantalla-final");
const volverBtn = document.querySelector("#volver-btn");
const inicioBtn = document.querySelector("#inicio-btn");

const audioIntro = new Audio("./audio/al_ataque.mp3");
const audioFinal = new Audio("./audio/cobarde.mp3");
const audioVolver = new Audio("./audio/fuegor.mp3");

let gameObj; //sin contenido para que cuando acceda a pantalla inicial no este funcionando
let vidas = document.querySelector("#vidas");
let puntuacion = document.querySelector("#puntuacion");
let proteccion = document.querySelector("#protector");

// *STATE MANAGEMENT FUNCTIONS

const comenzarJuego = () => {
  pantallaInicial.style.display = "none";
  pantallaMedia.style.display = "flex";
  vidas.style.display = "flex";
  puntuacion.style.display = "flex";
  
  gameObj = new Game();
  
  gameObj.modoMasUno();
  
  // en esta seccion se agregarian setTimeout o setIntervals
  gameObj.gameLoop();
  
  audioIntro.volume = 0.05;
  audioIntro.play();
  };

const volverAlJuego = () => {
  pantallaFinal.style.display = "none";
  canvas.style.display = "flex";
  audioVolver.volume = 0.05;
  audioVolver.play();
  comenzarJuego();
  audioIntro.pause();
  vidas.innerText = 10;
  puntuacion.innerText = 0;
  proteccion.innerText = 0;
  
};

const irInicio = () => {
  pantallaFinal.style.display = "none";
  canvas.style.display = "flex";
  pantallaInicial.style.display = "block";
  audioFinal.volume = 0.05;
  audioFinal.play();
  audioIntro.pause();
  audioVolver.pause();
  vidas.innerText = 10;
  puntuacion.innerText = 0;
  proteccion.innerText = 0;
};

// *ADD EVENT LISTENERS

starBtn.addEventListener("click", comenzarJuego);

volverBtn.addEventListener("click", volverAlJuego);

inicioBtn.addEventListener("click", irInicio);

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyW") {
    gameObj.actorObj.movUpActor();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyS") {
    gameObj.actorObj.movDownActor();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyA") {
    gameObj.actorObj.movLActor();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyD") {
    gameObj.actorObj.movRActor();
  }
});

window.addEventListener("keydown", (event)=> {
  if(event.code === "KeyP"){
    gameObj.inmortalidad();
  }
})


