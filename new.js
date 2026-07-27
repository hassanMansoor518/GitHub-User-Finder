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


//day 1 

// Q1. What is a closure? Write an example where a closure is used to create a private counter variable.

// function counterState(){
//   let counter = 0 

//   return function counterVariable(){ 
//     counter++
//     return counter
//   }
// }

// const counter = counterState();

// console.log(counter())
// console.log(counter())


//Q3. What is the difference between how 'this' behaves in an arrow function versus a normal function?
//Give a code example.


// const person = {
//   name : "Hassan",

//   greet: function(){
//     console.log(this.name);

//   }
// }

// person.greet()


// const person = {
//   name : "Hassan",

//   greet() {
//     setTimeout(()=> {
//     console.log(this.name);
//   },1000)
// },
// }

// person.greet()




const student = {
  name: "Hassan",
  
  greet() {
    const callback = () => {
      console.log(this.name);
    };

    callback(); // Direct call
  }
};

student.greet();