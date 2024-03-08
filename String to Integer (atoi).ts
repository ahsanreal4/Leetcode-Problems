function myAtoi(s: string): number {
  const VALID_CHARS = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "+",
    "-",
  ];

  const inputString = s.trim();

  let digitString = "";
  let operatorFound = false;
  let digitFound = false;
  let invalidNumber = false;

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (VALID_CHARS.includes(char)) {
      if (char == "+" || char == "-") {
        // operator is already found and found again then it is an error
        if (operatorFound) {
          invalidNumber = true;
          break;
        }
        // If digit found and then operator is found then invalid number
        if (digitFound) {
          break;
        }
        operatorFound = true;
        digitFound = false;
      }
      // If decimal found before digit is found then it is an error
      else if (char == ".") {
        if (!digitFound) {
          invalidNumber = true;
          break;
        }
        digitFound = false;
      }
      // If digit found
      else {
        digitFound = true;
        operatorFound = false;
      }

      digitString += char;
    } else {
      break;
    }
  }

  // If invalid number or no digit found then return 0
  if (invalidNumber || !digitFound) return 0;

  let number = Number(digitString);

  // If number is positive and greater then largest value of int
  if (number > 2147483647) number = 2147483647;
  // If number is negative and less then smallest value of int
  else if (number < -2147483648) number = -2147483648;

  return digitString.length == 0 ? 0 : number;
}

const TEST_CASES = [
  "42",
  "   -42",
  "4193 with words",
  "words and 987",
  "-91283472332",
  "+-12",
  ".123",
  "..123",
  "123.4",
  "123..4",
  "+",
  "00000-42a1234",
  "-5-",
];

TEST_CASES.forEach((input: string) => console.log(myAtoi(input)));
