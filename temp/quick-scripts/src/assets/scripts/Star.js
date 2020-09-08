"use strict";
cc._RF.push(module, 'e340bYgmqlJNL5lMWaLcgfS', 'Star');
// scripts/Star.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    pickRadius: 0
  },
  // LIFE-CYCLE CALLBACKS:
  getPlayerDistance: function getPlayerDistance() {
    var playerPos = this.game.player.getPosition();
    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  // onLoad () {},
  onPicked: function onPicked() {
    this.game.spawnNewStar();
    this.game.gainScore();
    this.node.destroy();
  },
  update: function update() {
    if (this.getPlayerDistance() < this.pickRadius) {
      this.onPicked();
      return;
    }
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();