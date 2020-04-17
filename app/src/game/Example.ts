class Example extends BaseScene {

    private infoText: egret.TextField;

    protected initView() {
        let luckybg: egret.Bitmap = Utils.createBitmapByName('luckybg_jpg')
        luckybg.width = Utils.getStageWidth()
        luckybg.height = Utils.getStageHeight()
        this.addChild(luckybg)


        let lhj_bg: egret.Bitmap = Utils.createBitmapByName('lhj_png')
        lhj_bg.width = Utils.getStageWidth()
        lhj_bg.y = 100
        this.addChild(lhj_bg)

        let drawbox = new DrawBox()
        this.addChild(drawbox)


        const soundBG: egret.Sound = RES.getRes("bg_mp3");
        var channel: egret.SoundChannel = soundBG.play(0, 1);
        channel.volume = 0.1

        const soundBullet = RES.getRes('bullet_mp3')

        // 开始按钮
        let gobtn = new GoBtn()
        this.addChild(gobtn)
        gobtn.btnHandle(() => {
            drawbox.start()
            // soundBullet.play();
        })


    }
}