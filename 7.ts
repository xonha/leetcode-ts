// 7. Reverse Integer

function reverse(x: number): number {
    let leftBound = -(2 ** 31);
    let rightBound = 2 ** 31 - 1;
    let result = 0;

    if (x < 0) {
        x *= -1;
        result = -1 * Number(x.toString().split("").reverse().join(""));
    } else {
        result = Number(x.toString().split("").reverse().join(""));
    }

    if (result > rightBound || result < leftBound) return 0;

    return result;
}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
