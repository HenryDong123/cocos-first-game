"use strict";
cc._RF.push(module, 'cda7dGQh7RHEowazKLqqrVC', 'Game');
// scripts/Game.js

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
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    maxStartDuration: 0,
    minStartDuration: 0,
    groud: {
      "default": null,
      type: cc.Node
    },
    player: {
      "default": null,
      type: cc.Node
    },
    scoreDisplay: {
      "default": null,
      type: cc.Label
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.score = 0;
    this.groudY = this.groud.y + this.groud.height / 2;
    this.timer = 0;
    this.startDuration = 0;
    this.spawnNewStar();
    this.score = 0;
  },
  spawnNewStar: function spawnNewStar() {
    var newStar = cc.instantiate(this.starPrefab);
    newStar.getComponent('Star').game = this;
    this.node.addChild(newStar);
    newStar.setPosition(this.getNewStarPosition());
    this.startDuration = this.minStartDuration + Math.random() * (this.maxStartDuration - this.minStartDuration);
    this.timer = 0;
    0;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0;
    var randY = this.groudY + Math.random * this.player.getComponent('Player').jumpHeight + 50;
    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX;
    return cc.v2(randX, randY);
  },
  start: function start() {},
  gainScore: function gainScore() {
    this.score += 1; // 更新 scoreDisplay Label 的文字

    this.scoreDisplay.string = 'Score: ' + this.score;
  },
  gameOver: function gameOver() {
    this.player.stopAllActions();
    cc.director.loadScene('game');
  },
  update: function update(dt) {
    if (this.timer > this.startDuration) {
      this.gameOver();
      return;
    }

    this.timer += dt;
  }
});

cc._RF.pop();