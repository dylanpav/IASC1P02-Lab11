var colours = ['RED','GREEN','BLUE','YELLOW'];
var ans;
var hist = "";

function start(){
	clearBoard();
	var i = parseInt(Math.random() * 4);
	ans = colours[i];
	document.getElementById("text").innerHTML += colours[i];
	setTimeout(clearBoard, 500);
}

function clearBoard(){
	document.getElementById("text").innerHTML = "Simon Says: ";
}

function red(){
	if(ans == 'RED'){
		hist += 'RED\n';
		start();
	}
	else{
		document.getElementById("text").innerHTML = "Game Over!\n"+hist;
	}
}

function green(){
	if(ans == 'GREEN'){
		hist += 'GREEN\n';
		start();
	}
	else{
		document.getElementById("text").innerHTML = "Game Over!\n"+hist;
	}
}

function blue(){
	if(ans == 'BLUE'){
		hist += 'BLUE\n';
		start();
	}
	else{
		document.getElementById("text").innerHTML = "Game Over!\n"+hist;
	}
}

function yellow(){
	if(ans == 'YELLOW'){
		hist += 'YELLOW\n';
		start();
	}
	else{
		document.getElementById("text").innerHTML = "Game Over!\n"+hist;
	}
}
