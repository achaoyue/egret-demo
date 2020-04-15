// /**
//  * @class
//  * @desc 信息提示类
//  * @example 
//  * Message.show('提示信息')
//  */
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
/**
 * 消息提醒弹框
 */
// class Message extends eui.Group {
//     private text: string;  // 提醒的消息
//     private type: string;  // 样式类型
//     private duration: number;  // 持续时间
//     private down_len: number;  // 动画下降距离
//     /**
//      * @param thisObject 当前的显示对象
//      */
//     public constructor({text, type = 'success', duration = 2000}: {
//         text: string,
//         type?: string,
//         duration?: number
//     }, thisObject: egret.DisplayObjectContainer) {
//         super();
//         this.text = text;
//         this.type = type;
//         this.duration = duration;
//         this.down_len = 50;
//         thisObject.addChild(this);
//     }
//     // 初始化
//     protected createChildren() {
//         this.layout = new eui.BasicLayout();
//         this.percentWidth = 90;
//         this.x = 0.5 * 0.1 * this.stage.stageWidth;
//         this.y = this.x;
//         // this.height = 100;
//         this.drawBg();
//         this.drawIcon();
//         this.drawLabel();
//         this.show();
//     }
//     // 绘制背景
//     private drawBg() {
//         const bg: eui.Rect = new eui.Rect();
//         this.addChild(bg);
//         bg.percentWidth = 100;
//         bg.percentHeight = 100;
//         bg.ellipseHeight = 14;
//         bg.ellipseWidth = 14;
//         bg.strokeWeight = 1;
//         switch (this.type) {
//             case 'error':
//                 bg.fillColor = 0xffeeee;
//                 bg.strokeColor = 0xfedddd;
//                 break;
//             case 'success':
//             default:
//                 bg.fillColor = 0xf0f9eb;
//                 bg.strokeColor = 0xe1f3d8;
//                 break;
//         }
//     }
//     // 绘制图标
//     private drawIcon() {
//         const shp: egret.Shape = new egret.Shape();
//         this.addChild(shp);
//         shp.x = 30;
//         shp.y = 22;
//         // 绘制圆圈背景
//         let bg_color = 0x67c23a;
//         switch (this.type) {
//             case 'error':
//                 bg_color = 0xfa5555;
//                 break;
//         }
//         shp.graphics.beginFill(bg_color);
//         shp.graphics.drawCircle(13, 13, 13);
//         shp.graphics.endFill();
//         switch (this.type) {
//             case 'error':
//                 shp.graphics.lineStyle(2, 0xffffff);
//                 shp.graphics.moveTo(8, 8);
//                 shp.graphics.lineTo(18, 18);
//                 shp.graphics.moveTo(8, 18);
//                 shp.graphics.lineTo(18, 8);
//                 shp.graphics.endFill();
//                 break;
//             case 'success':
//             default:
//                 shp.graphics.lineStyle(3, 0xffffff);
//                 shp.graphics.moveTo(7, 13);
//                 shp.graphics.lineTo(11, 18);
//                 shp.graphics.endFill();
//                 shp.graphics.lineStyle(2, 0xffffff);
//                 shp.graphics.moveTo(12, 18);
//                 shp.graphics.lineTo(20, 7);
//                 shp.graphics.lineTo(12, 19);
//                 shp.graphics.endFill();
//                 break;
//         }
//     }
//     // 绘制文字
//     private drawLabel() {
//         const label: eui.Label = new eui.Label();
//         this.addChild(label);
//         label.text = this.text;
//         label.size = 26;
//         label.fontFamily = 'Microsoft Yahei';
//         label.top = 20;
//         label.bottom = 20;
//         label.left = 30 + 40;
//         label.right = 30;
//         switch (this.type) {
//             case 'error':
//                 label.textColor = 0xfa5555;
//                 break;
//             case 'success':
//             default:
//                 label.textColor = 0x67c23a;
//                 break;
//         }
//     }
//     // 下降显示
//     private show() {
//         this.y -= this.down_len;
//         this.alpha = 0;
//         egret.Tween.get(this).to({
//             y: this.y + this.down_len,
//             alpha: 1
//         }, 150).call(() => {
//             this.timeoutDestory();
//         });
//     }
//     // 定时销毁
//     private timeoutDestory() {
//         egret.setTimeout(() => {
//             egret.Tween.get(this).to({
//                 y: this.y - this.down_len,
//                 alpha: 0
//             }, 150).call(() => {
//                 if (this.parent) {
//                     this.parent.removeChild(this);
//                 }
//             });
//         }, this, this.duration);
//     }
//     // -------------------------- api
//     /**
//      * 成功提醒
//      * @param thisObject 当前的显示对象
//      */
//     public static success({text, duration}: {
//         text: string,
//         duration?: number
//     }, thisObject: egret.DisplayObjectContainer) {
//         return new Message({
//             text,
//             duration
//         }, thisObject);
//     }
//     /**
//      * 错误提醒
//      * @param thisObject 当前的显示对象
//      */
//     public static error({text, duration}: {
//         text: string,
//         duration?: number
//     }, thisObject: egret.DisplayObjectContainer) {
//         return new Message({
//             text,
//             type: 'error',
//             duration
//         }, thisObject);
//     }
// } 
