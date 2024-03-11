//In Pass by Reference, Function is called by directly passing the reference/address of the variable as an argument. 
//So changing the value inside the function also change the original value. In JavaScript array and Object follows pass by reference property.
var obj = {
    "name": "sai",
    "age": 21,
    "study": "Bachlor's degree",
    "voterId": 12345,
    "skills": [
        "js", "html", "css"
    ]
}
function passByReference(obj) {
    obj.name = "venkatasai"
    obj.age = 25
    return obj
}
console.log("befor calling function", obj);
const output = passByReference(obj);
console.log("after calling function", obj);
console.log(output);