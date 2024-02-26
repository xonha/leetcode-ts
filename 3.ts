// function lengthOfLongestSubstring(s: string): number {
//     let chars = s.split("");
//     let countMap: { [key: string]: number } = {};
//     let posMap: { [key: string]: number[] } = {};
//     let curLen = 0;
//     let maxLen = 0;

//     for (let i = 0; i < chars.length; i++) {
//         let curChar = chars[i];
//         if (!(curChar in countMap)) {
//             countMap[curChar] = 0;
//             posMap[curChar] = [];
//         }
//         posMap[curChar].push(i);
//         countMap[curChar]++;

//         if (countMap[curChar] > 1) {
//             i = posMap[curChar][posMap[curChar].length - 2];
//             countMap = {};
//             if (curLen > maxLen) maxLen = curLen;
//             curLen = 0;
//         } else {
//             curLen++;
//         }
//         if (curLen > maxLen) maxLen = curLen;
//     }
//     return maxLen;
// }

function lengthOfLongestSubstring(s: string): number {
    let charSet = new Set();
    let leftPointer = 0;
    let longest = 0;

    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
        while (charSet.has(s[rightPointer])) {
            charSet.delete(s[leftPointer]);
            leftPointer++;
        }
        charSet.add(s[rightPointer]);
        longest = Math.max(longest, rightPointer - leftPointer + 1);
    }
    return longest;
}

function main() {
    console.log(lengthOfLongestSubstring("dvdf")); // 3
    console.log(lengthOfLongestSubstring("abcabcbb")); // 3
    console.log(lengthOfLongestSubstring("bbbbb")); // 1
    console.log(lengthOfLongestSubstring("pwwkew")); // 3
    console.log(lengthOfLongestSubstring("")); // 0
    console.log(lengthOfLongestSubstring(" ")); // 1
    console.log(lengthOfLongestSubstring("au")); // 2
}

main();
