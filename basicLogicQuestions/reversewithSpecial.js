let str = '@ve!n$k))'.split("");
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let f_index = 0;
let l_index = str.length - 1;
while (f_index < l_index) {
    if(!alphabet.includes(str[f_index].toUpperCase())){
        f_index++;
        continue;
    }
    if(!alphabet.includes(str[l_index].toUpperCase())){
        l_index--;
        continue;
    }
    let temp = str[f_index];
    str[f_index] = str[l_index];
    str[l_index] = temp;
    f_index++;
    l_index--;
}
console.log(str.join(""))