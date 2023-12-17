//In an array of numbers and strings ,only add those numbers which are not strings

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "fjkldjfks", "rii", "tkjkjfd"]
let sum = 0

arr.forEach(function (element) {
    if (typeof element != "string") {
        if (typeof element === "number") {
            sum += element
        }
    }
})

console.log(sum)