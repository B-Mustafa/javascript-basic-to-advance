// There are 3 Types :

// 1. var
// 2. let
// 3. const

const AccountNumber = 1234567890;
console.log(AccountNumber);

let AccountBalance = 1000;
console.log(AccountBalance);

var AccountHolderName = "Mustafa";
console.log(AccountHolderName);

//Let's try to change the value of the variables defined above.

// AccountNumber = 9876543210  //This is not allowed as we are trying to change the value of a constant variable;

AccountBalance = 2000; // This is allowed as we are trying to change the value of a variable;
console.log(AccountBalance);

AccountHolderName = "Mustafa B"; // This is allowed as we are trying to change the value of a variable;
console.log(AccountHolderName);

//  We Dont use var anymore as it is not block scoped and can be accessed outside the block as well.