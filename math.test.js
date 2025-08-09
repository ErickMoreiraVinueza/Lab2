const { Fibonacci, Factorial } = require('./math');

describe('fibonacci', () => {
	test('fibonacci(0) debe ser 0', () => {
		expect(Fibonacci(0)).toBe(0);
	});
	test('fibonacci(1) debe ser 1', () => {
		expect(Fibonacci(1)).toBe(1);
	});
	test('fibonacci(5) debe ser 5', () => {
		expect(Fibonacci(5)).toBe(5);
	});
	test('fibonacci(7) debe ser 13', () => {
		expect(Fibonacci(7)).toBe(13);
	});
});

describe('factorial', () => {
	test('factorial(0) debe ser 1', () => {
		expect(Factorial(0)).toBe(1);
	});
	test('factorial(1) debe ser 1', () => {
		expect(Factorial(1)).toBe(1);
	});
	test('factorial(5) debe ser 120', () => {
		expect(Factorial(5)).toBe(120);
	});
	test('factorial(7) debe ser 5040', () => {
		expect(Factorial(7)).toBe(5040);
	});
});
