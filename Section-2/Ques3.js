//There are two Arrays one is of users and other is of cities they live in, make a new array 
//which contains the unified data
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'Charlie' },

];

const cities = [
    { id: 1, city: 'New York' },
    { id: 2, city: 'Los Angeles' },
    { id: 3, city: 'Chicago' },
];

const unifiedData = users.map((user) => {
    const city = cities.find((c) => c.id === user.id);
    return { ...user, city: city ? city.city : "Unknown" }
})

console.log(unifiedData);
