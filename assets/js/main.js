// Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
// per i multipli di 3 stampi “Fizz” al posto del numero
// per i multipli di 5 stampi “Buzz”
// per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.




const containerEl = document.querySelector(".container");



// Create a for loop to console.log the numbers 
for (let i = 1; i < 101; i++) {
    const numberEl = document.createElement("div");
    // create a if condition for 3 multiples with % method
    //console.log fizz
    if (i % 3 === 0 && i % 5 != 0) {
        // i = "fizz"
        numberEl.append("Fizz");
        console.log("Fizz");
        numberEl.style.backgroundColor = ("#0cd6a1");
        // create a else if condition for the 5 multiples with % method
        //console.log buzz
    } else if (i % 5 === 0 && i % 3 != 0) {
        numberEl.append("Buzz");
        console.log("Buzz");
        numberEl.style.backgroundColor = ("#ffd166");
        // create a else if condition with && logical operator for 3 and 5 multiples 
        //console.log fizzbuzz
    } else if (i % 3 === 0 && i % 5 === 0) {
        numberEl.append("FizzBuzz");
        console.log("FizzBuzz");
        numberEl.style.backgroundColor = ("#f0466f");
    } else {
        numberEl.style.backgroundColor = ("#1389b2");
        numberEl.append(i)
        console.log(i)
    }

   
    numberEl.classList.add("box");
    containerEl.append(numberEl);
  


}






// tools
// - for
// -console.log
//%
//if
