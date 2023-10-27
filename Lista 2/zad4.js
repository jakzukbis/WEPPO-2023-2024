class book {
    constructor(author, title){
    this.author = author
    this.title = title
    }
}

mechanika = new book("Landau", "Mechanika")
console.log(mechanika instanceof book)
console.log(typeof(10)) // sprawdza typ argumentu