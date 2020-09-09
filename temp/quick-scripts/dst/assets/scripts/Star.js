
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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

    var opacityRatio = 1 - this.game.timer / this.game.startDuration;
    var minOpacity = 50;
    this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
  },
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1N0YXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwaWNrUmFkaXVzIiwiZ2V0UGxheWVyRGlzdGFuY2UiLCJwbGF5ZXJQb3MiLCJnYW1lIiwicGxheWVyIiwiZ2V0UG9zaXRpb24iLCJkaXN0Iiwibm9kZSIsInBvc2l0aW9uIiwic3ViIiwibWFnIiwib25QaWNrZWQiLCJzcGF3bk5ld1N0YXIiLCJnYWluU2NvcmUiLCJkZXN0cm95IiwidXBkYXRlIiwib3BhY2l0eVJhdGlvIiwidGltZXIiLCJzdGFydER1cmF0aW9uIiwibWluT3BhY2l0eSIsIm9wYWNpdHkiLCJNYXRoIiwiZmxvb3IiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRTtBQURKLEdBSFA7QUFPTDtBQUNBQyxFQUFBQSxpQkFSSywrQkFRZTtBQUNoQixRQUFJQyxTQUFTLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxXQUFqQixFQUFoQjtBQUNBLFFBQUlDLElBQUksR0FBRyxLQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJDLEdBQW5CLENBQXVCUCxTQUF2QixFQUFrQ1EsR0FBbEMsRUFBWDtBQUNBLFdBQU9KLElBQVA7QUFDSCxHQVpJO0FBYUw7QUFDQUssRUFBQUEsUUFkSyxzQkFjSztBQUNOLFNBQUtSLElBQUwsQ0FBVVMsWUFBVjtBQUNBLFNBQUtULElBQUwsQ0FBVVUsU0FBVjtBQUNBLFNBQUtOLElBQUwsQ0FBVU8sT0FBVjtBQUNILEdBbEJJO0FBbUJMQyxFQUFBQSxNQW5CSyxvQkFtQkc7QUFDSixRQUFHLEtBQUtkLGlCQUFMLEtBQTJCLEtBQUtELFVBQW5DLEVBQThDO0FBQzFDLFdBQUtXLFFBQUw7QUFDQTtBQUNIOztBQUNELFFBQUlLLFlBQVksR0FBRyxJQUFJLEtBQUtiLElBQUwsQ0FBVWMsS0FBVixHQUFrQixLQUFLZCxJQUFMLENBQVVlLGFBQW5EO0FBQ0EsUUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsU0FBS1osSUFBTCxDQUFVYSxPQUFWLEdBQW9CRCxVQUFVLEdBQUdFLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixZQUFZLElBQUksTUFBTUcsVUFBVixDQUF2QixDQUFqQztBQUNILEdBM0JJO0FBNEJMSSxFQUFBQSxLQTVCSyxtQkE0QkksQ0FFUixDQTlCSSxDQWdDTDs7QUFoQ0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcGlja1JhZGl1czogMCxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgZ2V0UGxheWVyRGlzdGFuY2UoKSB7XG4gICAgICAgIGxldCBwbGF5ZXJQb3MgPSB0aGlzLmdhbWUucGxheWVyLmdldFBvc2l0aW9uKClcbiAgICAgICAgbGV0IGRpc3QgPSB0aGlzLm5vZGUucG9zaXRpb24uc3ViKHBsYXllclBvcykubWFnKClcbiAgICAgICAgcmV0dXJuIGRpc3RcbiAgICB9LFxuICAgIC8vIG9uTG9hZCAoKSB7fSxcbiAgICBvblBpY2tlZCgpe1xuICAgICAgICB0aGlzLmdhbWUuc3Bhd25OZXdTdGFyKClcbiAgICAgICAgdGhpcy5nYW1lLmdhaW5TY29yZSgpXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KClcbiAgICB9LFxuICAgIHVwZGF0ZSgpe1xuICAgICAgICBpZih0aGlzLmdldFBsYXllckRpc3RhbmNlKCkgPCB0aGlzLnBpY2tSYWRpdXMpe1xuICAgICAgICAgICAgdGhpcy5vblBpY2tlZCgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsZXQgb3BhY2l0eVJhdGlvID0gMSAtIHRoaXMuZ2FtZS50aW1lciAvIHRoaXMuZ2FtZS5zdGFydER1cmF0aW9uXG4gICAgICAgIGxldCBtaW5PcGFjaXR5ID0gNTBcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSBtaW5PcGFjaXR5ICsgTWF0aC5mbG9vcihvcGFjaXR5UmF0aW8gKiAoMjU1IC0gbWluT3BhY2l0eSkpXG4gICAgfSxcbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==