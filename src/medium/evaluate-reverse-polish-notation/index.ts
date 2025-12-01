export function evalRPN(tokens: string[]): number {

  const stack: number[] = [];

  for (const s of tokens) {

    switch (s) {
      case "+":
        var last = stack.pop()!;
        var first = stack.pop()!;
        stack.push(first + last);
        break;
      case "-":
        var last = stack.pop()!;
        var first = stack.pop()!;
        stack.push(first - last);
        break;
      case "*":
        var last = stack.pop()!;
        var first = stack.pop()!;
        stack.push(first * last);
        break;
      case "/":
        var last = stack.pop()!;
        var first = stack.pop()!;
        let result = first / last;
        if (result < 0) {
          stack.push(Math.ceil(result));
        }
        else {
          stack.push(Math.floor(result));
        }
        break;
      default:
        let value = +s;
        stack.push(value);
        break;
    }
  }
  return stack.pop()!;
};