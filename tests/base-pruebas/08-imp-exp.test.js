import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';


describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe retornar un héroe por ID', () => {
        
        const id =1;
        const hero = getHeroeById( id );
        // console.log(hero);

        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } )


    });

    test('getHeroeById debe retornar undefined si no existe', () => {
        
        const id =100;
        const hero = getHeroeById( id );
        // console.log(hero);

        expect( hero ).toBeFalsy()

    });


    // Tarea: 
    // Debe retornar un arreglo con todos los Héroes de DC
    // Length === 3
    // toEqual al arreglo filtrado


    test('debe retornar un arreglo con todos los héroes de DC', () => {
        
        const owner = 'DC';
        const heros = getHeroesByOwner( owner );
        console.log(heros)

        expect( heros ).toEqual(
            [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
            ]
        )

        expect( heros.length === 3 ).toEqual(
            [
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ].length == 3
        )

    });


    // debe de retornar un arreglo con los héroes de Marvel
    // length == 2


    test('debe retornar un arreglo con los héroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heros = getHeroesByOwner( owner );
        console.log(heros)

        expect( heros ).toEqual(
            [
                { id: 2, name: 'Spiderman', owner: 'Marvel' },
                { id: 5, name: 'Wolverine', owner: 'Marvel' }
            ]
        )

        expect( heros.length === 2 ).toEqual(
            [
                { id: 2, name: 'Spiderman', owner: 'Marvel' },
                { id: 5, name: 'Wolverine', owner: 'Marvel' }
            ].length === 2
        )

    });


});