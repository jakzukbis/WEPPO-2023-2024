function closure (limit){
    return function createGenerator() {
        var _state = 0;
        return {
            next : function() {
                return {
                    value : _state,
                    done : _state++ >= limit
                }
            }
        }
    }
}

var foo1 = {
    [Symbol.iterator] : closure(15)
}
for (var i of foo1)
    console.log(i)

var foo2 = {
    [Symbol.iterator] : closure(4)
}
for (var i of foo2)
    console.log(i)