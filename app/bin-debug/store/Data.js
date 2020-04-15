var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    /**
     * 游戏关卡
     */
    GameData.level = 0;
    /**
     * 玩家走的步数
     */
    GameData.step = 0;
    // 格子的边距
    GameData.gridMargin = 10;
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
