import { sum } from './foo';

test('basic', () => {
  expect(sum()).toBe(0);
});

test('basic again', () => {
  expect(sum(1, 1, 5)).toBe(8);
});

test('ok', () => {
  expect(4).toBe(5);
})