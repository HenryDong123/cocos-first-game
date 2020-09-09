
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
    },
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
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
    cc.audioEngine.playEffect(this.scoreAudio, false);
  },
  gameOver: function gameOver() {
    this.player.stopAllActions(); // cc.director.loadScene('game')
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFyUHJlZmFiIiwidHlwZSIsIlByZWZhYiIsIm1heFN0YXJ0RHVyYXRpb24iLCJtaW5TdGFydER1cmF0aW9uIiwiZ3JvdWQiLCJOb2RlIiwicGxheWVyIiwic2NvcmVEaXNwbGF5IiwiTGFiZWwiLCJzY29yZUF1ZGlvIiwiQXVkaW9DbGlwIiwib25Mb2FkIiwic2NvcmUiLCJncm91ZFkiLCJ5IiwiaGVpZ2h0IiwidGltZXIiLCJzdGFydER1cmF0aW9uIiwic3Bhd25OZXdTdGFyIiwibmV3U3RhciIsImluc3RhbnRpYXRlIiwiZ2V0Q29tcG9uZW50IiwiZ2FtZSIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFBvc2l0aW9uIiwiZ2V0TmV3U3RhclBvc2l0aW9uIiwiTWF0aCIsInJhbmRvbSIsInJhbmRYIiwicmFuZFkiLCJqdW1wSGVpZ2h0IiwibWF4WCIsIndpZHRoIiwidjIiLCJzdGFydCIsImdhaW5TY29yZSIsInN0cmluZyIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCIsImdhbWVPdmVyIiwic3RvcEFsbEFjdGlvbnMiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLElBREQ7QUFFUkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkQsS0FESjtBQUtSQyxJQUFBQSxnQkFBZ0IsRUFBRSxDQUxWO0FBTVJDLElBQUFBLGdCQUFnQixFQUFFLENBTlY7QUFRUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsSUFETjtBQUVISixNQUFB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ZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzdGFyUHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIG1heFN0YXJ0RHVyYXRpb246IDAsXG4gICAgICAgIG1pblN0YXJ0RHVyYXRpb246IDAsXG5cbiAgICAgICAgZ3JvdWQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIHBsYXllcjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcmVEaXNwbGF5OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcmVBdWRpbzoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5zY29yZSA9IDBcbiAgICAgICAgdGhpcy5ncm91ZFkgPSB0aGlzLmdyb3VkLnkgKyB0aGlzLmdyb3VkLmhlaWdodC8yXG4gICAgICAgIHRoaXMudGltZXIgPSAwXG4gICAgICAgIHRoaXMuc3RhcnREdXJhdGlvbiA9IDBcbiAgICAgICAgdGhpcy5zcGF3bk5ld1N0YXIoKVxuICAgICAgICB0aGlzLnNjb3JlID0gMFxuICAgIH0sXG4gICAgc3Bhd25OZXdTdGFyKCl7XG4gICAgICAgIGxldCBuZXdTdGFyID0gY2MuaW5zdGFudGlhdGUodGhpcy5zdGFyUHJlZmFiKVxuICAgICAgICBuZXdTdGFyLmdldENvbXBvbmVudCgnU3RhcicpLmdhbWUgPSB0aGlzXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdTdGFyKVxuXG4gICAgICAgIG5ld1N0YXIuc2V0UG9zaXRpb24odGhpcy5nZXROZXdTdGFyUG9zaXRpb24oKSlcbiAgICAgICAgdGhpcy5zdGFydER1cmF0aW9uID0gdGhpcy5taW5TdGFydER1cmF0aW9uICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heFN0YXJ0RHVyYXRpb24gLSB0aGlzLm1pblN0YXJ0RHVyYXRpb24pXG4gICAgICAgIHRoaXMudGltZXIgPSAwXG4wICAgIH0sXG4gICAgZ2V0TmV3U3RhclBvc2l0aW9uKCl7XG4gICAgICAgIGxldCByYW5kWCA9IDBcblxuICAgICAgICBsZXQgcmFuZFkgPSB0aGlzLmdyb3VkWSArIE1hdGgucmFuZG9tICogdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKS5qdW1wSGVpZ2h0ICsgNTBcblxuICAgICAgICBsZXQgbWF4WCA9IHRoaXMubm9kZS53aWR0aCAvIDJcblxuICAgICAgICByYW5kWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqMiAqbWF4WFxuICAgICAgICByZXR1cm4gY2MudjIocmFuZFgsIHJhbmRZKVxuICAgIH0sXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcbiAgICBnYWluU2NvcmUgKCkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XG4gICAgICAgIC8vIOabtOaWsCBzY29yZURpc3BsYXkgTGFiZWwg55qE5paH5a2XXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9ICdTY29yZTogJyArIHRoaXMuc2NvcmVcblxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2NvcmVBdWRpbywgZmFsc2UpXG4gICAgfSxcbiAgICBnYW1lT3Zlcigpe1xuICAgICAgdGhpcy5wbGF5ZXIuc3RvcEFsbEFjdGlvbnMoKVxuICAgICAgLy8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdnYW1lJylcbiAgICB9LFxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPiB0aGlzLnN0YXJ0RHVyYXRpb24pe1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVyICs9IGR0XG4gICAgfSxcbn0pO1xuIl19