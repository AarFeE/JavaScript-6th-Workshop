const test1 = {
    accum: 0
}
const test2 = {
    accum: 0
}

function suma(num1, num2) {
    num1.accum++
    num2.accum++
}

suma(test1, test2)
console.log(test1, test2)

suma(test1, test2)
console.log(test1, test2)

suma(test1, test2)
console.log(test1, test2)