function findLongestWord(sentence) {
    const timeLimit = 600000;
  
    let longestWord = '';
    let maxLength = 0;
    let maxVowels = 0;
  
    const words = sentence.split(' ');
  
    function removeNonLetters(word) {
      return word.replace(/[^a-z]/gi, '');
    }
  
    function countVowels(word) {
      return word.split('').filter(char => 'aeiou'.includes(char)).length;
    }
  
    const startTime = Date.now();
  
    for (const word of words) {
      let currentWord = removeNonLetters(word);
  
      // Remove special characters from the start and end of the word
      if (!currentWord.match(/^[a-z]/i)) {
        currentWord = currentWord.substring(1);
      }
      if (!currentWord.match(/[a-z]$/i)) {
        currentWord = currentWord.substring(0, currentWord.length - 1);
      }
  
      if (currentWord.length > maxLength) {
        longestWord = word;
        maxLength = currentWord.length;
        maxVowels = countVowels(currentWord);
      } else if (currentWord.length === maxLength && countVowels(currentWord) > maxVowels) {
        longestWord = word;
        maxVowels = countVowels(currentWord);
      }
  
      if (Date.now() - startTime > timeLimit) {
        throw new Error('Function timed out');
      }
    }

    function removeNonLetters(word) {
        while (word.length > 0 && !word.charAt(0).match(/[a-z]/i)) {
          word = word.substring(1);
        }
      
        while (word.length > 0 && !word.charAt(word.length - 1).match(/[a-z]/i)) {
          word = word.substring(0, word.length - 1);
        }
      
        return word;
      }
  
    return removeNonLetters(longestWord);
  }
