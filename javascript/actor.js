
class Chiquito{

    constructor(){
        this.actor = new Image()
        this.actor.src = "./images/chiquito.png"
        this.x = 20;
        this.y = 250;
        this.w= 100;
        this.h=130;
        this.mov = 30
        // todo this.xMovLimit = canvas.width; 
        //this.yMovLimit = canvas.height;
        this.rightLimit = 800;
        this.leftLimit = 0;
        

    }

    //métodos

    dibujarActor = () => {
        ctx.drawImage(this.actor,this.x, this.y, this.w, this.h )
    }
    
    movUpActor = () => {
        
        this.y = this.y - this.mov
        }

        
    
    movDownActor = () => {
        this.y = this.y + this.mov
    }
    movLActor = () => {
        this.x = this.x - this.mov
    }
    movRActor = () => {
        this.x = this.x + this.mov
                    
        }
        
    

    // todo
    /* limiteXMovActor = () => {
        if(this.x > canvas.width -100){
            this.xMovLimit = -100
        }
    } */


    
    










}