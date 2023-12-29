function isPalindrome(word) {
    // Remove spaces and convert to lowercase
    const cleanedWord = word.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

    // Compare the original and reversed strings
    const reversedWord = cleanedWord.split('').reverse().join('');

    return cleanedWord === reversedWord;
}

// Example usage:
const testWord = "A man, a plan, a canal, Panama";
const result = isPalindrome(testWord);
console.log(result); // Output: true
