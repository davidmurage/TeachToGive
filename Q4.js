//Q4. Design a function that determines whether a given string is a pangram. A 
//pangram is a sentence or phrase containing every letter of the alphabet at 
//least once. Punctuation and case are typically ignored. For example, the 
//string "The quick brown fox jumps over the lazy dog" is a pangram, while 
//"Hello, world!" is not.

function isPangram(str){
    //initialize an empty object to store the frequency of each character
    let charFrequency = {};

    //Loop through each character
    for (let char of str)
    {
        //if the character is an alphabet character
        if(/[a-zA-Z]/.test(char)){
            //convert the character to lowercase
            char = char.toLowerCase();
            //if the character is already in the object, increment its frequency
            if(charFrequency[char]){
                charFrequency[char]++;
            }else{
                //if the character is not in the object, add it and set its frequency to 1
                charFrequency[char] = 1;
            }
        }
    }

    //check if all the alphabets are present in the object
    return Object.keys(charFrequency).length === 26;
}

//example usage:
console.log(isPangram('The quick brown fox jumps over the lazy dog')); //true
console.log(isPangram('Hello, world!')); //false