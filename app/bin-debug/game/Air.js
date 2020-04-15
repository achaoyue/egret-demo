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
var Air = (function (_super) {
    __extends(Air, _super);
    function Air() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Air.prototype.initView = function () {
        // 添加背景
        var bg = new BgMap();
        this.addChild(bg);
        // 添加飞机
        var plane = new Plane();
        this.addChild(plane);
        // 飞机坐标初始位置
        plane.x = (Utils.getStageWidth() / 2) - (plane.width / 2);
        plane.y = (Utils.getStageHeight() * 2 / 3);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
            plane.fly(e.stageX - (plane.width / 2), e.stageY - (plane.height / 2));
            // plane.x =e.stageX - (plane.width / 2)
            // plane.y = e.stageY - (plane.height / 2)
        }, this);
    };
    return Air;
}(BaseScene));
__reflect(Air.prototype, "Air");
