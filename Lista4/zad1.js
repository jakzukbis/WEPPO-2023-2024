function getLastProto(o) {
    var p = o
    do {
    o = p
    p = Object.getPrototypeOf(o)
    } while (p)
    return o
   }

let obj1 = {name: "first"}
let obj2 = {}
let obj3 = {}

Object.setPrototypeOf(obj2, obj1)
console.log(Object.getPrototypeOf(obj2))

console.log(getLastProto(obj1))
console.log(getLastProto(obj2))
console.log(getLastProto(obj3))

console.log(getLastProto(obj1) == getLastProto(obj2))
console.log(getLastProto(obj1) == getLastProto(obj3))
console.log(getLastProto(obj2) == getLastProto(obj3))