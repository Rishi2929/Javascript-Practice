//Clone an Array
//Method 1
// const CloneArr = (arr) => {
//     return [...arr]
// }
// let ClonedArr = (CloneArr([2, 5, 6]))

//Method 2
// const CloneArr2 = (arr) => {
//     let newArr = [];
//     arr.forEach(e => newArr.push(e));
//     return newArr
// }
// let ClonedArr2 = (CloneArr2([2, 5, 6]))
// ClonedArr2.pop()
// console.log(ClonedArr2)

//Method 3
const CloneArr3 = (arr) => {
    return arr.map(e => e)
}
console.log(CloneArr3([2, 5, 6]))