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
        this.infoText = new egret.TextField();
        this.infoText.y = 10;
        this.infoText.x = 10;
        this.infoText.text = 'isHit';
        this.addChild(this.infoText);
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xff0000);
        shp.graphics.drawRect(0, 0, 100, 100);
        shp.graphics.endFill();
        shp.width = 100;
        shp.height = 100;
        shp.anchorOffsetX = shp.width / 2;
        shp.anchorOffsetY = shp.height / 2;
        shp.x = 10;
        shp.y = 60;
        this.addChild(shp);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (evt) {
            shp.x = evt.localX;
            shp.y = evt.localY;
            egret.Tween.removeTweens(shp);
            var tw = egret.Tween.get(shp);
            tw.to({ rotation: 360 }, 2000);
            var isHit = shp.hitTestPoint(10, 10);
            _this.infoText.text = "isHit: " + isHit;
        }, this);
    };
    return PlayScene;
}(BaseScene));
__reflect(PlayScene.prototype, "PlayScene");
