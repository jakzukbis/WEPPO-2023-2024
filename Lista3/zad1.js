function FibonacciRecursive(n){
    if (n < 2){
        return n
    }
    else {
        return FibonacciRecursive(n - 1) + FibonacciRecursive(n - 2)
    }
}

function Memoize(fn){
    let cache = {}
    return function(n){
        if (n in cache){
            return cache[n]
        }
        else {
            let result = fn(n)
            cache[n] = result
            return result
        }
    }
}

let FibonacciRecursiveMemo = Memoize(FibonacciRecursive)

let n = 45
let result = 0
console.time("Recursive")
result = FibonacciRecursive(n)
console.timeEnd("Recursive")

n = 45
result = 0
console.time("Memo")
result = FibonacciRecursiveMemo(n)
console.timeEnd("Memo")