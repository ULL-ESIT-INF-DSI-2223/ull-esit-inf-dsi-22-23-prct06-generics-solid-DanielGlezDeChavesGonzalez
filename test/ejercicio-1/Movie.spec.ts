import "mocha";
import { expect } from "chai";
import { Movie } from "../../src/ejercicio-1/Movie";

let movie1 = new Movie("The Office", 2005, "Comedy", 200, 9.3);

describe("Movie class tests", () => {
  it("El metodo getYear() debe devolver el año de la pelicula", () => {
    expect(movie1.getYear()).to.equal(2005);
  });
  it("El metodo getTitle() debe devolver el titulo de la pelicula", () => {
    expect(movie1.getTitle()).to.equal("The Office");
  });
  it("El metodo getGenre() debe devolver el genero de la pelicula", () => {
    expect(movie1.getGenre()).to.equal("Comedy");
  });
  it("El metodo getDuration() debe devolver la duracion de la pelicula", () => {
    expect(movie1.getDuration()).to.equal(200);
  });
  it("El metodo getRating() debe devolver el rating de la pelicula", () => {
    expect(movie1.getRating()).to.equal(9.3);
  });
});
