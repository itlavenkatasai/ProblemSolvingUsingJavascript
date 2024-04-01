function rangeOfNumbers(start, end) {
    if(end < start){
        return [];
    }else{
        const numbers = rangeOfNumbers(start,end-1);
        numbers.push(end);
        return numbers;
    }
}

const output = rangeOfNumbers(0, 5);

console.log(output);

