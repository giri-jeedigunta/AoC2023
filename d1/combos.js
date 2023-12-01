function generateCombinations(words) {
    console.log('words : ', words);
    const combinations = [];
  
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words.length; j++) {
        if (i !== j) {
          const combined = words[i] + words[j];
          if (hasSameLetters(combined, words[i]) && hasSameLetters(combined, words[j])) {
            combinations.push(combined);
          }
        }
      }
    }
  
    console.log('combinations : ', combinations);
    return combinations;
  }
  
  function hasSameLetters(str1, str2) {
    const charCount1 = countCharacters(str1);
    const charCount2 = countCharacters(str2);
  
    for (const char in charCount1) {
      if (charCount1[char] !== charCount2[char]) {
        return false;
      }
    }
  
    return true;
  }
  
  function countCharacters(str) {
    const charCount = {};
    for (const char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
  }
  
  const words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
  generateCombinations(words);
  
//   for (const combination of combinations) {
//     console.log('combination . ' ,combination);
//   }
  