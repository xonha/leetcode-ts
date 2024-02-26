function twoSum(nums: number[], target: number): number[] {
    const numIndicesMap: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (complement in numIndicesMap) return [numIndicesMap[complement], i];

        numIndicesMap[nums[i]] = i;
    }
    return [];
}

console.log(twoSum([1, 3, 1, 2], 3));
