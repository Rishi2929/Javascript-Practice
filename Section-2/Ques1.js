//Make an array of objects representing the items , filter the items based on a specific condition
//and transform the filtered data into a new format
const ArrOfObj = [
    {
        name: "Rishi",
        gender: "Male",
        Age: "20",
    },
    {
        name: "Ruchi",
        gender: "Female",
        Age: "22",
    },
    {
        name: "Rishika",
        gender: "Female",
        Age: "17",
    },
    {
        name: "Rishi",
        gender: "Male",
        Age: "20",
    },

]
let FilteredData = ArrOfObj.filter(ArrOfObj => ArrOfObj.Age >= "18")
let result = FilteredData.map((item) => ({ name: item.name, gender: item.gender }))
console.log(result)