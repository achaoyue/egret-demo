class StartScene extends BaseScene {

    private start_btn:egret.Bitmap;

    protected initView() {

        // 背景
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xe63872);
		shape.graphics.drawRect(0,0,Utils.getStageWidth(),Utils.getStageHeight());
		shape.graphics.endFill();
        this.addChild(shape);
        
         // logo
        var logo = new egret.Bitmap();
		logo.texture = RES.getRes("logo_png");
		this.addChild(logo);
		logo.x = 20;
		logo.y = 100;

        // 按钮
        let startBtn: egret.Bitmap = Utils.createBitmapByName('btn_start_png')
        this.addChild(startBtn)
        startBtn.x = (Utils.getStageWidth() - startBtn.width) / 2
        startBtn.y = Utils.getStageHeight() - 350

        Utils.bitmapToBtn(startBtn, ()=> {
            // 开始游戏
            SceneController.showPlayScene()
        })

    }
}