class Movejiaohu extends BaseScene {

    private infoText: egret.TextField;

    protected initView() {

        this.infoText = new egret.TextField()
        this.infoText.y = 10
        this.infoText.x = 10
        this.infoText.text = '点到我了吗'
        this.addChild(this.infoText)


        let cartoon: egret.Bitmap = Utils.createBitmapByName('cartoon_png')
        this.addChild(cartoon)
        cartoon.x = (Utils.getStageWidth() - cartoon.width) / 2
        cartoon.y = (Utils.getStageHeight() - cartoon.height) / 2

        cartoon.anchorOffsetX = cartoon.width / 2
        cartoon.anchorOffsetY =  cartoon.height / 2

        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (evt: egret.TouchEvent) => {

            egret.Tween.removeTweens(cartoon)

            var tw = egret.Tween.get(cartoon)

            tw.to({x:evt.localX,y:evt.localY},300)


            var isHit: boolean = cartoon.hitTestPoint(evt.localX, evt.localY,true);
            this.infoText.text = "点到我了吗: " + isHit;


        }, this);

    }
}