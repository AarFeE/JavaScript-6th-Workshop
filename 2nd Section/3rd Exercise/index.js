function createAggregator(firstNum) {
    return function finishAddition(secNum) {
        return secNum + firstNum;
    }
}

let addFive = createAggregator(5)
console.log(addFive(3))


/* How do functions mantain access to external variables even after the external function has finished its execution?:

This is because the functions hold a reference of their lexical environment (function closure) when they were created,
allowing them to still have access to it even after the external function is done with its execution. */


/* Which are the memory implications of using these closures, especially when there's many instances of functions with closure?:

Keeping in mind that functions mantain a reference of their lexical environment we can expect increased memory usage if we
use multiple instances of functions with closures, even memory leaks of objects that we don't need anymore after certain point
but that still existing because of their saved reference in a closure. All of this not only affecting memory usage, but also
the performance of our applications. */