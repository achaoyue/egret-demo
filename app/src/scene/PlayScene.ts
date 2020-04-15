class PlayScene extends BaseScene {
    protected initView() {

        // 背景
        let bg: egret.Bitmap = GameUtil.createBitmapByName('bg2_jpg')
        this.addChild(bg)
        bg.x = (GameUtil.getStageWidth() - bg.width) / 2
        bg.y = (GameUtil.getStageHeight() - bg.height) / 2

        let egret_icon: egret.Bitmap = GameUtil.createBitmapByName('egret_icon_png')
        this.addChild(egret_icon)
        egret_icon.x = (GameUtil.getStageWidth() - egret_icon.width) / 2
        egret_icon.y = 100

        egret_icon.anchorOffsetX = (egret_icon.width) / 2
        egret_icon.anchorOffsetY = egret_icon.height / 2


        let change = () => {
            let tween = egret.Tween.get(egret_icon)
            tween.to({ rotation: 360 }, 2500)
            tween.call(change, this)
        }

        change()


    }
}