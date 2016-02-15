
var q = document.querySelector.bind(document);
var qa = document.querySelectorAll.bind(document);





// var list = document.querySelectorAll('li');
// var arrayOfList = Array.from(list);
//
// var xxx = "next to do";

function myFunction() {
    xxx = document.getElementById("newToDo").value;
    console.log(xxx);
    // var list = document.querySelectorAll('li');
    var list = document.querySelector('#list');
    var newLI = document.createElement('li');
    newLI.innerHTML = xxx;
    list.appendChild(newLI);
    console.log (list);
    document.getElementById("newToDo").value = "";

}

// var newLI = document.createElement('li');
// newLI.innerHTML = xxx;
//
// list = document.querySelector('ul');
// list.appendChild(newLI); //Insert after item 1
//








//
//
// var list = document.querySelectorAll('li');
// var arrayOfList = Array.from(list);
//
// var xxx = "next to do";
//
// function myFunction() {
//     xxx = this.document.getElementById("newToDo").value;
//     console.log(xxx);
// }
//
// var newLI = document.createElement('li');
// newLI.innerHTML = xxx;
//
// list = document.querySelector('ul');
// list.appendChild(newLI); //Insert after item 1








// ======================
// document.getElementById("myButton").addEventListener("click", function(){
//     // document.getElementById("newToDo").innerHTML = "Hello World";
//     console.log(newToDo);
// });







// function newItem(){
//   var listItem = document.getElementById("newToDo").value;
//   console.log(listItem);
// };

//
// <button type="button" onclick="modifyColor()">Click Me</button>
//     <script>
//     function modifyColor() {
//         document.getElementById("example").style.color = "aqua";
//         document.getElementById("example").style.backgroundColor = "gray";
//     }
//     </script>
// ----
//     The setItem() method will add (or update) a key/value pair to the Storage object
// ----
// HTML
//
// <input id="username"></input>
// JS
//
// //Get a single node
// var el = document.getElementById('username');
// ----
// var user = {
//   name : "Shane",
//   job : "instructor"
// };
//
// var storeUser = JSON.stringify(user);
//
// localStorage.setItem('userInfo', storeUser);
//
// localStorage.getItem('userInfo');
// // "{"name":"Shane","job":"instructor"}"
//
// var parsedData = localStorage.getItem('userInfo');
//
// console.log(parsedData);
// // {"name":"Shane","job":"instructor"}
// ----
//
//
