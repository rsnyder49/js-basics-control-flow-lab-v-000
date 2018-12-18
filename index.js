// Write your code in this file!
function scuberGreetingForFeet(num) {
  let greeting = '';
  
  if (num <= 400) {
    greeting = "This one is on me!";
  }
  else if (num > 2000) {
    greeting = "I will gladly take your thirty bucks";
  }
  else  {
    greeting = "No can do";
  }
  return greeting;
}