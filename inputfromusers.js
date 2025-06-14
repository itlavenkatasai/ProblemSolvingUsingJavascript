let input = "";

process.stdin.on("data", function (chunk) {
    input += chunk;
});

process.stdin.on("end", function () {
    const lines = input.trim().split("\n");
    let a = lines[0];
    let b = lines[1];
    a = parseInt(a);
    b = parseInt(b);
    console.log(a, b);
    function prime(a){
        if(a < 2) return false;
        for(let i=2;i<Math.floor(a/2);i++){
            if(a%i === 0) return false;
        }
        return true;
    }
    let arr = [];
    for(let i=a;i<=b;i++){
        if(prime(i)){
            arr.push(i);
        }
    }
    console.log(arr);
});
