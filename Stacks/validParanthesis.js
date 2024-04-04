const str = "({[]})";
const validParanthesis = function (str){
    let stack = [];
    for(let i=0;i<str.length;i++){
        let char = str[i];
        if(char === "(" || char === "{" || char === "]"){
            stack.push(char);
        }else if(char === ")" || char === "}" || char === "["){
            if(stack.length === 0){
                return false;
            }
        }
        const top = stack.pop();
        if(char === ")" && top != "(" || char === "]" && top != "[" || char === "}" && top != "{"){
            return false;
        }
    }
    return true;
}
console.log(validParanthesis(str));