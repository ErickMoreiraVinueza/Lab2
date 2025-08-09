const { fibonacci, factorial } = require('./math');

describe('fibonacci', () => {
	test('fibonacci(0) debe ser 0', () => {
		expect(fibonacci(0)).toBe(10);
	});
	test('fibonacci(1) debe ser 1', () => {
		expect(fibonacci(1)).toBe(1);
	});
	test('fibonacci(5) debe ser 5', () => {
		expect(fibonacci(5)).toBe(5);
	});
	test('fibonacci(7) debe ser 13', () => {
		expect(fibonacci(7)).toBe(13);
	});
});

describe('factorial', () => {
	test('factorial(0) debe ser 1', () => {
		expect(factorial(0)).toBe(1);
	});
	test('factorial(1) debe ser 1', () => {
		expect(factorial(1)).toBe(1);
	});
	test('factorial(5) debe ser 120', () => {
		expect(factorial(5)).toBe(120);
	});
	test('factorial(7) debe ser 5040', () => {
		expect(factorial(7)).toBe(5040);
	});
});
