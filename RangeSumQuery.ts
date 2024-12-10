class NumArray {
  private cumulativeSums: number[];
  private nums: number[];

  constructor(nums: number[]) {
    this.cumulativeSums = new Array(nums.length).fill(0);
    this.nums = nums;

    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      this.cumulativeSums[i] = sum;
    }
  }

  sumRange(left: number, right: number): number {
    if (left === right) return this.nums[right];

    if (left === 0) return this.cumulativeSums[right];

    return this.cumulativeSums[right] - this.cumulativeSums[left - 1];
  }
}
