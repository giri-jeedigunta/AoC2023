const fs = require('fs');

const numberWords = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
};

const numberWords1 = {
  ne: 1,
  wo: 2,
  hree: 3,
  our: 4,
  ive: 5,
  ix: 6,
  even: 7,
  ight: 8,
  ine: 9,
  en: 10,
};



function convertSpelledOutNumbers(input) {

  const digits = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ]
    .reduce(
      (acc, word, index) => acc.replaceAll(word, word + (index + 1) + word),
      input
    )
    .split("")
    .map(Number)
    .filter(Boolean);
  
    console.log('digits : ', digits);

  // const temp = input.replace(/one|two|three|four|five|six|seven|eight|nine|ten/gi, match => {
  //   console.log('match1', match)
  //   const lowercaseMatch = match.toLowerCase();
  //   return numberWords[lowercaseMatch] || match; // If not found, keep the original word
  // });

  // return temp.replace(/([1-9])+(ne|wo|hree|our|ive|ix|even|ight|ine|en)/gi, match => {
  //   console.log('match2 : ', match)
  //   const lowercaseMatch = match.toLowerCase();
  //   const numm = lowercaseMatch.split('')[0];
  //   return numm+numberWords1[lowercaseMatch.substr(1)] || match; // If not found, keep the original word
  // });

  return digits;
}

function sumCalibrationValuesFromFileSync(filePath) {
  try {
    // Read the input file synchronously
    const input = fs.readFileSync(filePath, 'utf-8');

    // Extract calibration values and filter out invalid ones
    const calibrationValues = input
      .split('\n')
      .map(line => {

        const updatedLine = convertSpelledOutNumbers(line); 

        console.log('Original Line: ', line)
        console.log('Updated Line: ', convertSpelledOutNumbers(line))

        // const nums = updatedLine.match(/\d+/g) || [];
        // const firstDigitSet = nums[0].split('');
        // const lastDigitSet = nums[nums.length - 1].split('')

        const firstDigit = parseInt(updatedLine[0]);
        const lastDigit = parseInt(updatedLine[updatedLine.length - 1])

        console.log('FINAL : ')
        
        console.log(Number(`${firstDigit}${lastDigit}`))
        
        return Number(`${firstDigit}${lastDigit}`);
        

        return undefined; // Filter out invalid values
      })
      .filter(value => !isNaN(value));

    // Calculate and return the sum
    return calibrationValues.reduce((sum, value) => sum + value, 0);
  } catch (error) {
    console.error('Error reading the file:', error.message);
    throw error;
  }
}

// Example usage with a file named 'calibration.txt':
const filePath = 'input.txt';

try {
  const result = sumCalibrationValuesFromFileSync(filePath);
  console.log(result); // Output: Sum of calibration values
} catch (error) {
  // Handle errors
}

