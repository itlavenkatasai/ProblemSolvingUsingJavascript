const arr = [
    { firstname: "itla", lastname: "venkatasai", age: 21 },
    { firstname: "itla", lastname: "naresh", age: 27 },
    { firstname: "vemula", lastname: "tejashwini", age: 30 },
    { firstname: "itla", lastname: "naveena", age: 31 },
    { firstname: "porandla", lastname: "raju", age: 21 },
    { firstname: "adepu", lastname: "laxmi", age: 23 },
    { firstname: "adepu", lastname: "ravali", age: 27 },
    { firstname: "adepu", lastname: "rajitha", age: 27 }
]

const output = arr.reduce((acc, x) => {
    if ((x.firstname == "adepu" || x.firstname == "itla") && x.age == 27) {
        if (acc[x.age]) {
            acc[x.age] += 1;
        }
        else {
            acc[x.age] = 1;
        }
    }
    return acc;
}, {});
console.log(output);
