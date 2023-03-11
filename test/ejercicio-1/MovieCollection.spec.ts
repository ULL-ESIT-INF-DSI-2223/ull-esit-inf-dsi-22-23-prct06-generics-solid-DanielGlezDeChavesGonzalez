import "mocha";
import { expect } from "chai";
import { Movie } from "../../src/ejercicio-1/Movie";
import { MovieCollection } from "../../src/ejercicio-1/MovieCollection";

let movie1 = new Movie("The Shawshank Redemption", 1994, "Drama", 142, 9.3);
let movie2 = new Movie("The Godfather", 1972, "Crime", 175, 9.2);
let movie3 = new Movie("The Godfather: Part II", 1974, "Crime", 202, 9.0);
let movie4 = new Movie("The Dark Knight", 2008, "Action", 152, 9.0);

const MovieCollection1 = new MovieCollection([movie1, movie2, movie3, movie4]);

describe("MovieCollection class tests", () => {
  it("El metodo getByYear() debe devolver las peliculas que se emitieron en el año indicado", () => {
    expect(MovieCollection1.getByYear(2008)).to.eql([
      MovieCollection1.getCollection()[3],
    ]);
  });
  it("El metodo getByTitle() debe devolver las peliculas que contengan el titulo indicado", () => {
    expect(MovieCollection1.getByTitle("The Shawshank Redemption")).to.eql([
      MovieCollection1.getCollection()[0],
    ]);
  });
  it("El metodo getByGenre() debe devolver las peliculas que contengan el genero indicado", () => {
    expect(MovieCollection1.getByGenre("Crime")).to.eql([
      MovieCollection1.getCollection()[1],
      MovieCollection1.getCollection()[2],
    ]);
  });
  it("El metodo getByDuration() debe devolver las peliculas que contengan la duracion indicada", () => {
    expect(MovieCollection1.getByDuration(175)).to.eql([
      MovieCollection1.getCollection()[1],
    ]);
  });
  it("El metodo getByRating() debe devolver las peliculas que contengan el rating indicado", () => {
    expect(MovieCollection1.getByRating(9.0)).to.eql([
      MovieCollection1.getCollection()[2],
      MovieCollection1.getCollection()[3],
    ]);
  });
  it("El metodo getDurations() debe devolver un string con todas las duraciones de las peliculas", () => {
    expect(MovieCollection1.getDurations()).to.eql("142 175 202 152");
  });

  it("El metodo getTitles() debe devolver un string con todos los titulos de las peliculas", () => {
    expect(MovieCollection1.getTitles()).to.eql(
      "The Shawshank Redemption The Godfather The Godfather: Part II The Dark Knight"
    );
  });
  it("El metodo getGenres() debe devolver un string con todos los titulos de las peliculas", () => {
    expect(MovieCollection1.getGenres()).to.eql("Drama Crime Action");
  });
  it("El metodo getYears() debe devolver un string con todos los titulos de las peliculas", () => {
    expect(MovieCollection1.getYears()).to.eql("1994 1972 1974 2008");
  });
});
