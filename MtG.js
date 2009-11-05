
cards[0] = ;
cards[1] = 
player1.playLand(card);
player1.pass();
player2.pass();	//pass in succession

function MtG = {
	Player : function (){
		this.landPlayed = 0;
		this.playLand = function(card){
			var action = {
				subject:this,
				verb:PlayLand,
				object:card
			};
			this.board.takeAction(action);
		}
		//choices = {
		//	targets:
		//	cost:
		//	mode:
		//};
		this.cast = function(card, choices){
			var action = {
				subject:this,
				verb:Cast,
				choices:choices
			};
			this.board.takeAction(action);
		}
		this.tap = function(obj){
			var action = {
				subject:this,
				verb:Tap,
				object:obj,
			};
			this.board.takeAction(action);
		}
		this.activate = function(ability, cost){
			var action = {
				subject:this,
				verb:Activate,
				object:ability,
				cost: cost
			};
			this.board.takeAction(action);
		}
		this.pay
	},	//Player

	//Phase
	BeginningPhase : 0,
	CombatPhase : 1,
	EndingPhase : 2,
	
	//Step
	UntapStep : 0,
	UnkeepStep : 1,
	DrawStep : 2,
	BeginningCombatStep : 0,
	DeclareAttackerStep : 1, 
	DeclareBlockerStep : 2, 
	
	Board : function (){
		this.players = [];
		
		this.startGame = function(activePlayer){
			this.activePlayer = activePlayer;
			this.turn = 1;
			foreach(this.players, function(player){
				player.life = 20;
			});
			this.phase = BeginningPhase;
			this.step = UntapStep;
		};
		this.takeAction = function(action){
			
		};
		
		this.pass = function(){
			if(this.isPassInSuccession())
			{
				if(this.stack.length == 0)
				{
					//The step or phase ends
					this.nextStepPhase();
				}
				else
				{
					//the spell or ability on top of the stack resolve
					this.resolve();
				}
			}
		};
		
		this.tap
	}//Board
};