// 27. Remove Element

function removeElement(nums: number[], val: number): number {
    let k = 0;
    let j = nums.length - 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            k++;
            continue;
        }
        if (i === j) break;
        if (nums[i] === val) {
            while (nums[j] === val) {
                j--;
                if (i === j) return k;
            }
            const aux = nums[i];
            nums[i] = nums[j];
            nums[j] = aux;
            if (nums[i] === undefined) continue;
        }
        k++;
    }
    console.log(nums);

    return k;
}

console.log(removeElement([2, 2, 3], 2));
