function createIntegers(range, multipleOf) {
  const integers = [];

  for (let i = multipleOf; i <= range * multipleOf; i += multipleOf) {
    integers.push(i);
  }

  return integers;
}

export { createIntegers };