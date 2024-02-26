// 26. Remove Duplicates from Sorted Array

// function removeDuplicates(nums: number[]): number {
//     let hash: { [key: string]: number } = {};

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] in hash) {
//             nums.splice(i, 1);
//             i--;
//         }
//         hash[nums[i]] = 1;
//     }

//     return nums.length;
// }

function removeDuplicates(nums: number[]): number {
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
