// 5. Longest Palindromic Substring
// function longestPalindrome(s: string): string {
//     let chars = s.split("");

//     let longestArrChars: Array<string> = [];
//     let curArrChars: Array<string> = [];

//     let isPalindrome = false;
//     let isBiggerThanLongest = false;

//     for (let i = 0; i < chars.length; i++) {
//         for (let j = 1; j <= chars.length; j++) {
//             curArrChars = chars.slice(i, j);
//             isPalindrome =
//                 curArrChars.join("") === curArrChars.reverse().join("");
//             isBiggerThanLongest = curArrChars.length > longestArrChars.length;
//             if (isPalindrome && isBiggerThanLongest) {
//                 longestArrChars = curArrChars;
//             }
//         }
//     }

//     return longestArrChars.join("");
// }

// function isPalindrome(array: Array<string>) {
//     return array.join("") === array.reverse().join("");
// }

// function isPalindrome(array: Array<string>) {
//     for (let i = 0, j = array.length - 1; i <= j; i++, j--) {
//         if (array[i] !== array[j]) {
//             return false;
//         }
//     }
//     return true;
// }

// function longestPalindrome(s: string): string {
//     let chars = s.split("");
//     let left = 0;
//     let right = chars.length - 1;
//     let longest = "";

//     for (left; left < chars.length; left++) {
//         for (right; right >= 0; right--) {
//             const curCharArray = chars.slice(left, right + 1);
//             if (curCharArray.length > longest.length) {
//                 if (
//                     chars[left] === chars[right] &&
//                     isPalindrome(curCharArray)
//                 ) {
//                     longest = curCharArray.join("");
//                 }
//             } else {
//                 break;
//             }
//         }
//         right = chars.length - 1;
//     }
//     return longest;
// }

function longestPalindrome(s: string): string {
    if (!s.length) return "";
    if (s.length === 1) return s;
    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        let lenOdd = findAround(s, i, i);
        let lenEven = findAround(s, i, i + 1);
        let len = Math.max(lenOdd, lenEven);

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
}

function findAround(s: string, left: number, right: number): number {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }

    return right - left - 1;
}

console.log(longestPalindrome("abbabba")); // bab
console.log(longestPalindrome("babad")); // bab
console.log(longestPalindrome("cbbd")); // bb
console.log(longestPalindrome("a")); // a
console.log(
    longestPalindrome(
        "uwqrvqslistiezghcxaocjbhtktayupazvowjrgexqobeymperyxtfkchujjkeefmdngfabycqzlslocjqipkszmihaarekosdkwvsirzxpauzqgnftcuflzyqwftwdeizwjhloqwkhevfovqwyvwcrosexhflkcudycvuelvvqlbzxoajisqgwgzhioomucfmkmyaqufqggimzpvggdohgxheielsqucemxrkmmagozxhvxlwvtbbcegkvvdrgkqszgajebbobxnossfrafglxvryhvyfcibfkgpbsorqprfujfgbmbctsenvbzcvypcjubsnjrjvyznbswqawodghmigdwgijfytxbgpxreyevuprpztmjejkaqyhppchuuytkdsteroptkouuvmkvejfunmawyuezxvxlrjulzdikvhgxajohpzrshrnngesarimyopgqydcmsaciegqlpqnclpwcjqmhtmtwwtbkmtnntdllqbyyhfxsjyhugnjbebtxeljytoxvqvrxygmtogndrhlcmbmgiueliyfkkcuypvvzkomjrfhuhhnfbxeuvssvvllgukdolffukzwqaimxkngnjnmsbvwkajyxqntsqjkjqvwxnlxwjfiaofejtjcveqstqhdzgqistxwsgrovvwgorjaoosremqbzllgbgrwtqdggxnyvkivlcvnv"
    )
);
