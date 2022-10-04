
class Reward{

    //propiedades
    constructor(){
        this.reward = new Image()
        this.reward.src = "./images/aplauso.png"
        let randomNumXReward = Math.random() * canvas.width - 40;
        let randomXReward = Math.floor(randomNumXReward);
        this.x = randomXReward;
        let randomNumYReward = Math.random() * canvas.height -40;
        let randomYReward = Math.floor(randomNumYReward);
        this.y = randomYReward
        this.w= 40;
        this.h=40;
    }

    //metodos

    dibujarReward = () => {
        ctx.drawImage(this.reward,this.x, this.y, this.w, this.h )
     }

}