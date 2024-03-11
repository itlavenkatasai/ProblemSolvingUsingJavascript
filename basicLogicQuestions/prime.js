let n = 20;
let isPrime = true;
let i = 2;
if (n <= 1) {
    isPrime =  false;
} else {
    while (i <= Math.floor(n / 2)) {
        if (n % i == 0) {
            isPrime = false;
        }
        i = i + 1;
    }
}
if (isPrime) {
    console.log(n + " is prime number");
} else {
    console.log(n + " is not prime number");
}
