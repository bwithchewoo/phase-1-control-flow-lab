function scuberGreetingForFeet(someNumber){
  // Write your code here!
  let charge
  if (someNumber <= 400) {
    charge = 'This one is on me!';
  }
  else if (someNumber >= 400 && someNumber <= 2000) {
    charge = 'That will be twenty bucks.';
  }
  else if (someNumber > 2000 && someNumber < 2500) {
    charge = 'I will gladly take your thirty bucks.';
  }
  else {
    charge = 'No can do.'
  }
  return charge;
}

function ternaryCheckCity(someCity){
  // Write your code here!
  let myAnswer;
  if (someCity == 'NYC'){
    myAnswer = 'Ok, sounds good.'
  }
  else {
    myAnswer = 'No go.'
  }
  return myAnswer;
}

function switchOnCharmFromTip(someTip){
 
  // Write your code here!
  let tipper;
  switch(someTip){
    case 'generous':
      tipper = 'Thank you so much.';
      return tipper;
      
    case 'not as generous':
      tipper = 'Thank you.';
      return tipper;
      
    default:
      tipper = 'Bye.'
      return tipper;
  }
}