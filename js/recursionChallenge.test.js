re = require('./recursionChallenge');

// Recursion Tests
test('recursion test 1', () => {
  expect(re.factorial(8)).toBe(40320)
})

test('recursion test 2', () => {
  expect(re.factorial(18)).toBe(6402373705728000)
})

// Palindrome Tests
test('works for all lower', () => {
  expect(re.palindrome('racecar')).toBe(true);
})

test('works w/ capital letters', () => {
  expect(re.palindrome("ciVic")).toBe(true);
})

test('correctly fails (letters)', () => {
  expect(re.palindrome('nice')).toBe(false);
})

// test('works for numbers', () => {
//   expect(re.palindrome(434)).toBe(true);
// })

// test('correctly fails (numbers)', () => {
//   expect(re.palindrome(123)).toBe(false);
// })

test('challenge case 1', () => {
  expect(re.palindrome("Sore was I ere I saw Eros")).toBe(true);
})

test('roman test 1', () => {
  expect(re.romanNum(1)).toBe('I');
})

test('roman test 2', () => {
  expect(re.romanNum(4)).toBe('IV');
})

test('roman test 3', () => {
  expect(re.romanNum(948)).toBe('CMXLVIII');
})

test('roman test 4', () => {
  expect(re.romanNum(404)).toBe('CDIV');
})