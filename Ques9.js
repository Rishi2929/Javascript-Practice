//Write a function that accepts a string as a parameter and converts the first letter of each word
//of the string in upper case
const upperCase = (str) => {
    let Sentence = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.substring(1)
    )
    return Sentence.join(" ")
}
console.log(upperCase("rishi isi fdkjdk Dkdj")
)