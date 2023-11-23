module.exports = {funa}

let b = require('./B')

function funa(n){
    if (n > 0){
        console.log(`a: ${n}`)
        return b.funb(n - 1)
    }    
}