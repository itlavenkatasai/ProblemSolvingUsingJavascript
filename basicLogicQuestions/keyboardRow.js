arr = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
str = "hello";
for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < arr.length; i++) {
        if (str[i] == arr[j][i]) {
            console.log(str[i]);
        }
    }
}
