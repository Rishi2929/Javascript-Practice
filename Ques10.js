//write a js function to get the number of occurrences of each letter in specified string

const occurrences = (str) => {
    let occurrences = {};
    str.split("").forEach(function (elem) {
        if (occurrences.hasOwnProperty(elem) == false) {
            occurrences[elem] = 1;
        }
        else {
            occurrences[elem] += 1;
        }
    })
    return occurrences;
}
console.log(occurrences("apple"))