class PlayScene extends BaseScene {

    private infoText: egret.TextField;

    protected initView() {

        this.infoText = new egret.TextField()
        this.infoText.y = 10
        this.infoText.x = 10
        this.infoText.text = 'isHit'
        this.addChild(this.infoText)

        var shp = new egret.Shape();

        shp.graphics.beginFill(0xff0000);
        shp.graphics.drawRect(0, 0, 100, 100);
        shp.graphics.endFill();

        shp.width = 100;
        shp.height = 100;

        shp.anchorOffsetX = shp.width / 2;
        shp.anchorOffsetY = shp.height / 2;

        shp.x = 10
        shp.y = 60

        this.addChild(shp);






        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (evt: egret.TouchEvent) => {
            shp.x = evt.localX;
            shp.y = evt.localY;
            egret.Tween.removeTweens(shp)
            

            var tw = egret.Tween.get(shp)
           

            tw.to({ rotation: 360 }, 2000)
           

            var isHit: boolean = shp.hitTestPoint(10, 10);
            this.infoText.text = "isHit: " + isHit;

        }, this);

    }
}