// 35. Search Insert Position

function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length;
    let middle = Math.floor(nums.length / 2);

    while (true) {
        if (target === nums[middle]) return middle;
        else if (target < nums[middle]) right = middle;
        else left = middle; // target > nums[middle]

        if (left + 1 === right || left === right) {
            if (target > nums[left]) return right;
            else return left;
        }

        middle = Math.floor((right + left) / 2);
    }
}

console.log(searchInsert([1], 0));
