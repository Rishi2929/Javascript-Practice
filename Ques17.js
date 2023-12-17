//Write a js function to get the last element of the array . Passing a parameter 'n' will return 
//the last n elements of array.
const getLastElements = (array, n) => {
    if (n === undefined) {
        return array.length > 0 ? array[array.length - 1] : undefined;
    } else {
        return array.slice(-n);
    }
}

// Examples:
console.log(getLastElements([1, 2, 3, 4, 5]));
console.log(getLastElements([1, 2, 3, 4, 5], 3));
console.log(getLastElements(['a', 'b', 'c'], 2));
console.log(getLastElements([], 2));
console.log(getLastElements([1, 2, 3], 0));
