// Write your code in this file!
function scuberGreetingForFeet(num) {
  let greeting = '';
  
  if (num <= 400) {
    greeting = "This one is on me!";
  }
  else if (num > 2500) {
    greeting = "No can do.";
  }
  else  {
    greeting = "I will gladly take your thirty bucks.";
  }
  return greeting;
}

function ternaryCheckCity(city) {
  if (city === "NYC") {
    return "Okay sounds good";
  } 
  else {
    return "No go";
  }
}