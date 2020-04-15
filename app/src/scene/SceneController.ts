class SceneController {
    private stage: egret.Stage; // 场景主容器

    // 所有页面场景
    private startScene: StartScene // 开始场景
    private playScene: PlayScene // 游戏场景
    private endScene: EndScene // 结束场景

    public static sceneController: SceneController

    public static get instance() {
        if (!this.sceneController) {
            this.sceneController = new SceneController()
        }
        return this.sceneController
    }

    public constructor() {
        this.startScene = new StartScene()
        this.playScene = new PlayScene()
        this.endScene = new EndScene()
    }

    /**
     * 设置存放游戏场景的容器
     */
    public setStage(stage: egret.Stage) {
        this.stage = stage
    }

    /**
     * 初始化游戏，显示开始游戏场景
     */
    public static initGame() {
        let stage = this.instance.stage
        
        // 添加开始场景
        stage.addChild(this.instance.startScene)
        // this.addScene(this.instance.startScene)
    }

    /**
     * 显示游戏场景
     */
    public static showPlayScene() {
        let stage = this.instance.stage

        // 添加场景
        stage.addChild(this.instance.playScene)
    }

    /**
     * 显示游戏结束场景
     */
    public static showEndScene() {
        let stage = this.instance.stage

        // 添加场景
        stage.addChild(this.instance.playScene)
    }

    /**
     * 添加场景
     */
    public static addScene(scene:egret.DisplayObject) {
        let stage = this.instance.stage
		stage.addChild(scene);
    }
    
    /**
     * 替换场景
     */
	public static replaceScene(scene:egret.DisplayObject) {
        let stage = this.instance.stage
        console.log(stage)
		stage.removeChildren();
		stage.addChild(scene);
	}
}