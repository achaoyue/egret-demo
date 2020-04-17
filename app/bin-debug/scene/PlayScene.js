var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * @desc 游戏进行时根场景
 */
var PlayScene = (function (_super) {
    __extends(PlayScene, _super);
    function PlayScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayScene.prototype.initView = function () {
        var example = new Example();
        this.addChild(example);
        // 用于处理一些全局性的事件
        // GameData.Main.addEventListener(GameEvent.GAME_OVER,()=>{
        //     Example.removeListener()
        // },this)
    };
    return PlayScene;
}(BaseScene));
__reflect(PlayScene.prototype, "PlayScene");
