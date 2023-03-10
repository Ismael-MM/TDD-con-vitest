import { describe, expect, it } from 'vitest'

const fizz = (number) =>{
    if(typeof number != 'number') throw new Error('Mensaje de error');
    if(Number.isNaN(number)) throw new Error('Mensaje de error');

    if(number % 3 == 0 && number % 5 == 0) return 'fizzbuzz'
    if(number % 3 == 0) return 'fizz'
    if(number % 5 == 0) return 'buzz'
    return number
}

describe('fizz', ()  => {
    // it('should be fuction',() =>{
    //    expect(typeof fizz).toBe('function')
    //})

    it('debe ser un numero', () =>{
        expect(() => fizz()).toThrow()
    })

    it('debe devolver un mensaje de error', () =>{
        expect(() => fizz()).toThrow('Mensaje de error')
    })

    it('debe devolver un mensaje de error 2', () =>{
        expect(() => fizz(NaN)).toThrow('Mensaje de error')
    })

    it('debe devolver 1 si numero es 1', () =>{
        expect(fizz(1)).toBe(1)
    })

    it('debe devolver 2 si numero es 2', () =>{
        expect(fizz(2)).toBe(2)
    })

    it('debe devolver fizz si numero es 3', () =>{
        expect(fizz(3)).toBe('fizz')
    })

    it('debe devolver fizz si es multiplo de 3', () =>{
        expect(fizz(6)).toBe('fizz')
        expect(fizz(9)).toBe('fizz')
    })

    it('debe devolver buzz si es multiplo de 5', () =>{
        expect(fizz(5)).toBe('buzz')
        expect(fizz(10)).toBe('buzz')
    })

    it('debe devolver fizzbuzz si es multiplo de 15', () =>{
        expect(fizz(15)).toBe('fizzbuzz')
    })
} )