//Q5.Design a function that takes a list of integers as input. The function should 
//return True if the list contains two consecutive threes (3 next to a 3) anywhere 
//within the list. Otherwise, it should return False. For example, the function 
//should return True for [1, 3, 3] and False for [1, 3, 1, 3]

function hasConsecutiveThrees(arr){
    //loop through the array
    for(let i = 0; i < arr.length - 1; i++){
        //if the current element and the next element are both 3
        if(arr[i] === 3 && arr[i+1] === 3){
            return true;
        }
    }
    return false;
}
console.log(hasConsecutiveThrees([1, 3, 3])); //true
console.log(hasConsecutiveThrees([1, 3, 1, 3])); //false