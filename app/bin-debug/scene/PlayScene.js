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
var PlayScene = (function (_super) {
    __extends(PlayScene, _super);
    function PlayScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayScene.prototype.initView = function () {
        var _this = this;
        // 背景
        var bg = GameUtil.createBitmapByName('bg2_jpg');
        this.addChild(bg);
        bg.x = (GameUtil.getStageWidth() - bg.width) / 2;
        bg.y = (GameUtil.getStageHeight() - bg.height) / 2;
        var egret_icon = GameUtil.createBitmapByName('egret_icon_png');
        this.addChild(egret_icon);
        egret_icon.x = (GameUtil.getStageWidth() - egret_icon.width) / 2;
        egret_icon.y = 100;
        egret_icon.anchorOffsetX = (egret_icon.width) / 2;
        egret_icon.anchorOffsetY = egret_icon.height / 2;
        var change = function () {
            var tween = egret.Tween.get(egret_icon);
            tween.to({ rotation: 360 }, 2500);
            tween.call(change, _this);
        };
        change();
    };
    return PlayScene;
}(BaseScene));
__reflect(PlayScene.prototype, "PlayScene");
