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
        // let cartoon: egret.Bitmap = Utils.createBitmapByName('cartoon_png')
        // this.addChild(cartoon)
        var bg = new BgMap();
        this.addChild(bg);
        // this.addEventListener(egret.Event.ENTER_FRAME, ()=>{
        //     var now = egret.getTimer();
        //     console.log(now)
        //     txInput.x = 10;
        // }, this);
    };
    Air.prototype.fn = function () {
        console.log(1111);
    };
    return Air;
}(BaseScene));
__reflect(Air.prototype, "Air");
