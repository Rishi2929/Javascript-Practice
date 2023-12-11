//Duplicate array 
arr = [1, 2, 3]
function Duplicate(arr) {

    return arr.concat(arr);

    // return [...arr, ...arr];
}
console.log(Duplicate(arr)
)