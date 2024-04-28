// function greeting(){
//     var user = prompt("Enter your name : ")
//     alert(`welcome! to the class ${user}`)
// }

// greeting()


// function greeting(user){
//     alert(`welcome! to the class ${user}`)
// }

// greeting("lovish")


// function calcBmi(weight , height){
//     var bmi = weight / (height**2)
//     alert(bmi)
// }


// calcBmi(100,1.80)


// anonymous function

// 1. assign it as a value to a variable
// var greet = function (){
//     console.log('Hello world');
// }

// greet()


// 2. use anonymous function as a callback




















// callback function : when a function is passed into another function as a parameter the passed function is called
// a callback function 

// var cy = new Date().getFullYear() //global

// function calcAge(){
//     var cy = new Date().getFullYear() //global
//     var yob = parseInt(prompt('Enter your year of birth : ')) // local

//     if(yob<1995){
//         return;
//     }

//     return cy-yob
// }

// var age =  calcAge()

// console.log(age)

// console.log(yob);


// function lifespan(average_age, callback) {
//     var age = callback()
//     var years_left = average_age - age;
//     console.log(`Year Left : ${years_left}\nMonths Left : ${years_left * 12}\nWeeks Left : ${years_left * 52}\nDays Left : ${years_left * 365}`);
// }

// lifespan(100, function () {
//     var cy = new Date().getFullYear() //global
//     var yob = parseInt(prompt('Enter your year of birth : ')) // local    
//     if (yob < 1995) {
//         return;
//     }
//     return cy - yob
// })