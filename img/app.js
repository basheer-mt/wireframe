// First prompt 

var username = prompt("what's your name?");

document.write(username);
document.write('<h3>' + "Hello" + "_" + username + '</h3>');

    alert("welcome " + username + " To Eva Cosmetics");

console.log(username);

// Second Prompt

var Makeup = prompt("What are you looking for? 1. Face Makeup, 2. Eye Makeup, 3. Lip");

while (Makeup !== "Lip" && Makeup !== "Face" && Makeup !== "Eye") {
 Makeup = prompt("What are you looking for? Please type: Face or Eye or Lip");

}


if (Makeup == "Face") {
    document.write ('<img src="./img/foundation.png" alt="Eva Cosmetics" width="80%"></img>')
  } else if (Makeup == "Eye") {
    document.write ('<img src="./img/Eyeshadow.jpg" alt="Eva Cosmetics" width="80%"></img>')
  } else {
    document.write ('<img src="./img/Lipstick.jpg" alt="Eva Cosmetics" width="80%"></img>')
  }


  var colors = prompt("What is your favorite color");
  


  document.write('<h2>' + "You are looking for:  " + Makeup.fontcolor("") + "_Makeup" + '</h2>');

document.write('<h2>' + "Your favorite color:  " + colors + '</h2>');

document.bgColor = colors;







       



