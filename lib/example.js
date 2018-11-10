function add(a, b) {
    return a + b
}

let max2 = (a, b) => {
    if (a > b) {
        return a
    } else {
        return b
    }
}

function max3(a, b, c) {
    if (a > b) {
        if (a > c) {
            return a
        } else {
            return c
        }
    } else {
        if (b > c) {
            return b
        } else {
            return c
        }
    }
}

module.exports = {
    add,
    max3,
    max2
}