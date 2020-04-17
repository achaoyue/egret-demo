class EndScenes extends BaseScene {

    private endImg:egret.Bitmap

    initView() {
        let endImg = Utils.createBitmapByName('end_tip_success_png')
        endImg.x = Utils.getStageWidth() / 2 - endImg.width / 2
        endImg.y = 200
        this.addChild(endImg)
        endImg.touchEnabled = true
        endImg.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            SceneController.showPlayScene()
        },this)
    }


}