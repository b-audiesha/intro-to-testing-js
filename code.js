// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}


function sayHello(name) {
    if (typeof name === 'string'
        && name.length > 0
        && isNaN(Number(name))
    ) {
        return "Hello, " + name + "!";
    } else {
        return "Hello, World!";
    }
}
function isFive(x) {
    return x == 5;
}