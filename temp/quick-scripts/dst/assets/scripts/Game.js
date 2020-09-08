
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
    this.spawnNewStar();
  },
  spawnNewStar: function spawnNewStar() {
    var newStar = cc.instantiate(this.starPrefab);
    newStar.getComponent('Star').game = this;
    this.node.addChild(newStar);
    newStar.setPosition(this.getNewStarPosition());
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
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFyUHJlZmFiIiwidHlwZSIsIlByZWZhYiIsIm1heFN0YXJ0RHVyYXRpb24iLCJtaW5TdGFydER1cmF0aW9uIiwiZ3JvdWQiLCJOb2RlIiwicGxheWVyIiwic2NvcmVEaXNwbGF5IiwiTGFiZWwiLCJvbkxvYWQiLCJzY29yZSIsImdyb3VkWSIsInkiLCJoZWlnaHQiLCJzcGF3bk5ld1N0YXIiLCJuZXdTdGFyIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJnYW1lIiwibm9kZSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJnZXROZXdTdGFyUG9zaXRpb24iLCJyYW5kWCIsInJhbmRZIiwiTWF0aCIsInJhbmRvbSIsImp1bXBIZWlnaHQiLCJtYXhYIiwid2lkdGgiLCJ2MiIsInN0YXJ0IiwiZ2FpblNjb3JlIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRCxLQURKO0FBS1JDLElBQUFBLGdCQUFnQixFQUFFLENBTFY7QUFNUkMsSUFBQUEsZ0JBQWdCLEVBQUUsQ0FOVjtBQVFSQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxJQUROO0FBRUhKLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDVTtBQUZOLEtBUkM7QUFZUkMsSUFBQUEsTUFBTSxFQUFFO0FBQ0osaUJBQVMsSUFETDtBQUVKTixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1U7QUFGTCxLQVpBO0FBZ0JSRSxJQUFBQSxZQUFZLEVBQUU7QUFDVixpQkFBUyxJQURDO0FBRVZQLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDYTtBQUZDO0FBaEJOLEdBRlA7QUF3Qkw7QUFFQUMsRUFBQUEsTUExQkssb0JBMEJLO0FBQ04sU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS1AsS0FBTCxDQUFXUSxDQUFYLEdBQWUsS0FBS1IsS0FBTCxDQUFXUyxNQUFYLEdBQWtCLENBQS9DO0FBQ0EsU0FBS0MsWUFBTDtBQUNILEdBOUJJO0FBK0JMQSxFQUFBQSxZQS9CSywwQkErQlM7QUFDVixRQUFJQyxPQUFPLEdBQUdwQixFQUFFLENBQUNxQixXQUFILENBQWUsS0FBS2pCLFVBQXBCLENBQWQ7QUFDQWdCLElBQUFBLE9BQU8sQ0FBQ0UsWUFBUixDQUFxQixNQUFyQixFQUE2QkMsSUFBN0IsR0FBb0MsSUFBcEM7QUFDQSxTQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJMLE9BQW5CO0FBRUFBLElBQUFBLE9BQU8sQ0FBQ00sV0FBUixDQUFvQixLQUFLQyxrQkFBTCxFQUFwQjtBQUNILEdBckNJO0FBc0NMQSxFQUFBQSxrQkF0Q0ssZ0NBc0NlO0FBQ2hCLFFBQUlDLEtBQUssR0FBRyxDQUFaO0FBRUEsUUFBSUMsS0FBSyxHQUFHLEtBQUtiLE1BQUwsR0FBY2MsSUFBSSxDQUFDQyxNQUFMLEdBQWMsS0FBS3BCLE1BQUwsQ0FBWVcsWUFBWixDQUF5QixRQUF6QixFQUFtQ1UsVUFBL0QsR0FBNEUsRUFBeEY7QUFFQSxRQUFJQyxJQUFJLEdBQUcsS0FBS1QsSUFBTCxDQUFVVSxLQUFWLEdBQWtCLENBQTdCO0FBRUFOLElBQUFBLEtBQUssR0FBRyxDQUFDRSxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBakIsSUFBdUIsQ0FBdkIsR0FBMEJFLElBQWxDO0FBQ0EsV0FBT2pDLEVBQUUsQ0FBQ21DLEVBQUgsQ0FBTVAsS0FBTixFQUFhQyxLQUFiLENBQVA7QUFDSCxHQS9DSTtBQWdETE8sRUFBQUEsS0FoREssbUJBZ0RJLENBRVIsQ0FsREk7QUFtRExDLEVBQUFBLFNBbkRLLHVCQW1EUTtBQUNULFNBQUt0QixLQUFMLElBQWMsQ0FBZCxDQURTLENBRVQ7O0FBQ0EsU0FBS0gsWUFBTCxDQUFrQjBCLE1BQWxCLEdBQTJCLFlBQVksS0FBS3ZCLEtBQTVDO0FBQ0gsR0F2REksQ0F3REw7O0FBeERLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzdGFyUHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIG1heFN0YXJ0RHVyYXRpb246IDAsXG4gICAgICAgIG1pblN0YXJ0RHVyYXRpb246IDAsXG5cbiAgICAgICAgZ3JvdWQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIHBsYXllcjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcmVEaXNwbGF5OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwXG4gICAgICAgIHRoaXMuZ3JvdWRZID0gdGhpcy5ncm91ZC55ICsgdGhpcy5ncm91ZC5oZWlnaHQvMlxuICAgICAgICB0aGlzLnNwYXduTmV3U3RhcigpXG4gICAgfSxcbiAgICBzcGF3bk5ld1N0YXIoKXtcbiAgICAgICAgbGV0IG5ld1N0YXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN0YXJQcmVmYWIpXG4gICAgICAgIG5ld1N0YXIuZ2V0Q29tcG9uZW50KCdTdGFyJykuZ2FtZSA9IHRoaXNcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1N0YXIpXG5cbiAgICAgICAgbmV3U3Rhci5zZXRQb3NpdGlvbih0aGlzLmdldE5ld1N0YXJQb3NpdGlvbigpKVxuICAgIH0sXG4gICAgZ2V0TmV3U3RhclBvc2l0aW9uKCl7XG4gICAgICAgIGxldCByYW5kWCA9IDBcblxuICAgICAgICBsZXQgcmFuZFkgPSB0aGlzLmdyb3VkWSArIE1hdGgucmFuZG9tICogdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKS5qdW1wSGVpZ2h0ICsgNTBcblxuICAgICAgICBsZXQgbWF4WCA9IHRoaXMubm9kZS53aWR0aCAvIDJcblxuICAgICAgICByYW5kWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqMiAqbWF4WFxuICAgICAgICByZXR1cm4gY2MudjIocmFuZFgsIHJhbmRZKVxuICAgIH0sXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcbiAgICBnYWluU2NvcmUgKCkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XG4gICAgICAgIC8vIOabtOaWsCBzY29yZURpc3BsYXkgTGFiZWwg55qE5paH5a2XXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9ICdTY29yZTogJyArIHRoaXMuc2NvcmU7XG4gICAgfSxcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19