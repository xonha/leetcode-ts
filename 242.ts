// function isAnagram(s: string, t: string): boolean {
//     return s.split("").sort().join("") === t.split("").sort().join("");
// }

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    let sMap: { [key: string]: number } = {};
    let tMap: { [key: string]: number } = {};

    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in sMap)) sMap[s[i]] = 0;
        if (!(t[i] in tMap)) tMap[t[i]] = 0;

        sMap[s[i]]++;
        tMap[t[i]]++;
    }

    for (let char in sMap) {
        if (sMap[char] !== tMap[char]) return false;
    }

    return true;
}

console.log(isAnagram("anagram", "nagaram"));
