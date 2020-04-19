var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneController = (function () {
    function SceneController() {
        this.startScene = new StartScene();
        this.playScene = new PlayScene();
        this.endScene = new EndScene();
    }
    Object.defineProperty(SceneController, "instance", {
        get: function () {
            if (!this.sceneController) {
                this.sceneController = new SceneController();
            }
            return this.sceneController;
        },
        enumerable: true,
        configurable: true
    });
    // 设置存放游戏场景的主容器
    SceneController.prototype.setStage = function (stage) {
        this.stage = stage;
    };
    // 获取存放游戏场景的主容器
    SceneController.prototype.getState = function () {
        return this.stage;
    };
    // 初始化游戏，显示开始游戏场景
    SceneController.initGame = function () {
        var stage = this.instance.stage;
        stage.removeChildren();
        // 添加开始场景
        stage.addChild(this.instance.startScene);
    };
    /**
     * 显示游戏场景
     */
    SceneController.showPlayScene = function () {
        console.log('showPlaySceneshowPlayScene');
        var stage = this.instance.stage;
        stage.removeChildren();
        // 添加场景
        stage.addChild(this.instance.playScene);
    };
    /**
     * 显示游戏结束场景
     */
    SceneController.showEndScene = function () {
        var stage = this.instance.stage;
        stage.removeChildren();
        stage.addChild(this.instance.endScene);
    };
    // 添加场景
    SceneController.addScene = function (scene) {
        var stage = this.instance.stage;
        stage.addChild(scene);
    };
    // 替换场景
    SceneController.replaceScene = function (scene) {
        var stage = this.instance.stage;
        stage.removeChildren();
        stage.addChild(scene);
    };
    return SceneController;
}());
__reflect(SceneController.prototype, "SceneController");
