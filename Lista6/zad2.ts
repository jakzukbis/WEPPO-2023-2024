function FibonacciRecursive(n: number): number {
    if (n < 2) {
        return n;
    } else {
        return FibonacciRecursive(n - 1) + FibonacciRecursive(n - 2);
    }
}

function Memoize(fn: (n: number) => number): (n: number) => number {
    let cache:Array<number> = [];

    return function (n: number): number {
        if (n in cache) {
            return cache[n];
        } else {
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    };
}


let MemoizedFibonacci = Memoize(FibonacciRecursive);


let result = MemoizedFibonacci(35);
console.log(result); 
