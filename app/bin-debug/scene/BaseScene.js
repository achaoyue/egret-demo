// base场景，所有场景继承这个
// 继承egret.DisplayObjectContainer类，拥有initView方法，之后的所有场景继承自该类，只需重写initView方法即可
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
var BaseScene = (function (_super) {
    __extends(BaseScene, _super);
    function BaseScene() {
        var _this = _super.call(this) || this;
        // 监听添加到舞台
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initView, _this);
        return _this;
    }
    BaseScene.prototype.initView = function () { };
    return BaseScene;
}(egret.DisplayObjectContainer));
__reflect(BaseScene.prototype, "BaseScene");
