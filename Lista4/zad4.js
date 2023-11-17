var n = 1;
// liczba ma prototyp?
console.log( typeof Object.getPrototypeOf( n ) );   // tymczasowo powstaje obiekt "na żądanie"
// można jej dopisać pole/funkcję?
n.foo = 'foo';
console.log( n.foo );   // tutaj już obiektu nie ma, stąd undefined