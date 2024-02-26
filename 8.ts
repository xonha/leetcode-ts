// 8. String to Integer (atoi)

function myAtoi(s: string): number {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const signs = ["-", "+"];
    const upper = Math.pow(2, 31) - 1;
    const lower = upper * -1 - 1;
    s = s.trim();
    let str = "";

    if (signs.includes(s[0])) {
        str += s[0];
        s = s.slice(1, s.length);
    }

    for (let char of s) {
        if (char in numbers) str += char;
        else break;
    }

    let num = Number(str);

    if (num > upper) return upper;
    if (num < lower) return lower;

    if (str.length === 1 && !(str[0] in numbers)) return 0;

    return num;
}

console.log(myAtoi("words and 987"));
console.log(myAtoi("   -42"));
console.log(myAtoi("42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("0032"));
