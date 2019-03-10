var inquirer = require("inquirer"); 

function Human(name, health){
	this.name = name;
	this.health = health;
}

function Survivor(name, health){
	this.luckyNumber = Math.ceil(Math.random()*30);
	Human.call(this, name, health); 
}

Survivor.prototype = Object.create(Human.prototype);

Survivor.prototype.escape = function(){
	var num = this.luckyNumber;
	return inquirer.prompt([
	{
		type: "input",
		message: "Enter a number between 1 and 30.",
		name: "luckyGuess"
	}]).then(function(response){ 
		if(parseInt(response.luckyGuess) == num) {
			return true;
		}
		return false;
	});
}

function Monster(attack, name, health){
	this.attack = attack; 
	Human.call(this, name, health); 
}

Monster.prototype = Object.create(Human.prototype); 

Monster.prototype.attackAction = function(){
	var ranNum = Math.ceil(Math.random()*5); 
	if(ranNum == 3) return false; 
	return true; 
}

var monster1 = new Monster(12, "Lyle", 15); 

inquirer.prompt([
	{
		type: "input",
		message: "What is your name?",
		name: "username"
	}
	]).then(function(inquirerResponse){
		var survivor1 = new Survivor(inquirerResponse.username, 35); 
		var winState = false; 
		//while(survivor1.health > 0 && winState == false){
			function a(){
				survivor1.escape().then(function(r){
					if(r) {
						winState = true; 
						console.log("You win the game!");
					}else{
						var hit = monster1.attackAction();
						if(hit){
							survivor1.health -= monster1.attack;
							console.log("You've lost "+ monster1.attack + " health. Your total health is now: "+ survivor1.health); 
						}else{
							console.log("You've dodged the monster's attack!"); 
						}
					}	
				}).then(function(r){
					if(survivor1.health >0 && winState == false) a();
					if(survivor1.health<=0) console.log("Sorry, you died.");
				});
				
			};
			
		 a();

	}); 




