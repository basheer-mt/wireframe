// First prompt

var username = prompt("what's your name?");

document.write(username);
document.write('<h3>' + "Hello" + username + '</h3>');

    alert("welcome " + username + " To Eva Cosmetics");

console.log(username);

// Second Prompt

var Makeup = prompt("What are you looking for? 1 -> Face Makeup, 2 -> Eye Makeup, 3 -> Lip");
document.write('<h2>' + "You're Looking for:" + Makeup + '</h2>');

var colors = prompt("What is your favorite color");
document.write('<h2>' + "Your favorite color:" + colors + '</h2>');
document.getElementById("nav").style.backgroundColor = colors;




       



