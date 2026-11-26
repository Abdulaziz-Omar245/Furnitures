// PRIMITIVE DATA TYPES, They include string,booleans,numbers,undefined,bigint,null.
// const one = "Hello, ";
// const two = "how are you?";
// const joined = `${one}${two}`;
// console.log(joined); // "Hello, how are you?"

// // using the + operator
// const greeting2 = "Hello";
// const name2 = "Bob";
// console.log(greeting2 + ", " + name2); 

// const greeting3 = "Howdy";
// const name3 = "abdi";
// console.log(greeting3 + ","+ name3);

// const greeting4 = "Howdy";
// const name4 = "Ramesh";
// console.log(`${greeting3},${name4}`);

// // Multiline strings
// const newline = `On that day i decided to get up
// and never look back to what happened with tears`;
// console.log(newline);

// const message = "On that day i decided to get up \nAnd never look back to what happened";
// console.log(message);

// including quotes in strings

// we know this won't work
// const badQoutes = "She said "I think so" ";
// console.log(badQoutes);

//let's try this way
// const goodQoutes = 'She said "I think so"';
// console.log(goodQoutes);

// let age = 21;
// let price = 150.50;
// let temperature = -5;

// // booleans
// let gender = "Female";
// if(gender == "Male") {
//     console.log(true)
// }else {
//     console.log(false);
// }

// // undefined
// let email = "ashishoabdi@gmail.com"
// console.log(email)
// console.log(typeof email)

// // null
// let product = null
// console.log(typeof product)

// //  bigint
// let bigint = 123456789000987654321123456789098765432123456780n
// console.log(typeof bigint)

// // STRINGS METHODS
// let myName = "Azuu"
// console.log("name untrimmed",myName)
// // UPPERCASE
// let myNameToUppercase = myName.toUpperCase()
// console.log(myNameToUppercase)
// // LOWERCASE
// let myNameToLowwercase = myName.toLowerCase()
// console.log(myNameToLowwercase)

// // REMOVE SPACE
// let myNameSpaceRemoved = myName.trim()
// console.log("name trimmed",myNameSpaceRemoved)

// // SEARCH INSIDE A STRING
// let myMessage = "I am learning Javascript"
// console.log(myMessage.includes("HTML"))

// // CHECK WHETHER A STRING STARTS WITH A SPECIFIC TEXT
// let handle = "abdiazizomar@gmail.com"
// console.log(handle.startsWith("abdiaziz"))

// // FINDING THE LENGTH OF A STRING
// const footballClub = "Arsenal";
// console.log(footballClub.length)

// // RETRIEVING A STRING CHARACTER

// console.log(footballClub[0]);
// console.log(footballClub[1]);
// console.log(footballClub[2]);
// console.log(footballClub[3]);
// console.log(footballClub[4]);

// //  FINDING POSITION OF A SUBSTRING
// let favouriteBook = "Fourth wing is amazing";
// console.log(favouriteBook.indexOf("wing"));

// console.log(favouriteBook.indexOf("violet"))
// // Will show negative 1 since "violet isn't in the string"

// // EXTRACTING A SUBSTRING FROM A STRING
// const browserType = "Mozilla";
// console.log(browserType.slice(1, 4));

// // parameter is negative
// let text = "Apple, Banana, Orange"
// console.log(text.slice(-6));

// // UPDATING PARTS OF A STRING
// const furniture = "Bookshelf";
// const updated = furniture.replace("shelf", "stand");

// console.log(updated)

// let quote = "to be, or not to be ";
// quote = quote.replace("be", "code");
// console.log(quote);

// // JS USING charAt
// let favouriteHobby = "Hiking"
// console.log(favouriteHobby.charAt(4));

// // USING charCodeAt
// let myHobby = "Reading"
// console.log(myHobby.charCodeAt(0))

// // USING AT()

// let country = "Somalia";
// console.log(country.at(-4))


// //  JS CONCAT()
// let text1 = "Hello ";
// let text2 = "World"
// let text3 = text1.concat("", "world");
// console.log(text3)

// // USING SUBSTRING

// let favouriteGame = "Fortnite";
// console.log(favouriteGame.substring(-4))

// // USING SUBTR

// let myFavouriteClub = "Newcastle"
// console.log(myFavouriteClub.substr(3, 3))
// console.log(myFavouriteClub.substr(3))

// console.log(myFavouriteClub.substr(-4, 3))

// // ISWELLFORMED
// let myCountry = "hello Kenya";
// console.log(myCountry.isWellFormed());

// let myState = "\ud800"
// console.log(myState.isWellFormed())

// // TOWELLFORMED
// let text6 = "hellow \uD800 Kenya"
// console.log(text6.toWellFormed())

// // TRIM
// let content = "    hello world"
// console.log(content.trim())

// //  trimstart
// console.log(content.trimStart())

// // trimend
// let myContent = "hello world    "
// console.log(content.trimEnd())

// // PADSTART
// let myCountrContent = "Kenya"
// console.log( "country", myCountrContent.padStart(8, "#"))

// // PAD NUMBER
// let number = 5;
// let text7 = number.toString()
// console.log(text7.padStart(5, "0"))

// // PANDEND
// let digit = "5";
// console.log(digit.padEnd(4, "X"))

// // REPEAT
// let myHome = "Greatwall "
// console.log(myHome.repeat(3))


// 1. Project description
// You are building a simple customer registration form for a business.

// The user should enter their full name, email address, phone number and a short description about themselves.

// Your JavaScript should clean, validate and manipulate the information before displaying a customer profile.
// Customer Registration
// Assignment preview — try entering some details.
// Full name

// Email address

// Phone number

// About yourselfI am learning JavaScript and web development.

// Register Customer
const fullName = "  Abdiaziz omar  ";
console.log(fullName.trim().toUpperCase())



const gMail = "azuUMOhaMed@gmail.com";
console.log(gMail.toLowerCase())

const phone = "0715242007"
console.log(phone)

const aboutMyself = "I am learning javascript and Web development"
console.log(aboutMyself)
