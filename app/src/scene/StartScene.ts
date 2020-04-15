class StartScene extends BaseScene {

    protected initView() {
        // 背景
        let bg: egret.Bitmap = Utils.createBitmapByName('bg_jpg')
        this.addChild(bg)
        bg.x = (Utils.getStageWidth() - bg.width) / 2
        bg.y = (Utils.getStageHeight() - bg.height) / 2

        // 按钮
        let startBtn: egret.Bitmap = Utils.createBitmapByName('btn_start_png')
        this.addChild(startBtn)
        startBtn.x = (Utils.getStageWidth() - startBtn.width) / 2
        startBtn.y = Utils.getStageHeight() - 350

        Utils.bitmapToBtn(startBtn, ()=> {
            console.log('开始游戏')
            SceneController.showPlayScene()
        })

    }
}