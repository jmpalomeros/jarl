
// *GLOBAL VARIABLES

const pantallaInicial = document.querySelector("#pantalla-inicial")
const starBtn = document.querySelector("#camina-btn")
const volverBton = document.querySelector("#volver-btn")


const pantallaMedia = document.querySelector("#pantalla-media")
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")

const pantallaFinal = document.querySelector("#pantalla-final")

//const music = document.querySelector("#music")


let gameObj; //sin contenido para que cuando acceda a pantalla inicial no este funcionando






// *STATE MANAGEMENT FUNCTIONS

const comenzarJuego = () => {
    pantallaInicial.style.display = "none"
    pantallaMedia.style.display = "flex"

    gameObj = new Game ()
    gameObj.gameLoop()

    }
const volverAlJuego = () => {
    pantallaFinal.style.display = "none"
    pantallaInicial.style.display = "block"
}


// *ADD EVENT LISTENERS

starBtn.addEventListener("click", comenzarJuego)

volverBton.addEventListener("click", volverAlJuego)


//music.addEventListener("click", comenzarJuego) //!NO FUNCIONA BIEN AUDIO. QUE SALTE SOLO CON CLICK CAMINA


window.addEventListener("keydown",(event) => {
    if(event.code === "KeyW"){
        gameObj.actorObj.movUpActor()     
        }
})

window.addEventListener("keydown", (event) =>{
    if(event.code === "KeyS"){
        gameObj.actorObj.movDownActor()
    }
})

window.addEventListener("keydown", (event) =>{
    if(event.code === "KeyA"){
        gameObj.actorObj.movLActor()
    }
})

window.addEventListener("keydown", (event) =>{
    if(event.code === "KeyD"){
        gameObj.actorObj.movRActor()
    }
})


