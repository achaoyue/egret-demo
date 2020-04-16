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
 * @desc 用于处理背景图片平铺切换及滚动逻辑
 */
var BgMap = (function (_super) {
    __extends(BgMap, _super);
    function BgMap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 背景图片宽度
        _this.bgWidth = Utils.getStageWidth();
        // 控制滚动速度
        _this.bgSpeed = 0.3;
        // 记录上一帧的时间
        _this.timeOnEnterFrame = 0;
        return _this;
    }
    //  初始化
    BgMap.prototype.initView = function () {
        // 背景图
        var texture = RES.getRes('img_bg_level_1_jpg');
        this.bgHeight = texture.textureHeight;
        // 计算屏幕设备高度需要几张背景拼接
        this.bgCount = Math.ceil(Utils.getStageHeight() / this.bgHeight) + 2;
        // 向视图中添加多张背景
        for (var index = 0; index < this.bgCount; index++) {
            var bg = Utils.createBitmapByName('img_bg_level_1_jpg');
            // 让背景宽度充满屏幕
            bg.width = this.bgWidth;
            bg.y = -(this.bgHeight * index - this.bgHeight);
            this.addChild(bg);
        }
    };
    // 开始滚动
    BgMap.prototype.startScroll = function (pass) {
        this.y += this.bgSpeed * pass;
        // 当前视窗容器的y超过所有图片数量的高度时-1时，恢复默认
        if (this.y > (this.bgHeight * (this.bgCount - 1) - this.bgHeight)) {
            this.y = 0;
        }
    };
    return BgMap;
}(BaseScene));
__reflect(BgMap.prototype, "BgMap");
;
