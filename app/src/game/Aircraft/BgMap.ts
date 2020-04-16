/**
 * @desc 用于处理背景图片平铺切换及滚动逻辑
 */
class BgMap extends BaseScene {

    // 背景图片高度
    protected bgHeight: number

    // 背景图片宽度
    protected bgWidth = Utils.getStageWidth()

    // 图片数量
    private bgCount: number;

    // 控制滚动速度
    private bgSpeed: number = 0.3;

    // 记录上一帧的时间
    private timeOnEnterFrame: number = 0;

    //  初始化
    initView() {

        // 背景图
        let texture: egret.Texture = RES.getRes('img_bg_level_1_jpg');
        this.bgHeight = texture.textureHeight

        // 计算屏幕设备高度需要几张背景拼接
        this.bgCount = Math.ceil(Utils.getStageHeight() / this.bgHeight) + 2

        // 向视图中添加多张背景
        for (let index = 0; index < this.bgCount; index++) {
            let bg = Utils.createBitmapByName('img_bg_level_1_jpg')
            // 让背景宽度充满屏幕
            bg.width = this.bgWidth
            bg.y = -(this.bgHeight * index - this.bgHeight)
            this.addChild(bg)
        }
    }

    // 开始滚动
    public startScroll(pass: number) {

        this.y += this.bgSpeed * pass;

        // 当前视窗容器的y超过所有图片数量的高度时-1时，恢复默认
        if (this.y > (this.bgHeight * (this.bgCount - 1) - this.bgHeight)) {
            this.y = 0
        }
    }

};
