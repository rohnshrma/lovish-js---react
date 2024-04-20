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

// var first = prompt("Enter your first name : ")
// var last = prompt("Enter your last name : ")
// var age = parseInt(prompt("Enter your age :"))

// var fullName = first + " " + last
// console.log( "hello world my name is " + first + " " + last+" and my age is " + age);

// console.log(12 + "12"); // 1212
// console.log(12 + 12); // 24
// console.log(12 + 12 + "12"); // 2412
// console.log(12 +  "12"  + 12 ); // 121212


// console.log(12 + +"12");
// console.log(12 + -"12");


// template literals : insertion / injection

// console.log(`hello world my name is ${first} ${last} and my age is ${age**2}`)


// indexing  : counting starting from 0, used to access characters of string
// the first character is always on the 0th position
// the last character is always on the string.length - 1 position
// str[index] are used to access the indexing

var txt = "hello world this is rohan sharma."

// console.log(txt[31]);

// console.log(txt[txt.length - 1])

// console.log(txt[0]);


// ============ string method

// console.log(txt.at(100))
// console.log(txt.at(-1))
// console.log(txt.at(4))



// console.log(txt.charAt(100));
// console.log(txt.charAt(-1));
// console.log(txt.charAt(4));


// console.log(txt.concat("\nmy favourite language is hindi.","\nmy age is 27."));


var email = "hello@email.com"

// console.log(txt.endsWith("avc"))
// console.log(txt.endsWith("a.")) 
// console.log(email.endsWith(".com") && email.includes("@") ) 


// console.log(txt.includes("o"));
// console.log(txt.includes("o",10));



// console.log(txt.indexOf("o"));
// console.log(txt.indexOf("o",5));
// console.log(txt.indexOf("o",8));
// console.log(txt.indexOf("o",22));



// console.log(txt.lastIndexOf("o"));
// console.log(txt.lastIndexOf("o",20));


// console.log(txt.startsWith("h"));
// console.log(txt.startsWith("z"));
// console.log(txt.startsWith("o",4));

// console.log(txt.repeat(3));


// 
// console.log(txt.slice(0,11));
// console.log(txt.slice());
// console.log(txt.slice(undefined,21));
// console.log(txt.slice(21));



// console.log(txt[0:10]);



// console.log(txt.split())
// console.log(txt.split(""))
// console.log(txt.split(" "))
// console.log(txt.split("o"))


// mcdonalds => McDonalds
// MCDONALDS => McDonalds

// var brand = prompt("Enter brand :")

// console.log(brand.charAt(0).toUpperCase() + brand.charAt(1).toLowerCase() + brand.charAt(2).toUpperCase() + brand.slice(3,).toLowerCase()  );