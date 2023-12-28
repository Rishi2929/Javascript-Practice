//Write a JavaScript function that takes an array of integers as input and returns the sum of all positive numbers in the array.

function sumOfPositiveNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }

    return sum;
}

const numbers = [1, -2, 3, -4, 5];
const result = sumOfPositiveNumbers(numbers);
console.log(result);
