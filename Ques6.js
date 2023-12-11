//Write a function that will reverse the String

function Reverse(num) {
    return Number(num.toString().split("").reverse().join(""))

}

function ReversewithLoop(num) {
    var rev = 0
    while (num > 0) {
        var rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10)
    }
    return rev
}

console.log(ReversewithLoop(123))
console.log(Reverse(342))