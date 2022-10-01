
// *GLOBAL VARIABLES

const pantallaInicial = document.querySelector("#pantalla-inicial")
const starBtn = document.querySelector("#camina-btn")

const pantallaMedia = document.querySelector("#pantalla-media")
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")






// *STATE MANAGEMENT FUNCTIONS

const comenzarJuego = () => {
    pantallaInicial.style.display = "none"
    pantallaMedia.style.display = "flex"

    let gameObj = new Game ()
    gameObj.gameLoop()

}



// *ADD EVENT LISTENERS

starBtn.addEventListener("click", comenzarJuego)


