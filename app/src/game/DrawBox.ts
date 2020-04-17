class DrawBox extends BaseScene {
    initView() {
        var shp:egret.Shape = new egret.Shape();
        this.width = 434
        this.x = 158
        this.y = 424
        // shp.graphics.beginFill( 0xff0000, 1);
        // shp.graphics.drawRoundRect(0, 0, 434, 400, 50, 50);
        // shp.graphics.endFill();
        // this.addChild( shp );
        let drawCols = new DrawColum()
        this.addChild( drawCols );

    }
}