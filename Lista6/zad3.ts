function map(a: Array<number>, f: (n: number) => number){
    let list = []
    for (let i = 0; i < a.length; i++){
        list.push(f(a[i]))
    }
  return list  
}

function forEach(a: Array<number>, f: (n: number) => void){
    for (let i = 0; i < a.length; i++){
        f(a[i])
    }
}

function filter(a: Array<number>, f: (n: number) => Boolean){
    let list = []
    for (let i = 0; i < a.length; i++){
        if (f(a[i])){
            list.push(a[i])
        }
    }
    return list
}

let ar: Array<number> = [1, 2, 3, 4]
console.log(map( ar, _ => _ * 2 ))
forEach( ar, _ => { console.log( _ ); } )
console.log(filter( ar, _ => _ < 3 ))