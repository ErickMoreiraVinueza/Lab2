// Calcula el n-ésimo número de Fibonacci
function fibonacci(n) {
	if (n <= 1) return n;
	return fibonacci(n - 1) + fibonacci(n - 2);
}

// Calcula el factorial de un número
function factorial(n) {
	if (n <= 1) return 1;
	return n * factorial(n - 1);
}
