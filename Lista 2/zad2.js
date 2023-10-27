let person = {
    name: "Jan",
    // last name = "Nowak", // bez komentarza błąd, pusty znak w nazwie
    "last name" : "Nowak",
    handbook : {
        title: "Mechanika",
        author: "Landau"
    }
}

let book = {
    title: "Mechanika",
    author: "Landau"
}

console.log(person["name"])
console.log(person.name)

//console.log(person."last name") //Błąd, nie działa
console.log(person["last name"])

let nazwisko = "last name"
console.log(person.nazwisko)
console.log(person[nazwisko])

console.log(book[1])    // undefined
// console.log(person[handbook]) // Błąd, nie działa, za to działa .handbook

let tab = [0, 1, 2, "trzy", book, 125]

console.log(tab[3])
console.log(tab["3"])   // To samo, odwołanie do indeksu
console.log(tab[4])
console.log(tab["trzy"])    // undefined
console.log(tab["book"])    // undefined

console.log(tab)
tab.length = 3
console.log(tab)
tab.length = 4
console.log(tab)
console.log(tab[3]) // undefined
