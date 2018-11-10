function add(a, b) {
    return a + b
}

let max2 = (a, b) => (a > b) ? a : b

let max3 = (a, b, c) => max2(max2(a, b), c)

module.exports = {
    add,
    max3,
    max2
}