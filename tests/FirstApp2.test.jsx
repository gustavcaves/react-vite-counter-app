import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


describe('Pruebas en <FirstApp />', () => {

    const title = "Hola, Soy Gokú";
    const subTitle = 'Soy un subtitulo'


    test('debe hacer match con el snapshopt', () => {
        const {container } = render(<FirstApp title={title}/>)
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje "Hola, Soy Gokú', () => {
        
        render(<FirstApp title={title}/>)
        expect( screen.getByText(title) ).toBeTruthy(); 
        // expect( screen.getByText(title) ).not.toBeTruthy(); 
        // screen.debug();
    });

    test('debe de mostrar el titulo en un h1', () => {
        render(<FirstApp title={title}/>)
        expect( screen.getByRole('heading', { level: 1}).innerHTML).toContain(title)
        // console.log(screen.getByRole('heading', { level: 1}).innerHTML)
    });


    test('debe de mostrar el subtitulo enviado por props', () => {
        render(
            <FirstApp 
                title={title}
                subTitle={subTitle}
            />
        );
        expect( screen.getAllByText(subTitle).length).toBe(2)
        
    });

});