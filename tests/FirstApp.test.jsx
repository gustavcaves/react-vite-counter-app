import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


describe('Pruebas en <FirstApp />', () => {

    test('Debe de hace match con el snapshot', () => {

        const title = "Hola, Soy Gokú";
        const subTitle = 'No hay subtítulo';
        const { container } = render(<FirstApp title={ title } subTitle={subTitle} />);
        // screen.debug();
        // console.log(container);

        expect(container).toMatchSnapshot();

    });

    test('debe mostrar el titulo en un h1', () => {
        const title = "Hola, Soy Gokú";
        const {container, getByText, getByTestId} = render(<FirstApp title={ title }/>);
        // screen.debug()
        expect( getByText(title)).toBeTruthy()

        // const h1 = container.querySelector('h1')
        // expect(h1.innerHTML).toContain(title);

        expect(getByTestId('test-title').innerHTML).toContain(title)

    });

    test('debe de mostrar el subtitulo enviado por props', () => {

        const title = 'Hola, Soy Gokú';
        const subTitle = 'Soy un subtitulo'

        const { getAllByText } = render(
            <FirstApp 
                title={ title }
                subTitle={ subTitle}
            />
        );

        // screen.debug();

        // expect( getByText(subTitle)).toBeTruthy()
        expect( getAllByText(subTitle).length).toBe(2)
    });

});