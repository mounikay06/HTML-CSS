
//without arguments
function sayHello(){
    console.log("Hello");
}

sayHello();


//with argumemts
function functionName( a, b ){
    console.log("one kinda of funtion declaration");
}

functionName();


//declaring function using variables
let functionName = function(){
    console.log("hello");
}
functionName();

//Arrow functions with no arguments
let functionName = ()=>console.log("Arrow functions");
functionName();

//arrow functions with one argument
let functionName = x=>console.log(x);
functionName();

//arrow funtions with conditional statment
let age = 15;
let functionName = (age<18)?
()=>console.log("baby"):
()=>console.log("adult");
functionName();

//arrow functions with more statements
let functionName = (x,y)=>{
    let z=x+y;
    console.log(z);
}
functionName();

//arrow functions with this keyword
function main(){
    this.name='janu';
    this.age=23;
    this.sayName = function(){
        console.log(this.age);
        let innerfunc =()=>{
            console.log(this.age);
        }
        innerfunc();
    }
}
const x = new main();
x.sayName();

//arrow functions argument binding
/*
arrow functions doesn't allow argument binding
instead it uses SPREAD operator

*/

let x = ()=>console.log(x);
x(1,2,3);  //gives error 

//using spread operator

let x = (...n) => console.log(x);
x(1,2,3);

//arrow functions with callbacks
asyncfunction()
.then(()=>asyncfunction1())       //callbacks:ONE FUNCTION CALLS ANOTHER FUNCTION AND SO ON 
.then(()=>asyncfunction2())
.then(()=>finish);


//things to remeber using arrow functions
/*

*dont use arrow functions to create methods inside objects
*arrow functions are not allowed to construct a constructor
*

*/