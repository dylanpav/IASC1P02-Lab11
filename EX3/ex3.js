function start(){
	var num = document.getElementById("in").value;
	for(i=0; i<=num; i++){
		document.getElementById("text").innerHTML += i+'\n';
	}
}
