
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFyUHJlZmFiIiwidHlwZSIsIlByZWZhYiIsIm1heFN0YXJ0RHVyYXRpb24iLCJtaW5TdGFydER1cmF0aW9uIiwiZ3JvdWQiLCJOb2RlIiwicGxheWVyIiwic2NvcmVEaXNwbGF5IiwiTGFiZWwiLCJvbkxvYWQiLCJzY29yZSIsImdyb3VkWSIsInkiLCJoZWlnaHQiLCJ0aW1lciIsInN0YXJ0RHVyYXRpb24iLCJzcGF3bk5ld1N0YXIiLCJuZXdTdGFyIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJnYW1lIiwibm9kZSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJnZXROZXdTdGFyUG9zaXRpb24iLCJNYXRoIiwicmFuZG9tIiwicmFuZFgiLCJyYW5kWSIsImp1bXBIZWlnaHQiLCJtYXhYIiwid2lkdGgiLCJ2MiIsInN0YXJ0IiwiZ2FpblNjb3JlIiwic3RyaW5nIiwiZ2FtZU92ZXIiLCJzdG9wQWxsQWN0aW9ucyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZELEtBREo7QUFLUkMsSUFBQUEsZ0JBQWdCLEVBQUUsQ0FMVjtBQU1SQyxJQUFBQSxnQkFBZ0IsRUFBRSxDQU5WO0FBUVJDLElBQUFBLEtBQUssRUFBRTtBQUNILGlCQUFTLElBRE47QUFFSEosTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNVO0FBRk4sS0FSQztBQVlSQyxJQUFBQSxNQUFNLEVBQUU7QUFDSixpQkFBUyxJQURMO0FBRUpOLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDVTtBQUZMLEtBWkE7QUFnQlJFLElBQUFBLFlBQVksRUFBRTtBQUNWLGlCQUFTLElBREM7QUFFVlAsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNhO0FBRkM7QUFoQk4sR0FGUDtBQXdCTDtBQUVBQyxFQUFBQSxNQTFCSyxvQkEwQks7QUFDTixTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLUCxLQUFMLENBQVdRLENBQVgsR0FBZSxLQUFLUixLQUFMLENBQVdTLE1BQVgsR0FBa0IsQ0FBL0M7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsQ0FBckI7QUFDQSxTQUFLQyxZQUFMO0FBQ0EsU0FBS04sS0FBTCxHQUFhLENBQWI7QUFDSCxHQWpDSTtBQWtDTE0sRUFBQUEsWUFsQ0ssMEJBa0NTO0FBQ1YsUUFBSUMsT0FBTyxHQUFHdEIsRUFBRSxDQUFDdUIsV0FBSCxDQUFlLEtBQUtuQixVQUFwQixDQUFkO0FBQ0FrQixJQUFBQSxPQUFPLENBQUNFLFlBQVIsQ0FBcUIsTUFBckIsRUFBNkJDLElBQTdCLEdBQW9DLElBQXBDO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CTCxPQUFuQjtBQUVBQSxJQUFBQSxPQUFPLENBQUNNLFdBQVIsQ0FBb0IsS0FBS0Msa0JBQUwsRUFBcEI7QUFDQSxTQUFLVCxhQUFMLEdBQXFCLEtBQUtaLGdCQUFMLEdBQXdCc0IsSUFBSSxDQUFDQyxNQUFMLE1BQWlCLEtBQUt4QixnQkFBTCxHQUF3QixLQUFLQyxnQkFBOUMsQ0FBN0M7QUFDQSxTQUFLVyxLQUFMLEdBQWEsQ0FBYjtBQUNSO0FBQU0sR0ExQ0c7QUEyQ0xVLEVBQUFBLGtCQTNDSyxnQ0EyQ2U7QUFDaEIsUUFBSUcsS0FBSyxHQUFHLENBQVo7QUFFQSxRQUFJQyxLQUFLLEdBQUcsS0FBS2pCLE1BQUwsR0FBY2MsSUFBSSxDQUFDQyxNQUFMLEdBQWMsS0FBS3BCLE1BQUwsQ0FBWWEsWUFBWixDQUF5QixRQUF6QixFQUFtQ1UsVUFBL0QsR0FBNEUsRUFBeEY7QUFFQSxRQUFJQyxJQUFJLEdBQUcsS0FBS1QsSUFBTCxDQUFVVSxLQUFWLEdBQWtCLENBQTdCO0FBRUFKLElBQUFBLEtBQUssR0FBRyxDQUFDRixJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBakIsSUFBdUIsQ0FBdkIsR0FBMEJJLElBQWxDO0FBQ0EsV0FBT25DLEVBQUUsQ0FBQ3FDLEVBQUgsQ0FBTUwsS0FBTixFQUFhQyxLQUFiLENBQVA7QUFDSCxHQXBESTtBQXFETEssRUFBQUEsS0FyREssbUJBcURJLENBRVIsQ0F2REk7QUF3RExDLEVBQUFBLFNBeERLLHVCQXdEUTtBQUNULFNBQUt4QixLQUFMLElBQWMsQ0FBZCxDQURTLENBRVQ7O0FBQ0EsU0FBS0gsWUFBTCxDQUFrQjRCLE1BQWxCLEdBQTJCLFlBQVksS0FBS3pCLEtBQTVDO0FBQ0gsR0E1REk7QUE2REwwQixFQUFBQSxRQTdESyxzQkE2REs7QUFDUixTQUFLOUIsTUFBTCxDQUFZK0IsY0FBWjtBQUNBMUMsSUFBQUEsRUFBRSxDQUFDMkMsUUFBSCxDQUFZQyxTQUFaLENBQXNCLE1BQXRCO0FBQ0QsR0FoRUk7QUFpRUxDLEVBQUFBLE1BakVLLGtCQWlFR0MsRUFqRUgsRUFpRU87QUFDUixRQUFJLEtBQUszQixLQUFMLEdBQWEsS0FBS0MsYUFBdEIsRUFBb0M7QUFDaEMsV0FBS3FCLFFBQUw7QUFDQTtBQUNIOztBQUNELFNBQUt0QixLQUFMLElBQWMyQixFQUFkO0FBQ0g7QUF2RUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHN0YXJQcmVmYWI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgbWF4U3RhcnREdXJhdGlvbjogMCxcbiAgICAgICAgbWluU3RhcnREdXJhdGlvbjogMCxcblxuICAgICAgICBncm91ZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgcGxheWVyOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBzY29yZURpc3BsYXk6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5zY29yZSA9IDBcbiAgICAgICAgdGhpcy5ncm91ZFkgPSB0aGlzLmdyb3VkLnkgKyB0aGlzLmdyb3VkLmhlaWdodC8yXG4gICAgICAgIHRoaXMudGltZXIgPSAwXG4gICAgICAgIHRoaXMuc3RhcnREdXJhdGlvbiA9IDBcbiAgICAgICAgdGhpcy5zcGF3bk5ld1N0YXIoKVxuICAgICAgICB0aGlzLnNjb3JlID0gMFxuICAgIH0sXG4gICAgc3Bhd25OZXdTdGFyKCl7XG4gICAgICAgIGxldCBuZXdTdGFyID0gY2MuaW5zdGFudGlhdGUodGhpcy5zdGFyUHJlZmFiKVxuICAgICAgICBuZXdTdGFyLmdldENvbXBvbmVudCgnU3RhcicpLmdhbWUgPSB0aGlzXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdTdGFyKVxuXG4gICAgICAgIG5ld1N0YXIuc2V0UG9zaXRpb24odGhpcy5nZXROZXdTdGFyUG9zaXRpb24oKSlcbiAgICAgICAgdGhpcy5zdGFydER1cmF0aW9uID0gdGhpcy5taW5TdGFydER1cmF0aW9uICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heFN0YXJ0RHVyYXRpb24gLSB0aGlzLm1pblN0YXJ0RHVyYXRpb24pXG4gICAgICAgIHRoaXMudGltZXIgPSAwXG4wICAgIH0sXG4gICAgZ2V0TmV3U3RhclBvc2l0aW9uKCl7XG4gICAgICAgIGxldCByYW5kWCA9IDBcblxuICAgICAgICBsZXQgcmFuZFkgPSB0aGlzLmdyb3VkWSArIE1hdGgucmFuZG9tICogdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKS5qdW1wSGVpZ2h0ICsgNTBcblxuICAgICAgICBsZXQgbWF4WCA9IHRoaXMubm9kZS53aWR0aCAvIDJcblxuICAgICAgICByYW5kWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqMiAqbWF4WFxuICAgICAgICByZXR1cm4gY2MudjIocmFuZFgsIHJhbmRZKVxuICAgIH0sXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcbiAgICBnYWluU2NvcmUgKCkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XG4gICAgICAgIC8vIOabtOaWsCBzY29yZURpc3BsYXkgTGFiZWwg55qE5paH5a2XXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9ICdTY29yZTogJyArIHRoaXMuc2NvcmU7XG4gICAgfSxcbiAgICBnYW1lT3Zlcigpe1xuICAgICAgdGhpcy5wbGF5ZXIuc3RvcEFsbEFjdGlvbnMoKVxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdnYW1lJylcbiAgICB9LFxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPiB0aGlzLnN0YXJ0RHVyYXRpb24pe1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVyICs9IGR0XG4gICAgfSxcbn0pO1xuIl19