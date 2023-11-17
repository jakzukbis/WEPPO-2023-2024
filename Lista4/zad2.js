var p = {
    name: 'jan'
    }
var q = {
    surname: 'kowalski'
    }
Object.setPrototypeOf( p, q );
console.log( p.name );
console.log( p.surname );
    
console.log( q.name );
console.log( q.surname );

function check(obj, trait){
    return obj[trait] != undefined
}

console.log(check(p, 'name'))

function WypiszWlasne(p){
    for (let trait in p){
        if (p.hasOwnProperty(trait)){
            console.log(trait)
        }
    }
}
WypiszWlasne(q)

function WypiszWszystkie(p){
    for (let trait in p){
        console.log(trait)    
    }
}
WypiszWszystkie(p)