## egret白鹭

## 项目结构
- bin-debug: 项目调试时，所产生的文件存放于此目录。
- libs: 库文件，包括 Egret 核心库和其他扩展库存放于此目录。
- resource: 项目资源文件存放于此目录，比如图片、音频等。
- scripts: 项目构建和发布时需要用到的脚本文件存放在此目录。
- src: 项目代码文件存放于此目录。
- template: 项目模板文件存放于此目录。
- egretProperties.json: 项目的配置文件。
- index.html: 入口文件。具体的配置说明可以参考：入口文件说明
- manifest.json: 网页清单文件。
- tsconfig.json: typescript 编译配置文件。


``` js
┗ src
  ┣ common // 存放一些共用的类
  ┃ ┗ Utils.ts // 游戏工具类，获取图片、舞台宽高等
  ┣ scene // 游戏场景
  ┃ ┣ BaseScene.ts // base场景，所有场景继承这个
  ┃ ┣ EndScene.ts // 结束场景
  ┃ ┣ PlayScene.ts // 游戏场景
  ┃ ┗ StartScene.ts // 开始场景
  ┃ ┣ GameData.ts // 存放游戏数据
  ┃ ┣ GameData.ts // 存放游戏数据
  ┃ ┗ SceneControlloer.ts // 场景控制器
  ┣ Main.ts // 游戏主类（入口，所有场景都放在这个上面显示）
  ┗ Platform.ts // 可用于定义一些window上的对象，接口（比如微信登录）
```

## 文件介绍

### Utils 工具类
- getStageHeight（获取舞台高度）
- getStageWidth（获取舞台宽度）
- createBitmapByName（根据传入的名称创建Bitmap）
- createMovieClipByName（根据传入的名称创建MovieClip）

### BaseScene 对象容器类
继承`egret.DisplayObjectContainer`类，拥有initView方法，之后的所有场景继承自该类，只需实现initView方法即可
``` js
class BaseScene extends egret.DisplayObjectContainer {

    public constructor() {
        super()
        // 监听添加到舞台
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.initView, this)
    }

    protected initView() {}
}
```

### 场景控制类SceneController
这是一个单例，有initGame（初始化游戏，显示开始游戏场景）、showPlayScene（显示游戏场景）、showEndScene（显示结束场景）等