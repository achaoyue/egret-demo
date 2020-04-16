/**
 * @desc 飞机元素
 */
class Plane extends BaseScene {
    private plane: egret.Bitmap

    // 飞机的移动速度
    private flySpeed:number = 500

    initView() {
        this.plane = Utils.createBitmapByName('hero_png');
        this.plane.scaleX = 0.66;
		this.plane.scaleY = 0.66;
        this.addChild(this.plane)
    }

    // 控制飞机的缓动位置
    public fly(x: number, y:number) {
        var speedo = Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2)) / this.flySpeed;
        egret.Tween.removeTweens(this);
        var tw = egret.Tween.get(this);
        tw.to( { x, y }, speedo * 1000, egret.Ease.sineOut);
    }

}