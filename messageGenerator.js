///Message generator program

function selectRandomly(items) {
  return items[Math.floor(Math.random() * items.length)];
}

///Lists of message parts
const subjects = ["A programmer", "A cat", "A designer", "A teacher", "A dog"];
const actions = ["writes", "jumps over", "paints", "teaches", "chases"];
const objects = ["a piece of code.", "a fence.", "a beautiful landscape.", "math.", "its tail."];

///Mesage generator
 const generateMessage=()=>{

const subject = selectRandomly(subjects);
const action = selectRandomly(actions);
const object = selectRandomly(objects);

return `${subject} ${action} ${object}`;


 }

 ///Display the message
 console.log(generateMessage());
 
