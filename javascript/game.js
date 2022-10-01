class Game{

    //propiedades
    constructor(){

        this.fondo = new Image ()
        this.fondo.src = "./images.playa.png"
        //chiquito
        //tomatina
        //tomaton
        //fondo



    }





    //metodos

dibujarFondo = () =>{
        ctx.drawImage(this.fondo, 0, 0, canvas.width , canvas.heigth)
        console.log("imagen")
    }

    
    //dibjar y sacar en pantalla elementos
    //colocacion de elementos
    //movimientos de los elementos
    //
 gameLoop = () => {

    // 1. limpiar el canvas
        ctx.clearRect(0,0,canvas.width,canvas.heigth);

    // 2. acciones y movimientos elementos

    // 3. dibujar elementos
        this.dibujarFondo()

    // 4. recursion

    
        requestAnimationFrame(this.gameLoop)

    }


}
