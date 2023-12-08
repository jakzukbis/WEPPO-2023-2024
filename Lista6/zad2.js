function FibonacciRecursive(n) {
    if (n < 2) {
        return n;
    }
    else {
        return FibonacciRecursive(n - 1) + FibonacciRecursive(n - 2);
    }
}
function Memoize(fn) {
    var cache = [];
    return function (n) {
        if (n in cache) {
            return cache[n];
        }
        else {
            var result_1 = fn(n);
            cache[n] = result_1;
            return result_1;
        }
    };
}
// Użycie funkcji Memoize dla FibonacciRecursive
var MemoizedFibonacci = Memoize(FibonacciRecursive);
// Przykład użycia
var result = MemoizedFibonacci(10);
console.log(result); // Wyświetli wynik dla n = 10
