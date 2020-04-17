/**
 * @desc 游戏进行时根场景
 */
class PlayScene extends BaseScene {

    protected initView() {

        const example = new Example()
        this.addChild(example)

        // 用于处理一些全局性的事件
        // GameData.Main.addEventListener(GameEvent.GAME_OVER,()=>{
        //     Example.removeListener()
        // },this)


    }
}