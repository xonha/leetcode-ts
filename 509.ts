// 509. Fibonacci Number

const values: number[] = [];

function fib(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;

    if (values[n]) return values[n];

    values[n] = fib(n - 1) + fib(n - 2);

    return values[n];
}

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(10));
