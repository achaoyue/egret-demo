class Air extends BaseScene {

    protected initView() {

        // let cartoon: egret.Bitmap = Utils.createBitmapByName('cartoon_png')
        // this.addChild(cartoon)

        let bg = new BgMap()
        this.addChild(bg)

        // this.addEventListener(egret.Event.ENTER_FRAME, ()=>{
        //     var now = egret.getTimer();
        //     console.log(now)
        //     txInput.x = 10;
        // }, this);

    }

    protected fn() {
        console.log(1111)
    }
}