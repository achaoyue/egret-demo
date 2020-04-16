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
 * @desc 飞机游戏主场景
 */
var Air = (function (_super) {
    __extends(Air, _super);
    function Air() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 记录上一帧的时间
        _this.timeOnEnterFrame = 0;
        return _this;
    }
    Air.prototype.initView = function () {
        // 添加音乐
        var soundBg = RES.getRes('youjun_mp3');
        soundBg.play();
        // 添加背景
        this.bgMap = new BgMap();
        this.addChild(this.bgMap);
        // 添加飞机
        this.plane = new Plane();
        this.addChild(this.plane);
        // 飞机坐标初始位置
        this.plane.anchorOffsetX = this.plane.width / 2;
        this.plane.x = (Utils.getStageWidth() / 2);
        this.plane.y = (Utils.getStageHeight() * 2 / 3);
        // 添加子弹容器
        this.bulletContais = new Bullet();
        this.addChild(this.bulletContais);
        this.bulletContais.show({ x: (Utils.getStageWidth() / 2), y: this.plane.y - this.plane.height });
        // 添加攻击目标
        this.target = new Target();
        this.addChild(this.target);
        // 监听操作事件
        this.setListeners();
    };
    // 发射
    Air.prototype.shootBullet = function (pass) {
        this.bulletContais.show({ x: this.plane.x, y: this.plane.y - this.plane.height }, pass);
        this.bulletContais.move(pass, this.target, this);
    };
    // 设置监听
    Air.prototype.setListeners = function () {
        // 设置当前场景可为点击
        this.touchEnabled = true;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        // 用帧事件进行动画处理
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    Air.prototype.removeListener = function () {
        this.touchEnabled = false;
        // this.stage.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        // this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        // this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        // this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
    };
    // 在场景开始点击时
    Air.prototype.touchBegin = function (e) {
        this.plane.fly(e.stageX - (this.plane.width / 2), e.stageY - (this.plane.height / 2));
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
    };
    // 在场景触点移动时
    Air.prototype.touchMove = function (e) {
        this.plane.fly(e.stageX - (this.plane.width / 2), e.stageY - (this.plane.height / 2));
    };
    // 在场景触点击抬起时
    Air.prototype.touchEnd = function (e) {
        // this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this)
    };
    // 用帧事件进行动画处理
    Air.prototype.onEnterFrame = function () {
        // 获取每一帧的时间差，用时间间隔位置位移会更加平滑
        var now = egret.getTimer();
        var time = this.timeOnEnterFrame;
        var pass = now - time;
        this.timeOnEnterFrame = now;
        // 背景滚动
        this.bgMap.startScroll(pass);
        // 发射子弹
        this.shootBullet(pass);
    };
    return Air;
}(BaseScene));
__reflect(Air.prototype, "Air");
