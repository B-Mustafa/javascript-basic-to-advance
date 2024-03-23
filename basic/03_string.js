const name = "Mustafa"
const repoCount = 50

// console.log(name + repoCount + " Value"); //We can use this to concatenate but it is not recommended as it can cause issues in some cases.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //This is the recommended way to concatenate strings.

const Name = new String('Mustafa-Bhikhapurwala')

//we can check the string functions by console logging the string as String which will return an object and we can check the functions available in the object. we can check it in broswer by inspecting the console
// console.log(Name[0]);
// console.log(Name.__proto__);


// console.log(Name.length);
// console.log(Name.toUpperCase());
console.log(Name.charAt(2));
console.log(Name.indexOf('t'));

const newString = Name.substring(0, 4)
console.log(newString);

const anotherString = Name.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Mustafa    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mustafadev.me/About%20Us"

console.log(url.replace('%20', '-'))

console.log(url.includes('Us'))

console.log(Name.split('-'));