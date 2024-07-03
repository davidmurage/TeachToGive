// Q2.Write a recursive function to calculate the factorial of a number.

function factorial(n){
    //Base case: if n === 0, return 1
    if(n === 0){
        return 1;
    }
    return n * factorial(n - 1);
}