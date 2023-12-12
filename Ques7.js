//Check whether a string is palindrome or not
function StringPalChecker(str) {

    const processedStr = str.replace(/\s/g, '').toLowerCase();
    console.log(processedStr)

    const reversedStr = processedStr.split("").reverse().join("");
    console.log(reversedStr)

    if (reversedStr === processedStr) {
        console.log("String is a palindrome");
    } else {
        console.log("String is not a palindrome");
    }
}

StringPalChecker("RIshi ss");



