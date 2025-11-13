export function myAtoi(s: string): number {

  let result = 0;
  let negate = false;

  let index = 0;

  while (index < s.length && s[index] === " ") index++;

  if (index < s.length && (s[index] === "-" || s[index] === "+")) {
    negate = s[index] === "-";
    index++;
  }

  while (index < s.length && s[index]! >= "0" && s[index]! <= "9") {
    let num = +s[index++]!;
    result = result * 10 + num;
  }

  result = negate ? -result : result;
  result = Math.max(result, -(2 ** 31));
  result = Math.min(result, 2 ** 31 - 1);
  return result;
};