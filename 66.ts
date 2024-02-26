// 66. Plus One
function plusOne(digits: number[]): number[] {
    let plusOne = true;

    for (let i = digits.length - 1; i >= 0; i--) {
        if (plusOne) digits[i] += 1;
        if (digits[i] === 10) {
            digits[i] = 0;
            plusOne = true;
        } else plusOne = false;
    }

    if (plusOne) {
        // digits[0] = 0;
        // digits.unshift(1);
        for (let i = digits.length; i > 0; i--) {
            digits[i] = digits[i - 1];
        }
        digits[0] = 1;
        digits[1] = 0;
    }

    return digits;
}
