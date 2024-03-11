alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
alpa_dic = {};
for (let i = 0; i < alphabet.length; i++) {
    alpa_dic[alphabet[i]] = i + 1;
}
const s = '1262';
// for (let i = 0; i < s.length; i++) {
//     for (const [key, value] of Object.entries(alpa_dic)) {
//         if (s[i] == value) {
//             console.log(key);
//         }
//     }
// }
const output = [];
for (let i = 0; i < s.length; i++) {
    for (let [key, value] of Object.entries(alpa_dic)) {
        if(s[i] == value){
            output.push(key);
        }
    }
}
console.log(output.join(""));
