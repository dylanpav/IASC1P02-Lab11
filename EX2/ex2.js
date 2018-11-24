var nouns = ['dog','apple','fish','cat','clown'];
var adjs = ['happy', 'shiny', 'sad', 'mad', 'fun']

function start(){
	document.getElementById("text").innerHTML += getSentance();
}

function getSentance(){
	return "What a "+adjs[parseInt(Math.random()*5)]+" "+nouns[parseInt(Math.random()*5)]+"!\n"
}
