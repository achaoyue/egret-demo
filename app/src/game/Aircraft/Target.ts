class Target extends BaseScene {

    private target: egret.Bitmap

    initView() {

        let bingdu = Utils.createBitmapByName('bingdu_png')
        this.target = bingdu
        this.addChild(this.target)

    }
}