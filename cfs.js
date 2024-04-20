// if : the code inside of the if block runs only if the given condition is true

// if (12 > 10){
// console/.log("Greater");
// }


// else : the code inside of the else block runs only if all the conditions above are false

// if (12 < 15){
//     console.log("Greater");
// }else{
//     console.log("Smaller or equals");
// }

// var today = parseInt(prompt("Enter the day today :", "0-6"))
// if (today === 0) {
//     console.log("today is Sunday");
// } else if (today === 1) {
//     console.log("today is Monday");
// } else if (today === 2) {
//     console.log("today is Tuesday");
// }
// else if (today === 3) {

//     console.log("today is Wednesday");
// }
// else if (today === 4) {
//     console.log("today is Thursday");

// }
// else if (today === 5) {

//     console.log("today is Friday");
// }
// else if (today === 6) {

//     console.log("today is Saturday");
// }else{
//     console.error(`Please enter a valid day`)
// }




// weight (kg)
// height (m)
// bmi  = weight / h**2


// < 18.5 = underweight
//  18.5 - 24.9 = normalweight
//  25 - 29.9 = overweight
//  > 30 = obesse

// var weight = parseInt(prompt("Enter Your Weight in Kg"));
// var height = parseFloat(prompt("Enter Your Height in meter"));
// var bmi = weight / height ** 2
// if (bmi < 18.5) {
//     console.log(`you're underweight as your bmi is ${bmi}`);
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//     console.log(`you're of normal weight as your bmi is ${bmi}`);
// } else if (bmi >= 25 && bmi <= 29.9) {
//     console.log(`you're of overweight as your bmi is ${bmi}`);
// } else {
//     console.log(`you're obesse as your bmi is ${bmi}`);
// }


// var yourname = prompt("Enter your name : ")
// if (yourname.length >= 3){
//     if(yourname.charAt(0) == "a"){
//         console.log(`hey ${yourname}! you're welcome to the party`);
//     }else{
//         console.log(`${yourname}! you're not welcome.`);
//     }
// }else{
//     console.log(`'${yourname}' is not a valid name`);
// }

// var year = prompt("Enter an year :")

// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             console.log(`${year} is a leap year`);
//         } else {
//             console.log(`${year} is not a leap year`);
//         }
//     } else {
//         console.log(`${year} is a leap year`);
//     }
// } else {
//     console.log(`${year} is not a leap year`);
// }


// if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ){
//     console.log(`${year} is a leap year`);
// }else{
//         console.log(`${year} is not a leap year`);
// }



// var today = parseInt(prompt("Enter the day today :", "0-6"))
// switch (today) {
//     case 0:
//         console.log("today is Sunday");
//         break
//     case 1:
//         console.log("today is Monday");
//         break
//     case 2:
//         console.log("today is Tuesday");
//         break
//     case 3:
//         console.log("today is Wednesday");
//         break
//     case 4:
//         console.log("today is Thursday");
//         break
//     case 5:
//         console.log("today is Friday");
//         break
//     case 6:
//         console.log("today is Saturday");
//         break
//     default:
//         console.error(`${today} is not a valid day`);
//         break
// }




// var age = parseInt(prompt("Enter your age : "))
// switch (age) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         console.log(`you can watch the movie for free`);
//         break
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//         console.log(`you can watch the movie for $10`);
//         break

//     case 11:
//     case 12:
//     case 13:
//     case 14:
//         console.log(`you can watch the movie for $15`);
//         break
//     default:
//         console.log(`you can watch the movie for $50`);
//         break
// }


// var marks = parseInt(prompt("Enter your marks : "))

// switch (true) {
//         console.log("A");
//         break
//     case marks >= 80 && marks < 90:
//         console.log("B");
//         break
//     case marks >= 70 && marks < 80:
//         console.log("C");
//         break
//     case marks >= 60 && marks < 70:
//         console.log("D");
//         break
//     case marks >= 0 && marks < 60:
//         console.log("F");
//         break
//     default:
//         console.log("Invalid marks");
//         break

// }


// Loops:  fixed iteration | non fixed iteration


// initialization , condition and update(increment / decrement)

// for(var i = 0; i < 10;i++){
// console.log(i);
// }


// fizzbuzz :
// 1-100 , 3 : fizz , 5 : buzz , 3 & 5 : fizzbuzz


// var txt = prompt("Enter some text here : ")
// var count = 0
// for (var i = 0 ; i < txt.length ; i++){
//     var chr = txt[i]
//     if (chr == "a" || chr == "e" ||chr == "i" || chr == "o" || chr == "u"){
//         count++
//     }
// }
// console.log(`the number of vowels in '${txt}' are ${count} `);


// var txt = prompt("Enter some text here : ")
// var count = 0

// var i = 0
// while(i < txt.length){
//     var chr = txt[i]
//     if (chr == "a" || chr == "e" ||chr == "i" || chr == "o" || chr == "u"){
//         count++
//     }
//     i++
// }
// console.log(`the number of vowels in '${txt}' are ${count} `);

// for (var i = 0 ; i < txt.length ; i++){
//     var chr = txt[i]
//     if (chr == "a" || chr == "e" ||chr == "i" || chr == "o" || chr == "u"){
//         count++
//     }
// }
// console.log(`the number of vowels in '${txt}' are ${count} `);


// var hisName = prompt("Enter your name : ")
// while (hisName.length < 3){
//     hisName = prompt("Enter your correct name : ")
// }

// console.log("welcome",hisName);


// var secret = Math.floor(Math.random() * 100) + 1
// var attempt = 0

// while (true) {
//     attempt++
//     var guess = parseInt(prompt("Guess the secret number : ", "0-100"))
//     if (guess > secret) {
//         alert("Too High! Try Low.")
//     } else if (guess < secret) {
//         alert("Too Low! Try High.")
//     } else {
//         alert(`You've guess the secret number '${secret}' in ${attempt} attempts`)
//         break
//     }
// }




// while (attempt < 10){
//     attempt++
//     var guess = parseInt(prompt("Guess the secret number : ", "0-100"))
//         if (guess > secret) {
//             alert("Too High! Try Low.")
//         } else if (guess < secret) {
//             alert("Too Low! Try High.")
//         } else {
//             alert(`You've guess the secret number '${secret}' in ${attempt} attempts`)
//             break
//         }
// }

// if(attempt>10){
//     alert(`Failed to guess the right number : '${secret}'`)
// }

// var i = 100;
// while (i < 10){
//     console.log("hello world my name is rohan",i);
// }



// var i = 0
// do {
//     i++
//     console.log(i);
// } while (i < 10)


// var i = 100;
// do {
//     console.log("hello world my name is rohan", i);
//     i++
// }
// while (i < 10)