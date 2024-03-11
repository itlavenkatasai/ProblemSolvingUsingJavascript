let str = "ve@n$k@at".split('');
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let f_index = str[0];
let l_index = str[str.length - 1];
for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (f_index in alphabet && l_index in alphabet) {
        m = str[f_index]
        str[f_index] = str[l_index];
        str[l_index] = m;
    }
    f_index = str[i + 1];
    l_index = str[str.length - 2 - i];
}
console.log(str);