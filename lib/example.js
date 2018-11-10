function add(a, b) {
    return a + b
}

let max2 = (a, b) => (a > b) ? a : b

let max3 = (a, b, c) => {
    let d = max2(a, b)
    return max2(d, c)
}

module.exports = {
    add,
    max3,
    max2
}