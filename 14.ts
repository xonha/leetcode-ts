// 14. Longest Common Prefix

function longestCommonPrefix(strs: string[]): string {
    let result = "";
    let baseStr = strs[0];

    for (let i = 0; i < baseStr.length; i++) {
        for (let str of strs) {
            if (str[i] !== baseStr[i]) return result;
        }

        result += baseStr[i];
    }

    return result;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
