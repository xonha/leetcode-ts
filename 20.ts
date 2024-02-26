// 20. Valid Parentheses

function isValid(s: string): boolean {
    const closing = {
        ")": "(",
        "]": "[",
        "}": "{",
    };
    let stack = [s[0]];
    let last = 0;

    for (let i = 1; i < s.length; i++) {
        const cur = s[i];
        if (stack.length === 0 && cur in closing) return false;
        if (stack[last] && stack[last] === closing[cur]) {
            stack.pop();
            last--;
        } else last = stack.push(s[i]) - 1;
    }
    return stack.length === 0 ? true : false;
}

console.log(isValid("(){}}{"));
console.log(isValid("()[]{}"));
