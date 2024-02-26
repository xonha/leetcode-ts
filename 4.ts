function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const total = nums1.length + nums2.length;
    const half = Math.floor(total / 2);

    let A = nums1;
    let B = nums2;

    if (B.length < A.length) {
        A = nums2;
        B = nums1;
    }

    let l = 0;
    let r = A.length;
    while (true) {
        let i = Math.floor((l + r) / 2);
        let j = half - i - 2;

        let ALeft = i >= 0 ? A[i] : Number.MIN_SAFE_INTEGER;
        let ARight = i + 1 < A.length ? A[i + 1] : Number.MAX_SAFE_INTEGER;
        let BLeft = j >= 0 ? B[j] : Number.MIN_SAFE_INTEGER;
        let BRight = j + 1 < B.length ? B[j + 1] : Number.MAX_SAFE_INTEGER;

        if (ALeft <= BRight && BLeft <= ARight) {
            if (total % 2) {
                return Math.min(BRight, ARight);
            }
            return (Math.max(BLeft, ALeft) + Math.min(ARight, BRight)) / 2;
        } else if (ALeft > BRight) {
            r = i - 1;
        } else {
            l = i + 1;
        }
    }
}

let res = findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5]);
console.log(res);
