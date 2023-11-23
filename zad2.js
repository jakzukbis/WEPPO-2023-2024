const stdin = process.openStdin()   // Metoda obiektu process w Node.js otwierająca strumień wejścia

process.stdout.write('Jak masz na imię? ')  

stdin.addListener('data', text => { // Metoda tworzy funkcję zwrotną, która wywołuje się po podaniu danych
  const name = text.toString().trim()   // konwersja do string i usunięcie białych znaków z początku i końca
  console.log('Witaj ' + name)

  stdin.pause() // Metoda kończąca nasłuchiwanie (listening)
})