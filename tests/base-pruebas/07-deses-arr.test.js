import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";


describe('Pruebas en 07-deses-arr', () => {
    
    test('Debe retornar un string y un número', () => { 
        
        // Sujeto de pruebas

        const [ letters, numbers ] = retornaArreglo();
        // console.log(retorno);

        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        expect( typeof letters).toBe('string');
        expect( typeof numbers).toBe('number');
        
        expect( letters ).toStrictEqual( expect.any(String));

     })

});