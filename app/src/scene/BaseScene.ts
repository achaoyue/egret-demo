

// base场景，所有场景继承这个
// 继承egret.DisplayObjectContainer类，拥有initView方法，之后的所有场景继承自该类，只需重写initView方法即可

class BaseScene extends egret.DisplayObjectContainer {

    public constructor() {
        super()
        // 监听添加到舞台
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.initView, this)
    }

    protected initView() {}
}