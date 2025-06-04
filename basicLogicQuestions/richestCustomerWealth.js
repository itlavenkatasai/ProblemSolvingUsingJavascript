let accounts = [[1,2,3],[3,2,1],[3,3,1]];
let richestCustomer = 0;
for(let i=0;i<accounts.length;i++){
    let k = 0;
    for(let j=0;j<accounts[i].length;j++){
        k = k + accounts[i][j];
    }
    if(richestCustomer < k){
        richestCustomer = k;
    }
}
console.log(richestCustomer);