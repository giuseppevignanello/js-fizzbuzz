// Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz”
// per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


const rowEl = document.createElement ("div");
rowEl.classList.add("row");

const containerEl = document.querySelector(".container");

containerEl.append(rowEl)

// Create a for loop to console.log the numbers 
for (let i =1; i<101; i++) {
    const numberEl = document.createElement ("div");
    numberEl.classList.add = ("col");
    // create a if condition for 3 multiples with % method
    //console.log fizz
    if (i % 3 === 0 && i % 5 != 0 ) {
        // i = "fizz"
        numberEl.append("Fizz");
        console.log("Fizz");
    // create a else if condition for the 5 multiples with % method
    //console.log buzz
    } else if (i % 5 === 0 && i % 3 != 0) {
        numberEl.append("Buzz");
        console.log("Buzz");
    // create a else if condition with && logical operator for 3 and 5 multiples 
    //console.log fizzbuzz
    } else if (i % 3 === 0 && i % 5 === 0) {
        numberEl.append("FizzBuzz");
        console.log ("FizzBuzz");
    } else {
        numberEl.append(i)
        console.log(i)
    }
    
    rowEl.append(numberEl)


}






// tools
// - for
// -console.log
//%
//if