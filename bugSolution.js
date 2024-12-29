function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Invalid input: Both parameters must be numbers.';
  }
  return a + b;
}

console.log(foo(1, '2')); // Output: 'Invalid input: Both parameters must be numbers.'
console.log(foo(1, 2)); // Output: 3