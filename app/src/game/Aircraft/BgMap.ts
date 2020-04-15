class BgMap extends BaseScene {

    // 背景图片高度
    protected bgHeight: number

    // 背景图片宽度
    protected bgWidth = Utils.getStageWidth()

    // 图片数量
    private bgCount: number;

    // 控制滚动速度
    private bgSpeed: number = 0.5;

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


        this.startScroll()
        // var num = 0
        // setInterval(() => {
        //     num+=4
        //     if(num > (this.bgHeight * (this.bgCount-1) - this.bgHeight)){
        //         num = 0
        //         this.y = 0
        //     }
        //     this.y = num
        // }, 10)
    }

    // 开始滚动
    private startScroll() {
        // 用帧事件进行动画处理
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    }

    // 滚动方法
    private onEnterFrame() {
        // this.y += this.speed
        /* 获取每一帧的时间差，用时间间隔位置位移会更加平滑 */
        const now = egret.getTimer();
        const time = this.timeOnEnterFrame;
        const pass = now - time;
        this.timeOnEnterFrame = now;


        this.y += this.bgSpeed * pass;
        console.log(this.y)

        // console.log(object)

        if (this.y > (this.bgHeight * (this.bgCount - 1) - this.bgHeight)) {
            this.y = 0
        }
    }
};
