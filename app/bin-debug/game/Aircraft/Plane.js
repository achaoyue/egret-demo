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
var Plane = (function (_super) {
    __extends(Plane, _super);
    function Plane() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 飞机的速度
        _this.flySpeed = 500;
        return _this;
    }
    Plane.prototype.initView = function () {
        this.plane = Utils.createBitmapByName('hero_png');
        this.addChild(this.plane);
    };
    Plane.prototype.fly = function (x, y) {
        var speedo = Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2)) / this.flySpeed;
        egret.Tween.removeTweens(this);
        var tw = egret.Tween.get(this);
        tw.to({ x: x, y: y }, speedo * 1000, egret.Ease.sineOut);
    };
    return Plane;
}(BaseScene));
__reflect(Plane.prototype, "Plane");
