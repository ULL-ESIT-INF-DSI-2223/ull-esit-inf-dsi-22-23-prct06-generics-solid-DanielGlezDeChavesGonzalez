import "mocha";
import { expect } from "chai";
import { Documentary } from "../../src/ejercicio-1/Documentary";
import { DocumentaryCollection } from "../../src/ejercicio-1/DocumentaryCollection";

let Documentary1 = new Documentary("The last dance", 2020, "Sports", 500, 9.3);
let Documentary2 = new Documentary(
  "The social dilemma",
  2020,
  "Documentary",
  100,
  9.2
);
let Documentary3 = new Documentary("Blackfish", 2013, "Documentary", 80, 9.0);
let Documentary4 = new Documentary("The Cove", 2009, "Documentary", 90, 9.1);

const DocumentaryCollection1 = new DocumentaryCollection([
  Documentary1,
  Documentary2,
  Documentary3,
  Documentary4,
]);

describe("DocumentaryCollection class tests", () => {
  it("El metodo getByYear() debe devolver las peliculas que se emitieron en el año indicado", () => {
    expect(DocumentaryCollection1.getByYear(2020)).to.eql([
      DocumentaryCollection1.getCollection()[0],
      DocumentaryCollection1.getCollection()[1],
    ]);
  });
  it("El metodo getByTitle() debe devolver las peliculas que contengan el titulo indicado", () => {
    expect(DocumentaryCollection1.getByTitle("The Cove")).to.eql([
      DocumentaryCollection1.getCollection()[3],
    ]);
  });
  it("El metodo getByGenre() debe devolver las peliculas que contengan el genero indicado", () => {
    expect(DocumentaryCollection1.getByGenre("Documentary")).to.eql([
      DocumentaryCollection1.getCollection()[1],
      DocumentaryCollection1.getCollection()[2],
      DocumentaryCollection1.getCollection()[3],
    ]);
  });
  it("El metodo getByDuration() debe devolver las peliculas que contengan la duracion indicada", () => {
    expect(DocumentaryCollection1.getByDuration(500)).to.eql([
      DocumentaryCollection1.getCollection()[0],
    ]);
  });
  it("El metodo getByRating() debe devolver las peliculas que contengan el rating indicado", () => {
    expect(DocumentaryCollection1.getByRating(9.0)).to.eql([
      DocumentaryCollection1.getCollection()[2],
    ]);
  });
  it("El metodo getDurations() debe devolver un string con todas las duraciones de las peliculas", () => {
    expect(DocumentaryCollection1.getDurations()).to.eql("500 100 80 90");
  });
  it("El metodo getDurations() debe devolver un string con todas las duraciones de las peliculas", () => {
    expect(DocumentaryCollection1.getDurations()).to.eql("500 100 80 90");
  });
  it("El metodo getGenres() debe devolver un string con todos los generos de las peliculas", () => {
    expect(DocumentaryCollection1.getGenres()).to.eql("Sports Documentary");
  });
  it("El metodo getTitles() debe devolver un string con todos los titulos de las peliculas", () => {
    expect(DocumentaryCollection1.getTitles()).to.eql(
      "The last dance The social dilemma Blackfish The Cove"
    );
  });
  it("El metodo getRatings() debe devolver un string con todos los ratings de las peliculas", () => {
    expect(DocumentaryCollection1.getYears()).to.eql("2020 2020 2013 2009");
  });
});
