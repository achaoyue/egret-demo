class EndScene extends egret.Sprite{
	public constructor() {
		super();
		this.init();
	}
	private init(){
		var shape = new egret.Shape();
		shape.graphics.beginFill(0xe63872);
		shape.graphics.drawRect(0,0,Utils.getStageWidth(),Utils.getStageHeight());
		shape.graphics.endFill();
		this.addChild(shape);

		var top = new egret.Bitmap();
		top.texture = RES.getRes("5541c88bb1fd0_wx_jpg");
		this.addChild(top);
		top.scaleX = 0.5;
		top.scaleY = 0.5;

		var bg = new egret.Bitmap();
		bg.texture = RES.getRes("end1_png");
		this.addChild(bg);
		bg.x = 50;
		bg.y = 100;

		var game_score:string = egret.localStorage.getItem("canquan_game_score");
		var score = new egret.TextField();
		score.size = 80;
		score.text = game_score;
		score.x = 260;
		score.y = 500;
		score.textColor = 0xff0000;
		this.addChild(score);

		var replay_btn = new egret.Bitmap();
		replay_btn.texture = RES.getRes("replay_png");
		this.addChild(replay_btn);
		replay_btn.anchorOffsetX = replay_btn.width / 2;
		replay_btn.anchorOffsetY = replay_btn.height / 2;
		replay_btn.x = 150;
		replay_btn.y = 750;
		replay_btn.touchEnabled = true;
		replay_btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.replay_btnCallback, this);
        replay_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.replay_btnCallback, this);
        replay_btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.replay_btnCallback, this);

		var home_btn = new egret.Bitmap();
		home_btn.texture = RES.getRes("home_png");
		this.addChild(home_btn);
		home_btn.anchorOffsetX = home_btn.width / 2;
		home_btn.anchorOffsetY = home_btn.height / 2;
		home_btn.x = 450;
		home_btn.y = 750;
		home_btn.touchEnabled = true;
		home_btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.home_btnCallback, this);
        home_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.home_btnCallback, this);
        home_btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.home_btnCallback, this);
	}

	private replay_btnCallback(evt:egret.TouchEvent):void {
        if(evt.type == egret.TouchEvent.TOUCH_BEGIN){
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }else if(evt.type == egret.TouchEvent.TOUCH_END){
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;

            SceneController.showPlayScene()


        }else if(evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE){
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }

    }

	private home_btnCallback(evt:egret.TouchEvent):void {
        if(evt.type == egret.TouchEvent.TOUCH_BEGIN){
            evt.currentTarget.scaleX = 1.05;
            evt.currentTarget.scaleY = 1.05;
        }else if(evt.type == egret.TouchEvent.TOUCH_END){
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
            SceneController.showPlayScene()
        }else if(evt.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE){
            evt.currentTarget.scaleX = 1.0;
            evt.currentTarget.scaleY = 1.0;
        }
    }
}