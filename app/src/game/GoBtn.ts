class GoBtn extends BaseScene {

    private gobtn: egret.Bitmap

    initView() {
        this.gobtn = Utils.createBitmapByName('gobtn_png')
        this.width = 225
        this.height = 76
        this.x = Utils.getStageWidth() / 2 - this.width / 2
        this.y = 960

        this.addChild(this.gobtn);



    }

    btnHandle(cb: Function) {
        Utils.bitmapToBtn(this.gobtn, () => {
            // 开始游戏
            // SceneController.showPlayScene()
            cb()
        })
    }
}