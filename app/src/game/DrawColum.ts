class DrawColum extends BaseScene {

    // 上一帧的时间差
    private timeOnEnterFrame: number = 0;

    initView() {

        this.width = 134
        this.createImsItem()
    }

    private createImsItem() {
        // var con = new egret.DisplayObjectContainer()
        // let ims = Utils.createBitmapByName('prize06_png')
        // con.width = 134
        // con.height = 134
        // ims.width = 120
        // ims.height = 120
        // ims.anchorOffsetX = ims.width / 2
        // ims.anchorOffsetY = ims.height / 2
        // ims.x = con.width / 2
        // ims.y = con.height / 2
        // con.addChild(ims)
        var con = new egret.DisplayObjectContainer()
        con.width = 134
        // con.height = 134

        for (let index = 0; index < 9; index++) {
            console.log(index)
            let ims = Utils.createBitmapByName(`prize0${index + 1}_png`)
            ims.width = 120
            ims.height = 120
            ims.anchorOffsetX = ims.width / 2
            ims.anchorOffsetY = ims.height / 2
            ims.x = 134 / 2
            ims.y = 134 / 2 + 134 * index
            con.addChild(ims)
        }

        this.addChild(con)

        this.addEventListener(egret.Event.ENTER_FRAME, () => {
            var now = egret.getTimer();
            var time = this.timeOnEnterFrame;
            var pass = now - time;
            this.timeOnEnterFrame = egret.getTimer();

            con.y +=  -(100 / pass)

        }, this)
    }

}