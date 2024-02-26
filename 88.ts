/**
 Do not return anything, modify nums1 in-place instead.
 */
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//     if (n === 0) return;
//     let j = 0;

//     for (let i = 0; i < m; i++) {
//         if (nums1[i] <= nums2[0]) continue;
//         const aux = nums1[i];
//         nums1[i] = nums2[0];
//         nums2[0] = aux;

//         if (nums2[j + 1] !== undefined) {
//             while (nums2[j] > nums2[j + 1]) {
//                 const aux = nums2[j];
//                 nums2[j] = nums2[j + 1];
//                 nums2[j + 1] = aux;
//                 j++;
//             }
//             j = 0;
//         }
//     }

//     for (let i = 0; i < n; i++) {
//         if (nums2[i + 1] !== undefined && nums2[i] > nums2[i + 1]) {
//             const aux = nums2[i];
//             nums2[i] = nums2[i + 1];
//             nums2[i + 1] = aux;
//             nums1[i + m] = nums2[i];
//         } else {
//             nums1[i + m] = nums2[i];
//         }
//     }

//     console.log(nums1);
// }

// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//     let A = nums1;
//     let B = nums2;
//     let a = m - 1;
//     let b = n - 1;

//     for (let i = m + n - 1; i >= 0; i--) {
//         if (B[b] > A[a]) {
//             A[i] = B[b];
//             b--;
//         } else if (A[a] > B[b]) {
//             const aux = A[i];
//             A[i] = A[a];
//             A[a] = aux;
//             a--;
//         } else if (B[b] > A[i]) {
//             A[i] = B[b];
//             b--;
//         } else if (A[a] >= A[i]) {
//             A[i] = A[a];
//             a--;
//         } else {
//             console.log(a);
//             A[i] = B[b];
//         }
//     }
//     console.log(A);
// }

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (n === 0) return;
    if (m === 0) {
        for (let i = 0; i < m + n; i++) {
            nums1[i] = nums2[i];
        }
        return;
    }

    let a = m - 1;
    let b = n - 1;

    for (let i = m + n - 1; i >= 0; i--) {
        if (b === -1) {
            nums1[i] = nums1[a];
            a--;
            continue;
        } else if (a === -1) {
            nums1[i] = nums2[b];
            b--;
            continue;
        }

        if (nums2[b] > nums1[a]) {
            nums1[i] = nums2[b];
            b--;
        } else {
            // A[a] >= B[b]
            nums1[i] = nums1[a];
            a--;
        }
    }
    console.log(nums1);
}

console.log(merge([2, 0], 1, [1], 1));
// console.log(merge([0], 0, [1], 1));
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
// console.log(merge([1, 2, 3, 6, 0, 0, 0], 4, [2, 5, 7], 3));
