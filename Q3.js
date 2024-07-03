//Q3.Design a function that takes a string or sequence of characters as input and 
//returns the character that appears most frequently.
//Eg 11189 => '1'
//hello => l

function mostFrequentChar(str){
    //initialize an empty object to store the frequency of each character
    let charFrequency = {};

    //Loop through each character
    for (let char of input)
    {
        //if the character is already in the object, increment its frequency
        if(charFrequency[char]){
            charFrequency[char]++;
        }else{
            //if the character is not in the object, add it and set its frequency to 1
            charFrequency[char] = 1;
        }

      
    }

      //initialize variables to keep track of the most frequent character and its frequency
      let mostFrequentChar = '';
      let maxFrequency = 0;

      //loop through the character frequencies to find the most frequent one
      for(let char in charFrequency){
            if(charFrequency[char] > maxFrequency){
                mostFrequentChar = char;
                maxFrequency = charFrequency[char];
            }
      }
}

//example usage:
console.log(mostFrequentChar('11189')); //1
console.log(mostFrequentChar('hello')); //l