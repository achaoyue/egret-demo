/**
 * @desc 飞机游戏主场景
 */
class Air extends BaseScene {

    // 背景
    private bgMap: BgMap

    // 飞机元素
    private plane: Plane

    // 子弹容器
    private bulletContais: Bullet

    private target: Target

    // 记录上一帧的时间
    private timeOnEnterFrame: number = 0;

    protected initView() {


        // 添加音乐
        let soundBg = RES.getRes('youjun_mp3')
        soundBg.play()

        // 添加背景
        this.bgMap = new BgMap()
        this.addChild(this.bgMap)

        // 添加飞机
        this.plane = new Plane()
        this.addChild(this.plane)

        // 飞机坐标初始位置
        this.plane.anchorOffsetX = this.plane.width / 2
        this.plane.x = (Utils.getStageWidth() / 2)
        this.plane.y = (Utils.getStageHeight() * 2 / 3)

        // 添加子弹容器
        this.bulletContais = new Bullet()
        this.addChild(this.bulletContais)
        this.bulletContais.show({ x: (Utils.getStageWidth() / 2), y: this.plane.y - this.plane.height })

        // 添加攻击目标
        this.target = new Target()
        this.addChild(this.target)

        // 监听操作事件
        this.setListeners()

    }

    // 发射
    shootBullet(pass: number) {
        this.bulletContais.show({ x: this.plane.x, y: this.plane.y - this.plane.height }, pass)
        this.bulletContais.move(pass, this.target,this)
    }

    // 设置监听
    private setListeners() {

        // 设置当前场景可为点击
        this.touchEnabled = true;

        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this)
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this)

        // 用帧事件进行动画处理
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    }

    public removeListener() {
        this.touchEnabled = false;
        // this.stage.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        // this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        // this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        // this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
    }

    // 在场景开始点击时
    private touchBegin(e: egret.TouchEvent) {
        this.plane.fly(e.stageX - (this.plane.width / 2), e.stageY - (this.plane.height / 2))
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this)
    }

    // 在场景触点移动时
    private touchMove(e: egret.TouchEvent) {
        this.plane.fly(e.stageX - (this.plane.width / 2), e.stageY - (this.plane.height / 2))
    }

    // 在场景触点击抬起时
    private touchEnd(e: egret.TouchEvent) {
        // this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this)
    }

    // 用帧事件进行动画处理
    private onEnterFrame() {

        // 获取每一帧的时间差，用时间间隔位置位移会更加平滑
        const now = egret.getTimer();
        const time = this.timeOnEnterFrame;
        const pass = now - time;
        this.timeOnEnterFrame = now;

        // 背景滚动
        this.bgMap.startScroll(pass)

        // 发射子弹
        this.shootBullet(pass);

    }

}