const map = new Map();
map.set("I", 1);
map.set("V", 5);
map.set("X", 10);
map.set("L", 50);
map.set("C", 100);
map.set("D", 500);
map.set("M", 1000);
map.set("IV", 4);
map.set("IX", 9);
map.set("XL", 40);
map.set("XC", 90);
map.set("CD", 400);
map.set("CM", 900);

function combineWithNextCharacter(current: string, next: string): number {
  const combine = current + next;

  return map.get(combine) ?? -1;
}

function romanToInt(s: string): number {
  let result = 0;
  let nextCharSkip = false;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (nextCharSkip) {
      nextCharSkip = false;
      continue;
    }

    // On last character
    if (i == s.length - 1) {
      result += map.get(char);
      break;
    }

    const output = combineWithNextCharacter(char, s[i + 1]);

    // If it is not combined with next character
    if (output == -1) {
      result += map.get(char);
    }
    // If it is combined
    else {
      nextCharSkip = true;
      result += output;
    }
  }

  return result;
}

const TEST_CASES = ["III", "LVIII", "MCMXCIV"];

TEST_CASES.forEach((test: string) => console.log(romanToInt(test)));
