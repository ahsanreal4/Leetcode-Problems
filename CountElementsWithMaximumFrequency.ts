function maxFrequencyElements(nums: number[]): number {
  const hashMap = new Map();

  let maximumFrequency = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const count = hashMap.get(num);

    // If num exists
    if (typeof count == "number") {
      if (count + 1 > maximumFrequency) {
        maximumFrequency = count + 1;
      }
      hashMap.set(num, count + 1);
    }

    // If it doesn't
    else {
      hashMap.set(num, 1);
    }
  }

  maximumFrequency = maximumFrequency == 0 ? 1 : maximumFrequency;

  let maxCount = 0;

  hashMap.forEach((value: string) => {
    if (value == maximumFrequency.toString()) {
      maxCount += 1;
    }
  });

  return maximumFrequency * maxCount;
}

console.log(maxFrequencyElements([1, 2, 3, 4, 5]));
