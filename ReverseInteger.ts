const reverseString = (str): string => {
  var splitString = str.split("");

  var reverseArray = splitString.reverse();

  var joinArray = reverseArray.join("");

  return joinArray;
};

function reverse(x: number): number {
  const MAX_VALUE = Math.pow(2, 31) - 1;
  const MIN_VALUE = -Math.pow(2, 31);

  const numString = x.toString();

  const reversedString = reverseString(
    numString[0] == "-" ? numString.slice(1, numString.length) : numString
  );

  const resultNumber = Number(
    numString[0] == "-" ? numString[0] + reversedString : reversedString
  );

  return resultNumber >= MIN_VALUE && resultNumber <= MAX_VALUE
    ? resultNumber
    : 0;
}

type ITestCase = {
  x: number;
  expected: number;
};

const TEST_CASES: ITestCase[] = [
  {
    x: 123,
    expected: 321,
  },
  {
    x: -123,
    expected: -321,
  },
  {
    x: 120,
    expected: 21,
  },
];

TEST_CASES.forEach((test: ITestCase, index: number) => {
  const result = reverse(test.x);
  if (result == test.expected) console.log(`Test ${index + 1} Passed`);
  else {
    console.log(
      `Test ${index + 1} Failed\nOutput => ${result}\nExpected => ${
        test.expected
      }\n`
    );
  }
});
