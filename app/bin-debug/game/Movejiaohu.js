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
var Movejiaohu = (function (_super) {
    __extends(Movejiaohu, _super);
    function Movejiaohu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Movejiaohu.prototype.initView = function () {
        var _this = this;
        this.infoText = new egret.TextField();
        this.infoText.y = 10;
        this.infoText.x = 10;
        this.infoText.text = '点到我了吗';
        this.addChild(this.infoText);
        var cartoon = Utils.createBitmapByName('cartoon_png');
        this.addChild(cartoon);
        cartoon.x = (Utils.getStageWidth() - cartoon.width) / 2;
        cartoon.y = (Utils.getStageHeight() - cartoon.height) / 2;
        cartoon.anchorOffsetX = cartoon.width / 2;
        cartoon.anchorOffsetY = cartoon.height / 2;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (evt) {
            egret.Tween.removeTweens(cartoon);
            var tw = egret.Tween.get(cartoon);
            tw.to({ x: evt.localX, y: evt.localY }, 300);
            var isHit = cartoon.hitTestPoint(evt.localX, evt.localY, true);
            _this.infoText.text = "点到我了吗: " + isHit;
        }, this);
    };
    return Movejiaohu;
}(BaseScene));
__reflect(Movejiaohu.prototype, "Movejiaohu");
