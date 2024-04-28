// [] to create an array


var fruits = ["apple","kiwi","papaya","dragonfruit"]
var rohan = ["rohan","Sharma","Male",true,26,1.80,["coding","programming"]]


// console.log(rohan.length);

// [] are used to access indexing

// console.log(rohan[0]);
// console.log(rohan[4]);


// adds the item at the end of an array
// rohan.push("isAlive")
// console.log(rohan);


// rohan.unshift("hello world")

// rohan.pop(3)

// rohan.shift()

// console.log(rohan.at(3))
// console.log(rohan.at(-3))


// console.log(rohan.slice(1,6)) //1-5

// console.log(rohan);
// rohan.splice(3,4,"bye bye world","lovish") // insert position , deleted Count , new items 
// console.log(rohan);


// console.log(rohan);
// rohan.splice(3,2,"okok")
// console.log(rohan);



// returns a string
// console.log(rohan.join("||"))


// console.log(rohan.concat(["a","b","c"] , [1,2,3,4]))

// rohan.reverse()
// console.log(rohan);




// higher order functions
    var numbers = [56, 45, 89, 778, 52, 40, 33, 13];
var sum = 0;

// for(var i = 0; i < numbers.length; i++){
//     sumNumber += numbers[i];
// }
// console.log(sumNumber);

// numbers.forEach(function(value,index,self){
// console.log(value,index,self);
// })


// numbers.forEach(function(value,index,self){
//    sum+=value 
// })

// console.log(sum);


// var cubes= []
// for(var i = 0; i < numbers.length; i++){
// var num = numbers[i]
// cubes.push(num**3)

// }
// console.log(cubes);



// map : access each item and perform an action on it : returns a new arrays storing the results

// var cubes = numbers.map(function(value){
//     return value % 3 ==0 
// })

// console.log(cubes);
// var cubes = numbers.map(function(value){
//     return value ** 3
// })

// console.log(cubes);



// var str = ["lovish", "Piyush", "CRLF", "JML", '56'];

// var isVowel = str.map(function(name){
    //     return name.includes("a") || name.includes("e") || name.includes("i") || name.includes("o") ||name.includes("u") 
    // })
    
    // console.log(isVowel);
//     var vowelStr = ["CRPF", "Major", "Commando", "ATS"];
    
//     var isVowel =[]

// for(var i = 0; i < vowelStr.length; i++){
//     var newVowels = vowelStr[i];
//     if(newVowels.includes("a") || newVowels.includes("e") || newVowels.includes("i") || newVowels.includes("o") || newVowels.includes("u")){
//         isVowel.push(newVowels);
//     }

// }
// console.log(isVowel);


// var res = numbers.filter (function (num) {
//     return num % 2 == 0
// })

// console.log(res);


var years = [1995, 2000, 2004, 2021 ,2002];

// var leapYears = years.filter(function(lpYear){
//     return (lpYear % 4 === 0 && lpYear % 100 !== 0) || (lpYear % 400 === 0) 
// })
console.log(leapYears);