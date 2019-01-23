var hacker1 = "Zora";
console.log("The driver's name is " + hacker1);

var hacker2 = "Alessandro";
console.log("The navigator's name is " + hacker2);


if (hacker1.length > hacker2.length) {
  console.log(hacker1 + " has the longest name, it has " + hacker1.length);
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, " + hacker2 + " got the longest name")
} else {
  console.log("wow, you both got equally long names, " + hacker2.length + " characters!!")
}


var upper = hacker1.toUpperCase();
var newName = "";

for (var i = 0; i < upper.length; i++) {
  newName += upper[i] + " "
}
console.log(newName)


var revert = "";

for (var j = hacker2.length; j >= 0; j--) {
  revert += hacker2[j]
}
console.log(revert)



var reverse = [];

for (var k = hacker2.length; k >= 0; k--) {
  reverse.push(hacker2[k])
}
console.log(reverse.join(""))




alph1 = hacker1.localeCompare(hacker2);

alph2 = hacker2.localeCompare(hacker1);

if (alph1 < alph2) {
  console.log("The driver's name goes first")
} else if (alph1 > alph2) {
  console.log("Yo, the navigator goes first definitely")
} else {
  console.log("What?! You both got the same name?")
}






