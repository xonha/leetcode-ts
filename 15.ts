// 15. 3Sum

function twoSum(nums: number[], target: number): number[] {
    const numIndicesMap: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (complement in numIndicesMap) return [numIndicesMap[complement], i];

        numIndicesMap[nums[i]] = i;
    }
    return []; // List of indexes that summed equals to complement
}

function threeSum(nums: number[]): number[][] {
    const TARGET = 0;

    let result: number[][] = [];

    for (let i = 0; i < nums.length; i++) {
        const complement = TARGET - nums[i];
        let copyOfNums = [...nums];
        copyOfNums.splice(i, 1);

        while (true) {
            let [j, k] = twoSum(copyOfNums, complement);
            if (!(j || k)) break;
            if (k > j) {
                copyOfNums.splice(k, 1);
                copyOfNums.splice(j, 1);
            } else {
                copyOfNums.splice(j, 1);
                copyOfNums.splice(k, 1);
            }

            if (j >= i) j++;
            if (k >= i) k++;

            if (nums[i] + nums[j] + nums[k] === 0) {
                const sortedResult = [nums[i], nums[j], nums[k]].sort();
                if (result.length === 0) result.push(sortedResult);
                const sortedResultStr = sortedResult.toString();

                let shouldPush = true;
                for (let item of result) {
                    if (item.toString() === sortedResultStr) shouldPush = false;
                }
                if (shouldPush) result.push(sortedResult);
            }
        }
    }

    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
// console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
