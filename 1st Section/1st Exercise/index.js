// Global Scope
var globalVariable = "Soy una variable global.";

function testScope() {
    // Function Scope
    var functionVariable = "Soy una variable local.";

    if (true) {
        // Block Scope
        let blockVariable = "Soy una variable de bloque.";
        console.log("Dentro del bloque:", blockVariable);
    }

    console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();