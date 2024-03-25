function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const combinedArray = [...nums1, ...nums2];
  combinedArray.sort((a: number, b: number) => a - b);

  // If array length is odd
  if (combinedArray.length % 2 != 0) {
    return combinedArray[parseInt((combinedArray.length / 2).toString())];
  }

  // If array length is even
  else {
    const mid1 = combinedArray[parseInt((combinedArray.length / 2).toString())];
    const mid2 =
      combinedArray[parseInt((combinedArray.length / 2 - 1).toString())];

    return (mid1 + mid2) / 2;
  }
}

type ITestCase = {
  nums1: number[];
  nums2: number[];
  expected: number;
};

const TEST_CASES: ITestCase[] = [
  {
    nums1: [1, 3],
    nums2: [2],
    expected: 2,
  },
  {
    nums1: [1, 2],
    nums2: [3, 4],
    expected: 2.5,
  },
  {
    nums1: [0, 0],
    nums2: [0, 0],
    expected: 0,
  },
];

TEST_CASES.forEach((test: ITestCase, index: number) => {
  const result = findMedianSortedArrays(test.nums1, test.nums2);
  if (result == test.expected) console.log(`Test ${index + 1} Passed`);
  else {
    console.log(
      `Test ${index + 1} Failed\nOutput => ${result}\nExpected => ${
        test.expected
      }\n`
    );
  }
});
