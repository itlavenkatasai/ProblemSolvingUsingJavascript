let l1 = [2, 4, 3, 3, 5].reverse();
let l2 = [5, 6, 4, 5, 7].reverse();        //80792
// let n =102;
let l3 = [];
for (let i = 0; i < l1.length; i++) {
    for (let j = i; j <= i; j++) {
        let x = l1[i] + l2[j];
        if (x >= 10) {
            l3.push(x % 10);
            l1[i + 1] = l1[i + 1] + Math.floor(x / 10);
        } else {
            l3.push(x);
        }
    }
}
console.log(l3.reverse().join(""));