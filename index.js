// This function takes a callback as an argument and calls it.
function receivesAFunction(callback) {
    callback();
}

// This function returns a named function.
function returnsANamedFunction() {
    function namedFunction() {
        console.log("I am a named function.");
    }
    return namedFunction;
}

// This function returns an anonymous function.
function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am an anonymous function.");
    };
}
