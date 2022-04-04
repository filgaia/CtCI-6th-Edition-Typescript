/**
 * Sort the stack by taking one item off the input stack at a time, find the
 * right place within the processed items in the temp stack to insert it into.
 * Insertion is done by holding the next value aside and moving the temp stack
 * values into the input stack until the right spot is found.
 *
 * N = |stack|
 * Time: O(N^2)
 * Additional space: O(1) - while there are 2 stacks there are only a fixed
 * number of items.
 */
export function sortStack(stack: any) {
  const temp = [];
  temp.push(stack.pop());
  while (!isEmpty(stack)) {
    const curr = stack.pop();
    let count = 0;

    while (!isEmpty(temp) && curr < peek(temp)) {
      stack.push(temp.pop());
      ++count;
    }
    temp.push(curr);
    for (let i = 0; i < count; ++i) {
      temp.push(stack.pop());
    }
  }

  while (!isEmpty(temp)) {
    stack.push(temp.pop());
  }

  return stack;
}

function peek(stack: any) {
  return stack[stack.length - 1];
}

function isEmpty(stack: any) {
  return stack.length === 0;
}
