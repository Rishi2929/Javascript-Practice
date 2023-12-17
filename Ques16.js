//Write a js function to get the first element of the array . Passing a parameter 'n' will return 
//the first n elements of array.

const FirstElement = (arr, n) => {
    if (n === undefined) {
        // If n is not provided, return the first element
        return arr.length > 0 ? arr[0] : undefined;
    }
    else {
        return arr.slice(0, n)

    }
}
console.log(FirstElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))