class Bullet extends BaseScene {

    // 所有的子弹
    private bullets: Array<any> = []

    // 控制子弹发射频率
    private shootInterval: number = 100;
    private threshold: number = 0;

    // 子弹飞行的速度
    public bulletSpeed: number = 1.2;

    // 子弹发射声音
    private soundBullet: egret.Sound

    // 生命值
    private lifeVal: number = 100

    initView() {
        this.soundBullet = RES.getRes('bullet_mp3')

        // this.addEventListener(GameEvent.GAME_OVER,()=>{
        //     console.log(111111111111111)
        // }, this);
    }

    // 控制子弹发射的频率
    showInterval(pass: number = 0): Boolean {
        this.threshold += pass
        if (this.threshold > this.shootInterval) {
            this.threshold = 0
            return true
        }
        return false
    }

    // 发射
    show(position: Object, pass: number = 0) {

        // 控制发射的频率
        if (!this.showInterval(pass)) {
            return
        }

        // 创建新子弹
        let bullet = Utils.createBitmapByName('bullet_png')
        bullet.scaleX = 0.3
        bullet.scaleY = 0.3
        bullet.anchorOffsetX = bullet.width / 2
        bullet.anchorOffsetY = bullet.height / 2

        bullet.x = position['x']
        bullet.y = position['y']

        this.bullets.push(bullet)
        this.addChild(bullet)

        this.fireSound()

    }

    // 子弹移动
    move(pass: number, target: Target, cls) {
        this.bullets.forEach((item, index) => {
            let bullet = item
            bullet.y += - (this.bulletSpeed * pass);

            // 检测是否命中目标
            this.hitTest(target, { x: bullet.x, y: bullet.y }, pass, cls)

            //子弹超出了屏幕，就销毁
            if (Utils.validateStageOut(bullet.y)) {
                this.destroy(index)
            }
        })
    }

    //子弹发射的声音
    fireSound() {
        this.soundBullet.play(0, 1)
    }

    // 销毁子弹
    destroy(index: number) {
        this.removeChildAt(index);
        this.bullets.splice(index, 1);
    }

    // 碰撞检测
    hitTest(target: Target, targetPos: { x: number, y: number }, pass: number, cls) {
        var { x, y } = targetPos
        var isHit: boolean = target.hitTestPoint(x, y);

        if (isHit) {
            var val = this.lifeVal -= 0.15
            target.scaleX = val / 100
            target.scaleY = val / 100

            // 控制发射的频率
            if (!this.showInterval(pass)) {
                return
            } else {
                target.x = Utils.random(0, Utils.getStageWidth()) * 0.5
                target.y = Utils.random(0, Utils.getStageWidth()) * 0.09
            }

            if (val <= 30) {

                // 将场景内的事件全部清除
                cls.removeListener()

                setTimeout(() => {
                    SceneController.showEndScene()
                }, 1000)

            }
        }
    }

}