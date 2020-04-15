class PlayScene extends BaseScene {

    protected initView() {

        var Airs = new Air()
        var MoveDemo = new Movejiaohu()
        this.addChild(Airs)

    }


    // 滚动背景
    // private scrollBg(pass: number) {
	// 	const delY = this.bgSpeed * pass;
	// 	this.bg1.y += delY;
	// 	this.bg2.y += delY;
	// 	if (this.bg1.y > Global.stage.stageHeight) {
	// 		this.bg1.y = 0;
	// 		this.bg2.y = - Global.stage.stageHeight;
	// 	}
    // }
    
}