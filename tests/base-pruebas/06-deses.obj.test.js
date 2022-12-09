import { usContext } from '../../src/base-pruebas/06-deses-obj';


describe('Pruebas en 06-deses-obs', () => {
    
    test('usContext debe de retornar un objeto', () => {
        
        const test1 = {
            clave: 123,
            nombre: 'Gustav',
            anios: 39,
            rango: 'Capitán',
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };
        
        const contex = usContext(test1)
        console.log(contex);
        
        expect( contex ).toEqual( test1 );

    });


});
