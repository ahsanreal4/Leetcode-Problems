function findMaxLength(nums: number[]): number {
  const map: Map<number, number> = new Map();

  let sum = 0;
  let longestSubArray = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 0 ? -1 : 1;

    // If sum is 0, we have the longest subarray up to this point
    if (sum === 0) {
      longestSubArray = Math.max(longestSubArray, i + 1);
    }
    // If the sum is seen before, calculate the length of the subarray
    else if (map.has(sum)) {
      const prevIndex = map.get(sum)!; // The `!` asserts that `map.get(sum)` is not undefined
      const currIndex = i;

      const diff = currIndex - prevIndex;

      longestSubArray = Math.max(longestSubArray, diff);
    } else {
      map.set(sum, i);
    }
  }

  return longestSubArray;
}

console.log(findMaxLength([0, 1]));
