function validParanthesis(str){
    str = str.split("");
    let obj = {
    '}' : '{',
    ']' : '[',
    ')' : '('
    }
    let arr = [];
    for(let i=0;i<str.length;i++){
        if(str[i] == '(' || str[i] == '{' || str[i] == '['){
            arr.push(str[i]);
        }else{
            if(arr.pop() != obj[str[i]]){
                return false;
            }
        }
    }
    return arr.length === 0;
}
console.log(validParanthesis("(({{}})"));