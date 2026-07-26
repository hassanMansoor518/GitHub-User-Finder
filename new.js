// day 0 Scenario 
// function isEqual(a, b) {


//   if(Number.isNaN(a) && Number.isNaN(b)){
//     return true 
//   }

//   if (a === 0 && b === 0) {
//     return 1 / a === 1 / b;
//   }


//   if(typeof(a) === "object" && typeof(b) === "object"){
//      if(a === null || b === null){
//       return a === b
//      }

//      return JSON.stringify(a) === JSON.stringify(b)
//   }



//   return a === b;


// }

// console.log(isEqual(0, 0)); 
// console.log(isEqual(1, 2)); 
// console.log(isEqual({name:"hassan"}, {name:"hassans"})); 




// Q1. What is a closure? Write an example where a closure is used to create a private counter variable.

function counterState(){
  let counter = 0 

  return function counterVariable(){ 
    counter++
    return counter
  }
}

const counter = counterState();

console.log(counter())
console.log(counter())
