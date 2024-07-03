//Q6.Master Yoda, a renowned Jedi Master from the Star Wars universe, is known 
//for his unique way of speaking. He often reverses the order of words in his 
//sentences. For example, instead of saying "I am home" he might say "Home 
//am I" Design a function that takes a sentence as input and returns a new 
//sentence with the words reversed in the same order that Master Yoda would 
//use.

function masterYoda(sentence){
    //split the sentence into words
    let words = sentence.split(' ');
    //reverse the array of words
    let reversedWords = words.reverse();
    //join the reversed words back into a sentence
    let reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}
console.log(masterYoda('This is a cat'));