//Given an array of objects with a numerical property , implement a function to sort the objects
//based on that property.Additionally , ad a ranking to each object based on its position in the 
//sorted array.

const SortAndRankObject = (array, numericalProperty) => {
    const SortedArr = array.sort((a, b) => a[numericalProperty] - b[numericalProperty])

    const RankedArr = SortedArr.map((item, index) => ({ ...item, ranking: index + 1 }))

    return RankedArr;
}

const arrayOfObjects = [
    { name: "Object1", value: 30 },
    { name: "Object2", value: 20 },
    { name: "Object3", value: 40 },
];

const SortedAndRankedArray = SortAndRankObject(arrayOfObjects, "value")
console.log(SortedAndRankedArray)