/**
 
Problem: Write a program that takes a sentence as input and returns the number of vowels in the sentence. Use string methods to convert the string to lowercase and then count the vowels.
 */
// Solution: Count Vowels in a Sentence

function countVowels(sentence) {
    let vowels = 'aeiou';
    let count = 0;
  
    sentence = sentence.toLowerCase();
  
    for (let char of sentence) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  let sentence = "This is an example sentence.";
  console.log(`Number of vowels: ${countVowels(sentence)}`);
  