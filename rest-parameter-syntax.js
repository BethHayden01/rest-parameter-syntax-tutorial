/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
const sumAll = (a, b, c) => a + b + c; 
let sum = sumAll (1, 2, 3 );
console.log("Sum:", sum);
//This logs as expected, but if we try and add more values, see what happens below:

// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6 );
console.log("Sum2:", sum2);
//When displaying sum2 the extra numbers are ignored which is not what we want. This is where we would use the rest parameter syntax.

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (i of rest){
        sum += i;
    }
    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6 );
console.log("Sum 3:", sum3);

//The three dots are used again but this time they will squash any extra parameters added to the function into a new parameter 
//called rest which will be n array within the function. this paramter can tehcnically be called anything you want but here we are calling it rest 
//to represent the rest of the parameters.
// a+b+c can be summed easily, we are using a for loop to iterate through the rest of the array and add each additional number to the array without cutting off.
//When a new variable is created, in this case sum3, all the variables will be logged to the console with none missing and we get as expected 21.

//Rest combines a disconected number of elements into an array.