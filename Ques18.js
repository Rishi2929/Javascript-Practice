function findMostFrequentItem(array) {
    if (array.length === 0) {
        // Handle the case where the array is empty
        return undefined;
    }

    // Create an object to store the frequency of each item
    const frequencyMap = {};

    // Iterate through the array and update the frequency map
    array.forEach(item => {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    });

    // Find the item with the highest frequency
    let mostFrequentItem;
    let highestFrequency = 0;

    for (const item in frequencyMap) {
        if (frequencyMap[item] > highestFrequency) {
            mostFrequentItem = item;
            highestFrequency = frequencyMap[item];
        }
    }

    return mostFrequentItem;
}


const array = [1, 2, 2, 3, 4, 4, 4, 5];
const mostFrequent = findMostFrequentItem(array);
console.log(mostFrequent);
