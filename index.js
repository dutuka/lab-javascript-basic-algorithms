//Iteration 1: Names and Input
const hacker1 = "Duc";

console.log("The driver's name is " + hacker1);

const hacker2 = "Tran";

console.log("The navigator's name is " + hacker2);

//Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else if (hacker1.length == hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

//Iteration 3: Loops
//3.1

function addSpace(hacker) {
  return hacker.toUpperCase().split("").join(" ");
}
console.log(addSpace(hacker1));

//3.2
function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    //console.log(i);
    newString += str[i];
  }

  console.log(newString);
  return newString;
}

reverseString(hacker2);
//3.3

function sort(hacker1, hacker2) {
  if (hacker1 < hacker2) {
    return `${hacker1} goes first`;
  } else if (hacker1 > hacker2) {
    return `Yo, ${hacker2} goes first, definitely.`;
  } else if (hacker1 == hacker2) {
    return "What?! You both have the same name?";
  }
}
console.log(sort(hacker1, hacker2));
