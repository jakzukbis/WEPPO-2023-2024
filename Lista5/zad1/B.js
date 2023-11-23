module.exports = {funb}

let a = require('./A')

function funb(n){
    console.log(`b: ${n}`)
    return a.funa(n-1)
}