// "a sequence of characters(alpha , numbers , special symbols (whitespace)) enclosed 
// in single , double quotes or backticks(` `)" 

//  how to check the data type of any value ?
// typeof keywords returns the data type of any value /  variable

// var x = 12;
// var myName = "rohan sharma"
// console.log(typeof x);
// console.log(typeof myName);
// console.log(typeof "hello world");

// var myName = prompt("Enter your name : ")
// console.log(typeof myName)

// var age = parseInt(prompt("Enter your age : "))
// var age = parseFloat(prompt("Enter your age : "))
// console.log(typeof age , age)
// var age = Number(prompt("Enter your age : "))
// console.log(typeof age)


// console.log(12+12);
// console.log("12"+"12");

// concatenation : adding two or more strings together

var first = prompt("Enter your first name : ")
var last = prompt("Enter your last name : ")
var age = parseInt(prompt("Enter your age :"))

// var fullName = first + " " + last
// console.log( "hello world my name is " + first + " " + last+" and my age is " + age);

// console.log(12 + "12"); // 1212
// console.log(12 + 12); // 24
// console.log(12 + 12 + "12"); // 2412
// console.log(12 +  "12"  + 12 ); // 121212


// console.log(12 + +"12");
// console.log(12 + -"12");



// template literals : insertion / injection

console.log(`hello world my name is ${first} ${last} and my age is ${age**2}`)