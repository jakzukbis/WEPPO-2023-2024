function Foo(){
    function Qux(){
        console.log("Qux")
    }
    this.Bar = function(){
        console.log("FooBar")
        Qux()
    }
}
let example = new Foo()
example.Bar()
// example.Qux() 
