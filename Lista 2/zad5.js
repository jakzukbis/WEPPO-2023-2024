let person = {
    name: "Jan",
    surname: "Nowak",
    get pisz(){
        return this.name
    },

    set zmiana(name){
        console.log("Nie zmieniaj mi imienia!")
        this.name = "Kamil"
    }
}

person.surname
console.log(person.pisz)
person.zmiana = "Kamil"
console.log(person)