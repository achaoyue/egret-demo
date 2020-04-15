/**
 * @class
 * @desc 信息提示类
 * @example
 * Message.show('sss')
 */
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
var Message = (function (_super) {
    __extends(Message, _super);
    function Message() {
        var _this = _super.call(this) || this;
        _this.bg = Utils.createBitmapByName("egret_icon_png");
        _this.bg.y = -10;
        _this.addChild(_this.bg);
        _this.txtStr = new egret.TextField();
        _this.txtStr.textColor = 0xFE3E55;
        _this.txtStr.width = Utils.getStageWidth();
        _this.txtStr.textAlign = egret.HorizontalAlign.CENTER;
        _this.addChild(_this.txtStr);
        return _this;
    }
    Message.prototype.show = function (str) {
        console.log(str);
        this.txtStr.text = str;
        this.bg.width = this.txtStr.textWidth + 50;
        this.bg.height = this.txtStr.textHeight + 20;
        this.bg.x = Utils.getStageWidth() - this.bg.width >> 1;
        this.y = Utils.getStageHeight() >> 1;
        this.alpha = 1;
        egret.Tween.get(this).wait(1000).to({ y: this.y - 100, alpha: 0 }, 1000, egret.Ease.quadIn).call(this.tweenEnd, this);
    };
    Message.prototype.tweenEnd = function () {
        if (this.parent) {
            SceneController.instance.getState().removeChild(this);
            Message.pool.push(this);
        }
    };
    Message.show = function (str) {
        var item;
        if (Message.pool.length > 0) {
            item = Message.pool.pop();
        }
        else {
            item = new Message();
        }
        if (item) {
            item.show(str);
            SceneController.instance.getState().addChild(item);
        }
    };
    Message.pool = [];
    return Message;
}(egret.DisplayObjectContainer));
__reflect(Message.prototype, "Message");
