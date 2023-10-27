console.log( (![]+[])[+[]] +    // f
(![]+[])[+!+[]] +               // a
([![]]+[][[]])[+!+[]+[+[]]] +   // i
(![]+[])[!+[]+!+[]]             // l
);   //fail
console.log([]) // []
console.log(![])    //false
console.log([] + [])    // Nic
console.log(![] + [])   //false (false + [] - pusta tablica)
console.log([+[]])  // [ 0 ]
console.log((![]+[])[+[]])  //f - pierwszy człon to słowo 'false', drugi odnosi się do indeksu 0 - 'f'
console.log([+!+[]])    // [1] - odnośnik do indeksu, stąd 'a' poniżej
console.log((![]+[])[+!+[]])    // a
console.log([![]]+[][[]])   // falseundefined jako 'false' + 'undefined'
console.log(+!+[])  // 1
console.log([+[]])  // [ 0 ]
console.log(+!+[]+[+[]])    // dodawanie na number, bez zmian
console.log([+!+[]+[+[]]])  // [ '10' ] tutaj dodane '0'
console.log(![]+[]) // podobnie jak wcześniej - false
console.log([!+[]+!+[]])    // [ 2 ] jako [1 + 1]

// całość oparta na:
console.log(!+[])  // true
console.log(+!+[])  // 1
console.log(![])  // false
console.log(+![])  // 0



