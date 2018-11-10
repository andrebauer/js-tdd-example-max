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
})