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
let result = FilteredData.map((item) => item.name)
console.log(result)