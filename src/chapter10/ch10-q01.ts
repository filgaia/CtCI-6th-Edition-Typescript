export function merge(A: any, B: any) {
  for (let aIndex = 0; aIndex < A.length && B.length > 0; aIndex++) {
    if (A[aIndex] > B[0]) {
      A.splice(aIndex, 0, B.shift());
      A.pop();
    }
  }
  return A;
}
