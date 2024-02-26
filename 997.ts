// 997. Find the Town Judge

// index of the judge can never appear in trust[x][a]
// index of judge on trust[x][b] should be equal to n - 1
// if more than on in the condition above, not judge

function findJudge(n: number, trust: number[][]): number {
    if (n === 1 && trust.length === 0) return n;
    const a = 0;
    const b = 1;
    let aHash: { [key: string]: number } = {};
    let bHash: { [key: string]: number } = {};
    let couldBeJudge: number[] = [];

    for (let i = 0; i < trust.length; i++) {
        const trustRel = trust[i];

        if (!(trustRel[a] in aHash)) aHash[trustRel[a]] = 0;
        if (!(trustRel[b] in bHash)) bHash[trustRel[b]] = 0;

        aHash[trustRel[a]]++;
        bHash[trustRel[b]]++;
    }

    for (let i = 1; i <= n; i++) {
        if (aHash[i]) continue;
        if (bHash[i] !== n - 1) continue;
        couldBeJudge.push(i);
    }

    if (couldBeJudge.length !== 1) return -1;

    return couldBeJudge[0];
}

console.log(findJudge(1, []));
