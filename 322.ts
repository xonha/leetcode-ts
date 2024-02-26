// 322. Coin Change

function coinChange(coins: number[], amount: number): number {
    let dp: number[] = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

// console.log(coinChange([416, 157, 454, 343], 1761));
// console.log(coinChange([1, 2, 5], 100));
// console.log(coinChange([1, 2, 5], 11));
// console.log(coinChange([2], 3));
console.log(coinChange([186, 419, 83, 408], 6249));
// console.log(coinChange([2], 3));
