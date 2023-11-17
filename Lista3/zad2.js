function map(a, f){
    let list = []
    for (let i = 0; i < a.length; i++){
        list.push(f(a[i]))
    }
  return list  
}

function forEach(a, f){
    for (let i = 0; i < a.length; i++){
        f(a[i])
    }
}

function filter(a, f){
    let list = []
    for (let i = 0; i < a.length; i++){
        if (f(a[i])){
            list.push(a[i])
        }
    }
    return list
}

a = [1, 2, 3, 4]
console.log(map( a, _ => _ * 2 ))
forEach( a, _ => { console.log( _ ); } )
console.log(filter( a, _ => _ < 3 ))