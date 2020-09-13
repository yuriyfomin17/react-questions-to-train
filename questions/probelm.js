function wrap (execute) {
    try {
        execute()
    } catch(e) {
        if (e instanceof Error) {

            return null
        }
    }

    return execute()
}

var errorExec = wrap(function () {
    throw new Error('Error');
});
var resultExec = wrap(function () {
    return "Result";
});
debugger
console.log(errorExec && errorExec()); // Should output null
console.log(errorExec && resultExec()); // Should output "Result"