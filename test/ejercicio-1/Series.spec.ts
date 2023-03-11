import 'mocha';
import { expect } from 'chai';
import { Serie } from '../../src/ejercicio-1/Serie';

let serie1 = new Serie('The Office', 2005, 'Comedy', 200, 9.3);

describe('Serie class tests', () => {
    it('El metodo getYear() debe devolver el año de la serie', () => {
        expect(serie1.getYear()).to.equal(2005);
    });
    it('El metodo getTitle() debe devolver el titulo de la serie', () => {
        expect(serie1.getTitle()).to.equal('The Office');
    });
    it('El metodo getGenre() debe devolver el genero de la serie', () => {
        expect(serie1.getGenre()).to.equal('Comedy');
    });
    it('El metodo getDuration() debe devolver la duracion de la serie', () => {
        expect(serie1.getDuration()).to.equal(200);
    });
    it('El metodo getRating() debe devolver el rating de la serie', () => {
        expect(serie1.getRating()).to.equal(9.3);
    });
});