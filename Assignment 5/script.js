//Q1
 
var par = document.querySelector(".container");
var para = document.querySelector("#para");
const click = (color) => {
  par.style.color = color;
  par.style.backgroundColor = "blue";
  para.style.fontSize = "30px";
};
 
 
 
function changeColor() {
  click("red");
}
 
 
//Q2
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
 
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("Email").value;
 
  var output = document.getElementById("printout");
 
  output.innerHTML =
    "<h3>Form Values:</h3>" +
    "<h5>First Name: " +
    fname +
    "</h5>" +
    "<h5>Last Name: " +
    lname +
    "</h5>" +
    "<h5>Email: " +
    email +
    "</h5>";
 
  //output.innerHTML = fname + lname + email;
 
  console.log(fname, lname, email);
});
 
function printpage() {
  window.print();
}
 
 
//Q3
function removeItem() {
  var x = document.getElementById("selectnow");
  x.remove(x.selectedIndex);
}
 
 
//Q4
var words = document.getElementById("word");
 
var boldWords = word.getElementsByTagName("strong");
//var words = document.getElementsByTagName("strong");
 
function myfunction() {
  //words.style.color = "blue";
  for (var i = 0; i < boldWords.length; i++) {
    boldWords[i].style.color = "blue";
  }
}
function myfunction2() {
  //words.style.color = "blue";
  for (var i = 0; i < boldWords.length; i++) {
    boldWords[i].style.color = "white";
  }
}






