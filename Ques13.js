//Loop an array of objects and remove all objects which don't have gender's value male

const arr = [
    { name: "John", gender: "male" },
    { name: "Mary", gender: "female" },
    { name: "Peter", gender: "male" },
    { name: "Hermione", gender: "female" },
    { name: "Alice", gender: "female" }

]

// Method 1 efficient with complexity O(n)

// const newArr = arr.filter(function (element) {
//     return element.gender == "male"
// })
const newArr = arr.filter(arr => arr.gender == "male")

//Method 2 less efficient with complexity O(count * arr.length^2).
// let count = 0;
// arr.forEach(arr => { if (arr.gender !== 'male') count += 1; })

// for (let i = 0; i < count; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j].gender !== 'male') {
//             arr.splice(j, 1)
//         }
//     }
// }

console.log(newArr)