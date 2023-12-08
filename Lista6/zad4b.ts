function fun(a:number){
    a += 1
    return a
}

export default fun

export function foo(n:number){
    n -= 1
    console.log(n)
}