// function abc(){
//     console.log(abc.xyz);
// }
// abc();
// abc.xyz = 10;
// abc.xyz = 20;
// abc();
// const numbers = [1,2,3,4];
// numbers[100] = 500;
// console.log(numbers);
// console.log(typeof 100);

// const arr = [...'sai'];
// console.log(arr);
// console.log(parseInt("2+2+3+#"));
// console.log(parseInt("72FM"));
// console.log(parseInt("M2F"))
// console.log([1,2].map((num) => {
//     if(num > 0) return;
//     return num*2;
// }))
// function abc(){
//     console.log("hello");
    
// }
// abc();
// console.log(abc());

function validParanthesis(str){
    str = str.split("");
    let arr = [];
    let obj = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    }
    
    for(let i=0;i<Math.floor(str.length/2);i++){
        if(obj[str[i]] == str.pop()){
            str.pop();
        }else{
            if(obj[str[i]] == arr.pop()){
                arr.pop();
            }else{
                
            }
        }
    }

}
console.log(validParanthesis("()[]{}"));