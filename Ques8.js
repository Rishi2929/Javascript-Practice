//Return the String in alphabetical order
const alphabetical = (str) => {
    return str.toLowerCase().split("").sort().join(" ")
}

console.log(alphabetical("Rishi"))