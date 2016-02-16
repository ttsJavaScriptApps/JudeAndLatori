// might need this later

var q = document.querySelector.bind(document);
var qa = document.querySelectorAll.bind(document);


// adds a to do entered in the field to the list
function myFunction() {
    xxx = document.getElementById("newToDo").value;
    console.log(xxx);
    var list = document.querySelector('#list');
    var newLI = document.createElement('li');
    newLI.innerHTML = xxx;
    list.appendChild(newLI);
    console.log (list);
    document.getElementById("newToDo").value = "";
}




// pulls an item out of the list 
document.querySelector('ul').addEventListener('click', function(event){
	var pullItem = event.target;
	pullItem.style.textDecoration = "line-through";
	setTimeout(function(){
		pullItem.remove()
	}, 1000);
});
