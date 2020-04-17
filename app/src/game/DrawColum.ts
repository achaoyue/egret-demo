class DrawColum extends BaseScene {

    private itemcon: egret.DisplayObjectContainer
    private itemconHeight: number

    initView() {

        this.width = 134
        this.createImsItem()

    }

    private createImsItem() {
        // 每一列的容器
        this.itemcon = new egret.DisplayObjectContainer()
        this.itemcon.width = 134

        // 图片数组
        var imgArr = []
        for (let index = 0; index < 9; index++) {
            imgArr.push(`prize0${index + 1}_png`)
        }
        imgArr = [...imgArr, ...imgArr, ...imgArr, ...imgArr, ...imgArr]
        this.itemconHeight = imgArr.length * 134
        for (let index = 0; index < imgArr.length; index++) {

            // 每个图片的格式容器
            var imsCon = new egret.Sprite()
            imsCon.width = 134
            imsCon.height = 134
            imsCon.x = 0
            imsCon.y = imsCon.height * index

            // 添加图片并居中
            let ims = Utils.createBitmapByName(imgArr[index])
            ims.width = 120
            ims.height = 120
            ims.anchorOffsetX = ims.width / 2
            ims.anchorOffsetY = ims.height / 2
            ims.x = imsCon.width / 2
            ims.y = imsCon.width / 2

            imsCon.addChild(ims)
            this.itemcon.addChild(imsCon)

        }

        this.addChild(this.itemcon)

    }

    scroll(delay: number = 0) {
        this.itemcon.y = 0
        egret.Tween.removeTweens(this.itemcon);
        var tw = egret.Tween.get(this.itemcon);
        tw.wait(delay)
        tw.to({ x: 0, y: -(this.itemconHeight - 134 * 3) }, 5800, egret.Ease.sineInOut).call(() => {
            console.log(this.itemcon.height)
        })
    }

}