// //day 0 Scenario

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
// console.log(isEqual("a","a"));
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


// const student = {
//   name: "Hassan",

//   greet() {
//     const callback = () => {
//       console.log(this.name);
//     };

//     callback(); // Direct call
//   }
// };

// student.greet();


// Write a function `createCounter()` using closures that returns increment, decrement, and getValue functions.

// function createCounter() {
//     let counter = 0;

//     function increment() {
//         counter++
//         return counter
//     }
//     function decrement() {
//         counter--
//         return counter
//     }
//     function getValue() {
//         return counter;
//     }

//     return{
//         increment,
//         decrement,
//         getValue
//     }

// }

// let counter = createCounter();

// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.increment());
// console.log(counter.getValue());



// You have a for-loop using 'var' that creates 5 buttons, each meant to alert its own index number on click,
// but all buttons alert 5. Explain why this happens and fix it using let and using closures (IIFE)


// for (var i = 0; i < 5; i++) {
//     const btn = document.createElement("button")
//     btn.innerText = i

//     btn.onclick = function () {
//         alert(i)
//     }
//     document.body.appendChild(btn)
// }



// const input = document.getElementById("input");

// function debounce(fn,delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(()=>{
//             fn(args)
//         },delay)
//     }
// }



// input.addEventListener("input", debounce(function(e){console.log(e[0].target.value)},1000))





console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");

    Promise.resolve().then(() => {
        console.log("Promise inside Timeout");
    });

}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");

    setTimeout(() => {
        console.log("Timeout inside Promise");
    }, 0);
});

setTimeout(() => {
    console.log("Timeout 2");
}, 0);

console.log("End");





// start
// End
// promise 1
// Timeout 1
// Promise inside Timeout
// Timeout 2
// Timeout inside Promise

