const canCrossUtil = (
  stones: number[],
  currStoneIndex: number,
  nextStoneIndex: number,
  k: number
): boolean => {
  // If reached final destination
  if (currStoneIndex == stones.length - 1) return true;

  console.log("curr => " + currStoneIndex);
  console.log("next => " + nextStoneIndex);
  console.log("k => " + k);

  const currStone = stones[currStoneIndex];
  const nextStone = stones[nextStoneIndex];

  const diff = nextStone - currStone;

  let jumpNum = 0;

  if (diff == k - 1) jumpNum = k - 1;
  else if (diff == k + 1) jumpNum = k + 1;
  else if (diff == k) jumpNum = k;

  // If it's not possible to jump to next stone we switch to the next stone
  if (jumpNum == 0) {
    // If next stone is already last than it is not possbile to move forward
    if (nextStoneIndex == stones.length - 1) return false;

    return canCrossUtil(stones, currStoneIndex, nextStoneIndex + 1, k);
  }

  // If it's possible to jump to next stone
  else {
    return canCrossUtil(
      stones,
      currStoneIndex + 1,
      nextStoneIndex + 1,
      jumpNum
    );
  }
};

function canCross(stones: number[]): boolean {
  return canCrossUtil(stones, 0, 1, 1);
}

type ITestCase = {
  input: number[];
  expected: boolean;
};

const TEST_CASES: ITestCase[] = [
  {
    input: [0, 1, 3, 5, 6, 8, 12, 17],
    expected: true,
  },
  {
    input: [0, 1, 2, 3, 4, 8, 9, 11],
    expected: false,
  },
];

TEST_CASES.forEach((test: ITestCase, index: number) => {
  const result = canCross(test.input);
  if (result == test.expected) console.log(`Test ${index + 1} Passed`);
  else {
    console.log(
      `Test ${index + 1} Failed\nOutput => ${result}\nExpected => ${
        test.expected
      }\n`
    );
  }
});
