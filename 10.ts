// 11. Container With Most Water

// function maxArea(height: number[]): number {
//     let volume = 0;

//     for (let i = 0; i < height.length; i++) {
//         for (let j = 1; j < height.length; j++) {
//             const x = j - i;
//             const y = Math.min(height[i], height[j]);
//             const curVolume = x * y;
//             if (curVolume > volume) {
//                 volume = curVolume;
//             }
//         }
//     }

//     return volume;
// }

// function maxArea(height: number[]): number {
//     let biggestHeightIndex = height.length - 1;
//     let area = 0;
//     let biggestHeight = 0;

//     for (let index = 0; index < height.length; index++) {
//         if (index === biggestHeightIndex) continue;
//         const x = Math.abs(biggestHeightIndex - index);
//         const y = Math.min(height[index], height[biggestHeightIndex]);
//         const curArea = x * y;
//         if (curArea > area) area = curArea;

//         if (height[index] > height[biggestHeightIndex]) {
//             biggestHeight = height[index];
//             biggestHeightIndex = index;
//             index = -1;
//         }
//     }

//     return area;
// }

function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let area = 0;

    while (true) {
        const x = right - left;
        const y = Math.min(height[left], height[right]);
        const curArea = x * y;
        if (curArea > area) area = curArea;

        if (height[left] > height[right]) right--;
        else left++;

        if (left === right) return area;
    }
}

console.log(maxArea([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(maxArea([1, 2, 4, 3]));
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
