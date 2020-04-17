class DrawBox extends BaseScene {

    private colum1: any
    private colum2: any
    private colum3: any

    initView() {
        var shp: egret.Shape = new egret.Shape();
        this.width = 434
        this.x = 158
        this.y = 424
        shp.graphics.beginFill(0xff0000, 1);
        shp.graphics.drawRoundRect(0, 0, 434, 400, 50, 50);
        shp.graphics.endFill();
        this.addChild(shp);


        this.colum1 = new DrawColum()
        this.colum2 = new DrawColum()
        this.colum3 = new DrawColum()
        this.colum2.x = 150
        this.colum3.x = 294
        this.mask = shp
        this.addChild(this.colum1);
        this.addChild(this.colum2);
        this.addChild(this.colum3);

    }

    start() {
        this.colum1.scroll(0)
        this.colum2.scroll(400)
        this.colum3.scroll(600)
    }
}