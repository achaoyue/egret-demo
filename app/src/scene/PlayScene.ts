/**
 * @desc 游戏进行时根场景
 */
class PlayScene extends BaseScene {

    protected initView() {

        var Airs = new Air()
        this.addChild(Airs)

        // 用于处理一些全局性的事件
        GameData.Main.addEventListener(GameEvent.GAME_OVER,()=>{
            Airs.removeListener()
        },this)
        

    }
}