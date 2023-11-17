function createFs(n) { // tworzy tablicę n funkcji
    var fs = []; // i-ta funkcja z tablicy ma zwrócić i
    for ( let i=0; i<n; i++ ) {
        fs[i] =
            function() {
                return i;
            };
    };
    return fs;
}
var myfs = createFs(10);
console.log( myfs[0]() ); // zerowa funkcja miała zwrócić 0
console.log( myfs[2]() ); // druga miała zwrócić 2
console.log( myfs[7]() );
// 10 10 10 // ale wszystkie zwracają 10!?

// Problem leży w zasięgu "var", "let" ma zasięg blokowy, więc "wygasa" po wyjściu z pętli. 
// "var" nadal "żyje", zatem ostatnia wartość 10 pozostaje i każda z funkcji odwołuje się do tego samego "i" 
// "let" jest deklaracją znaną z innych języków programowania i "umiera" po wyjściu z pętli, zapisane wartości to faktycznie te pożądane

function createFs(n) {
    var fs = [];
    for (var i = 0; i < n; i++) {
      fs[i] = (function (index) {
        return function () {
          return index;
        };
      })(i);
    }
    return fs;
  }
  
  var myfs = createFs(10);
  console.log(myfs[0]()); // 0
  console.log(myfs[2]()); // 2
  console.log(myfs[7]()); // 7
// Tutaj skorzystałem z IIFE, pytanie o zalety tego podejścia?
