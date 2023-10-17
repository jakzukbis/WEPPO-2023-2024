function FibonacciRecursive(n){
    if (n < 2){
        return n
    }
    else {
        return FibonacciRecursive(n - 1) + FibonacciRecursive(n - 2)
    }
}

function FibonacciIterative(n){
    let arr = [0, 1]
    for (let i = 2; i <= n; i++){
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[n]
}

let n = 40
let result = 0
console.time("Recursive")
result = FibonacciRecursive(n)
console.timeEnd("Recursive")

console.time("Iterative")
result = FibonacciIterative(n)
console.timeEnd("Iterative")

console.log(result)

