
//
var q = document.querySelector.bind(document);
var qa = document.querySelectorAll.bind(document);




//notes

var list = document.querySelectorAll('li');
var arrayOfList = Array.from(list);




function myFunction() {
    var xxx = document.getElementById("newToDo").value;
    console.log(xxx);
}



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
