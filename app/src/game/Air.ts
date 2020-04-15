class Air extends BaseScene {

    protected initView() {

        // 添加背景
        let bg = new BgMap()
        this.addChild(bg)

        // 添加飞机
        let plane = new Plane()
        this.addChild(plane)

        // 飞机坐标初始位置
        plane.x = (Utils.getStageWidth() / 2) - (plane.width / 2)
        plane.y = (Utils.getStageHeight()*2/3)


        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,(e:egret.TouchEvent)=>{
            plane.fly(e.stageX - (plane.width / 2),e.stageY - (plane.height / 2))
            // plane.x =e.stageX - (plane.width / 2)
            // plane.y = e.stageY - (plane.height / 2)

        },this)


    }

}