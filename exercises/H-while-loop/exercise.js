/*
    while loops can be useful when you want to execute some code as long as some condition is true.    

    Using a while loop, complete the function below so it logs (using console.log) the first n even numbers as a comma-seperated string.
    The list of numbers should start with 0. n is being passed in as a parameter.
*/

function evenNumbers(n) {
    // TODO
    let count = 0;
    let evenNumber = 0;
    let arrayPrint = [];
    while(count < n) {
        if (n == 0) {
            console.log("")
        } else {
            evenNumber = count * 2
            arrayPrint.push(evenNumber)
            count += 1
        }
   
    }
    console.log(arrayPrint.join());
    return evenNumber;
    
}

evenNumbers(3); // should output 0,2,4
evenNumbers(0); // should output nothing
evenNumbers(10); // should output 0,2,4,6,8,10,12,14,16,18
