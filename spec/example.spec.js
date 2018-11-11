const jsc = require("jsverify");

describe('example', () => {
    const example = require('../lib/example')

    describe('add', () => {
        it('should return the sum of two given numbers.', () => {
            expect(example.add(3, 4)).toEqual(7)
            expect(example.add(-2, 5)).toEqual(3)
            expect(example.add(-4, -19)).toEqual(-23)
            expect(example.add(0, 4)).toEqual(4)
            expect(example.add(-5, 0)).toEqual(-5)
        })
    })

    describe('max3', () => {
        it('should be defined.', () => {
            expect(example.max3).toBeDefined()
        })

        it('should return the maximum of three numbers.', () => {
            expect(example.max3(3, 2, 1)).toEqual(3)
            expect(example.max3(3, 4, 5)).toEqual(5)
            expect(example.max3(-3, -1, -5)).toEqual(-1)
            expect(example.max3(-12, 0, 5)).toEqual(5)
            expect(example.max3(0, -1, -2)).toEqual(0)
        })
    })

    describe('max2', () => {
        it('should be defined', () => {
            expect(example.max2).toBeDefined()
        })

        it('should return the maximum of two numbers.', () => {
            expect(example.max2(0, 1)).toEqual(1)
            expect(example.max2(1, 0)).toEqual(1)
            expect(example.max2(-3, -7)).toEqual(-3)
            expect(example.max2(-5, 3)).toEqual(3)
            expect(example.max2(6, 12)).toEqual(12)
            jsc.assert(
                jsc.forall(jsc.number, jsc.number, (a, b) => {
                    return example.max2(a, b) === example.max2(b, a)
                }));
            jsc.assert(
                jsc.forall(jsc.number, a => {
                    return example.max2(a, a) === a
                }))
            jsc.assert(
                jsc.forall(jsc.number, jsc.nat, (a, b) => {
                    return example.max2(a + b, a) === a + b
                }))
        })
    })
})