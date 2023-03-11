import "mocha";
import { expect } from "chai";
import { SerieCollection } from "../../src/ejercicio-1/SerieCollection";
import { Serie } from "../../src/ejercicio-1/Serie";

let serie1 = new Serie("The Office", 2005, "Comedy", 200, 9.3);
let serie2 = new Serie("Breaking Bad", 2008, "Crime", 400, 9.2);
let serie3 = new Serie("The Wire", 2002, "Crime", 300, 9.0);
let serie4 = new Serie("The Sopranos", 1999, "Crime", 350, 9.1);

const SerieCollection1 = new SerieCollection([serie1, serie2, serie3, serie4]);

describe("SerieCollection class tests", () => {
  it("El metodo getByYear() debe devolver las series que se emitieron en el año indicado", () => {
    expect(SerieCollection1.getByYear(2005)).to.eql([
      SerieCollection1.getCollection()[0],
    ]);
  });
  it("El metodo getByTitle() debe devolver las series que contengan el titulo indicado", () => {
    expect(SerieCollection1.getByTitle("The Office")).to.eql([
      SerieCollection1.getCollection()[0],
    ]);
  });
  it("El metodo getByGenre() debe devolver las series que contengan el genero indicado", () => {
    expect(SerieCollection1.getByGenre("Crime")).to.eql([
      SerieCollection1.getCollection()[1],
      SerieCollection1.getCollection()[2],
      SerieCollection1.getCollection()[3],
    ]);
  });
  it("El metodo getByDuration() debe devolver las series que contengan la duracion indicada", () => {
    expect(SerieCollection1.getByDuration(400)).to.eql([
      SerieCollection1.getCollection()[1],
    ]);
  });
  it("El metodo getByRating() debe devolver las series que contengan el rating indicado", () => {
    expect(SerieCollection1.getByRating(9.2)).to.eql([
      SerieCollection1.getCollection()[1],
    ]);
  });
  it("El metodo getDurations() debe devolver un string con todas las duraciones de las series", () => {
    expect(SerieCollection1.getDurations()).to.eql("200 400 300 350");
  });
  it("El metodo getTitles() debe devolver un string con todos los titulos de las series", () => {
    expect(SerieCollection1.getTitles()).to.eql(
      "The Office Breaking Bad The Wire The Sopranos"
    );
  });
  it("El metodo getGenres() debe devolver un string con todos los generos de las series", () => {
    expect(SerieCollection1.getGenres()).to.eql("Comedy Crime");
  });
  it("El metodo getYears() debe devolver un string con todos los años de las series", () => {
    expect(SerieCollection1.getYears()).to.eql("2005 2008 2002 1999");
  });
  it("El metodo setCollection() debe cambiar la coleccion de series", () => {
    SerieCollection1.setCollection([serie1, serie2]);
    expect(SerieCollection1.getCollection()).to.eql([serie1, serie2]);
  }
  );
  it("El metodo addItem() debe añadir una serie a la coleccion", () => {
    SerieCollection1.addItem(serie3);
    expect(SerieCollection1.getCollection()).to.eql([serie1, serie2, serie3]);
  }
  );
  it ("El metodo getNumberOfItems() debe devolver el numero de series en la coleccion", () => {
    expect(SerieCollection1.getNumberOfItems()).to.eql(3);
  }
  );
});
