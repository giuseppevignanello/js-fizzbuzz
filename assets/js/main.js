// Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz”
// per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Create a for loop to console.log the numbers 

for (let i =1; i<101; i++) {
// create a if condition for 3 multiples with % method
    //console.log fizz
    if (i % 3 === 0 && i % 5 != 0 ) {
        // i = "fizz"
        console.log("Fizz");
    } else if (i % 5 === 0 && i % 3 != 0) {
        console.log("Buzz")
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log ("FizzBuzz")
    } else {
        console.log(i)
    }
    

// create a else if condition for the 5 multiples with % method
    //console.log buzz
// create a else if condition with && logical operator for 3 and 5 multiples 
    //console.log fizzbuzz
// create a else condition to console.log all others numbers


}






// tools
// - for
// -console.log
//%
//if