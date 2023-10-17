function Division(number, digits){
    for (let i of digits){
        if (number % i != 0){
            return 0
        }
    }
    if (number % Sum(number, digits) == 0){
        return 1
    }
    else{
        return 0
    }
}

function Sum(number, digits){
    let sum = 0
    for (let i of digits){
        sum = sum + i
    }
    return sum
}

function Numbers(){
    let arr = []
    for (let i = 1; i <= 100000; i++){
        let digits = String(i)
        if (Division(i, digits) == 1){
            arr.push(i)
        }
    }
    return arr
}

console.log(Numbers())
