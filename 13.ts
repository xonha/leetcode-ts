// 13. Roman to Integer

function romanToInt(s: string): number {
    let result = 0;
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    for (let i = 0; i < s.length; i++) {
        if (romanMap[s[i + 1]] && romanMap[s[i]] < romanMap[s[i + 1]]) {
            result += romanMap[s[i + 1]] - romanMap[s[i]];
            i++;
        } else result += romanMap[s[i]];
    }
    return result;
}

console.log(romanToInt("III"));
console.log(romanToInt("MCMXCIV"));
