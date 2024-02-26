// 9. Palindrome Number

// function isPalindrome(x: number): boolean {
//     if (x < 0) return false;
//     if (x < 10) return true;

//     let xStr = x.toString();

//     for (let l = 0, r = xStr.length - 1; l < xStr.length; l++, r--) {
//         if (xStr[l] !== xStr[r]) return false;
//     }
//     return true;
// }

function getSizeOfNumber(num: number) {
    for (let i = 1; i < 11; i++) {
        const val = num % 10 ** i;
        if (num === val) return i;
    }
    return 1;
}

// function isPalindrome(x: number): boolean {
//     if (x < 0) return false;
//     if (x < 10) return true;

//     let xSize = getSizeOfNumber(x);

//     for (let i = 1; i <= xSize / 2; i++) {
//         const rest = x % 10 ** i;
//         const y = Math.floor(x / 10 ** i);
//         const z = rest * 10 ** (xSize - i - 1);
//         const reversed = y - z;
//         let right = (xSize - 2 * i) / 2;
//         if (getSizeOfNumber(reversed) === xSize - 2 * i) return false;
//         if (reversed < 0) return false;
//         if (xSize % 2 === 1 && reversed < 10 ** i) return true;
//         else if (reversed === 0) return true;
//     }

//     return false;
// }

function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    if (x < 10) return true;

    let temp = x;
    let current = 0;
    let reversed = 0;

    let xSize = getSizeOfNumber(x); // 3

    for (let i = xSize - 1, j = 0; i >= 0; i--, j++) {
        current = Math.floor(temp / 10 ** i);
        reversed += current * 10 ** j;
    }

    if (reversed === x) return true;

    return false;
}

console.log(isPalindrome(121));
console.log(isPalindrome(1000021));

console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(232));
