function Eratostenes(){
    let numbers = []
    for (let i = 2; i <= 100000; i++){ 
        numbers.push(i)
    }
    for (let i = 2; i * i <= 100000; i++){ 
        for (let j = 0; j < numbers.length; j++){
            if (numbers[j] % i == 0 && numbers[j] != i){
                numbers[j] = 1
            }
        }
    }
    let primes = []
    for (let i = 0; i <= 100000; i++){
        if (numbers[i] != 1){
            primes.push(numbers[i])
        }
    }
    return primes
}

console.log(Eratostenes())
