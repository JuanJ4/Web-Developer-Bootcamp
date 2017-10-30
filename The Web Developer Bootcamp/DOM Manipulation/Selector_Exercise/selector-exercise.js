//4 different ways to select an element.
var tag = document.getElementById("first");
tag = document.getElementsByClassName("special")[0];
tag = document.getElementsByTagName("p")[0];
tag = document.querySelectorAll(".special")[0];
tag = document.querySelector("p"); //returns the first value with that query
tag = document.querySelector("h1 + p"); // adjacent? 


//Click Listener
var button = document.querySelector("button");
var paragraph = document.querySelector("#eventIndicator");

button.addEventListener("click", function(){
	paragraph.textContent = "I just got Clicked!";
});