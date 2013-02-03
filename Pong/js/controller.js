//Ctrl is an object which's used to get player's actions.

var ctrl = {};

//Keys used to navigate

ctrl.upvalue = 37;  // 37 = left arrow of the keyboard
ctrl.downvalue = 39; // 39 = right arrow of the keyboard

//Initialize both to false at the start of the game. The player won't move if both are false.

ctrl.up = false;
ctrl.down = false;

// Set value to true when the keys are pressed
function initControls()
{
	$(document).bind('keydown',function(e){
			if(e.keyCode == ctrl.upvalue){
				ctrl.up = true;
				return false;
			} else if(e.keyCode == ctrl.downvalue){
				ctrl.down = true;
				return false;
			}
	});

	// Set value to false when the keys are released

	$(document).bind('keyup',function(e){
			if(e.keyCode == ctrl.upvalue){
				ctrl.up = false;
				return false;
			} else if(e.keyCode == ctrl.downvalue){
				ctrl.down = false;
				return false;
			}
	});
}


// 3 states possible for the controller : none, up, down.

ctrl.state = function(){
	if (ctrl.up == true){
		return "up";
	}
	else if(ctrl.down == true){
		return "down";

	}
	return "none";
};



