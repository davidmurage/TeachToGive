//Q1. Design a function that reverses the digits of an integer. For example, 50 
//should become 5 and -12 should become -21.

function reverseInteger(){
    //check if number is negative
    const isNegative = num < 0;

    //remove the negetive and convert number to string
    let str = Math.abs(num).toString();

    //reverse the string
    let reversed = str.split('').reverse().join('');

    //convert string to integer
    let reversedInt = parseInt(reversed);

    //restore the negative sign if the original number was negative
    if(isNegative){
        reversedInt = -reversedInt;
    }

    return reversedInt;

}