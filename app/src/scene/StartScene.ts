class StartScene extends BaseScene {

    protected initView() {
        // 背景
        let bg: egret.Bitmap = GameUtil.createBitmapByName('bg_jpg')
        this.addChild(bg)
        bg.x = (GameUtil.getStageWidth() - bg.width) / 2
        bg.y = (GameUtil.getStageHeight() - bg.height) / 2

        // 按钮
        let startBtn: egret.Bitmap = GameUtil.createBitmapByName('btn_start_png')
        this.addChild(startBtn)
        startBtn.x = (GameUtil.getStageWidth() - startBtn.width) / 2
        startBtn.y = GameUtil.getStageHeight() - 350

        GameUtil.bitmapToBtn(startBtn, ()=> {
            console.log('开始游戏')
            SceneController.showPlayScene()
        })

    }
}