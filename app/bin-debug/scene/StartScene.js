var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StartScene.prototype.initView = function () {
        // 背景
        var bg = GameUtil.createBitmapByName('bg_jpg');
        this.addChild(bg);
        bg.x = (GameUtil.getStageWidth() - bg.width) / 2;
        bg.y = (GameUtil.getStageHeight() - bg.height) / 2;
        // 按钮
        var startBtn = GameUtil.createBitmapByName('btn_start_png');
        this.addChild(startBtn);
        startBtn.x = (GameUtil.getStageWidth() - startBtn.width) / 2;
        startBtn.y = GameUtil.getStageHeight() - 350;
        GameUtil.bitmapToBtn(startBtn, function () {
            console.log('开始游戏');
            SceneController.showPlayScene();
        });
    };
    return StartScene;
}(BaseScene));
__reflect(StartScene.prototype, "StartScene");
