// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        pickRadius: 0,
    },

    // LIFE-CYCLE CALLBACKS:
    getPlayerDistance() {
        let playerPos = this.game.player.getPosition()
        let dist = this.node.position.sub(playerPos).mag()
        return dist
    },
    // onLoad () {},
    onPicked(){
        this.game.spawnNewStar()
        this.game.gainScore()
        this.node.destroy()
    },
    update(){
        if(this.getPlayerDistance() < this.pickRadius){
            this.onPicked()
            return
        }
    },
    start () {

    },

    // update (dt) {},
});
