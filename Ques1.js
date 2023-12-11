//Question 1 : Reverse the String
var str = "Hii i am a MERN Stack developer";

var result = str.split(" ")
    .map(word => word.split("").reverse().join("")
    )
//if we use split with nothing it will give us separate words like hii.split("")=>[i,i,h]
//if we use split with space(" ") it will give us words like hii i am .split("")=>[hii,i]


console.log(result.join(" "))