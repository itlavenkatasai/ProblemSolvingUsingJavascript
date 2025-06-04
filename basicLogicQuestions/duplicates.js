let person = [{
    name: "Sai",
    age: 25,
    isStudent: false,
    skills: ["JavaScript", "React", "Node.js"],
    address: {
        city: "Hyderabad",
        country: "India"
    },
    greet: function () {
        return `Hello, my name is ${this.name}`;
    }},
    {name: "Naresh",
    age: 25,
    isStudent: false,
    skills: ["JavaScript", "React", "Node.js"],
    address: {
        city: "Hyderabad",
        country: "India"
    },
    greet: function () {
        return `Hello, my name is ${this.name}`;
    }
}];
let output = person.map((x) => x.name );
console.log(output);
