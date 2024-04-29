console.log(
    "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
);
try {
    console.log(funcionDeclarada());
} catch (error) {
    console.log("Error:", error.message);
}

console.log(
    "Intentando llamar a 'funcionExpresada' antes de su declaración:"
);
try {
    console.log(funcionExpresada());
} catch (error) {
    console.log("Error:", error.message);
}

// Declaración de una función declarada
function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
}

// Declaración de una función expresada
const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());


/* What happened when you tried to call the functions before their declaration?:

The declared function was executed, but not the expressed one. */


/* How do the results differ from the declared function and the expressed one?:

While the declared function became hoisted, allowing it to be called since the very
beginning of the code, the expressed one isn't allowed to be called before the code
reaches its initialization. */


/* What does this tell us about how Javascript handles these two different function declarations?

In a nutshell, that declared functions become hoisted allowing them to be used since the
first line of our code, whereas expressed functions can't. */