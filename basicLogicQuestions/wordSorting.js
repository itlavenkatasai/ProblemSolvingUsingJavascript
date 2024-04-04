let str = "My name is venkatasai";
str = str.split(" ");
let obj = {};
/*
    {
        "2": ['My', 'is']
    }
*/
for (let i = 0; i < str.length; i++) {
    if (!obj[str[i].length]) {
        obj[str[i].length] = [];
    }
    obj[str[i].length].push(str[i]);
}

