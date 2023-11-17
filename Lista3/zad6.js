function fibiter() {
    let a = 0
    let b = 1
    return {
        next : function() {
            const val = { value: a, done: false }
            [a, b] = [b, a + b]
            return val
            }
        }
    }
function *fibgen() {
    let a = 0
    let b = 1
    while(true){
        yield a
        [a, b] = [b, a + b]
    }
}

let iterator = fibiter()
for (let i = 0; i < 10; i++){
    console.log(iterator.next().value)
}
let generator = fibiter()
for (let i = 0; i < 10; i++){
    console.log(generator.next().value)
}