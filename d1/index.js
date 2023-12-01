const fs = require('fs');

function sumCalibrationValuesFromFileSync(filePath) {
  try {
    // Read the input file synchronously
    const input = fs.readFileSync(filePath, 'utf-8');

    // Extract calibration values and filter out invalid ones
    const calibrationValues = input
      .split('\n')
      .map(line => {

        const nums = line.match(/\d+/g) || [];
        const firstDigitSet = nums[0].split('');
        const lastDigitSet = nums[nums.length - 1].split('')

        const firstDigit = parseInt(firstDigitSet[0]);
        const lastDigit = parseInt(lastDigitSet[lastDigitSet.length - 1])
        
        // console.log(Number(`${firstDigit}${lastDigit}`))
        
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

