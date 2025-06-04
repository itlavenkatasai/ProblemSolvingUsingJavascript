/* valid anagram means if every character must involve in the second
string */
// one way of write valid anagram code
/*let s = 'anagram';
let t = 'nagaram';
function validAnagram(s, t) {
    if (s.lenght != t.lenght) return false;
    return s.split("").sort().join("") === t.split("").sort().join("");
}
console.log(validAnagram(s, t));*/
////////////////////////////////////////////////////////////////////////
//another way of writing
function validAnagram(s, t) {
    if (s.length != t.length) return false;
    let obj1 = {};
    let obj2 = {};
    
    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
        for(let key in obj1){
            if(obj1[key] != obj2[key]) return false;
        }
    }
    console.log(obj1,obj2);
    return true;
}
console.log(validAnagram("anagram", "nagaram"));

