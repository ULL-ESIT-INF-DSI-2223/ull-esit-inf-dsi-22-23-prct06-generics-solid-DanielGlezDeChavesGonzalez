import "mocha";
import { expect } from "chai";
import { Documentary } from "../../src/ejercicio-1/Documentary";

let documentary1 = new Documentary("The last dance", 2020, "Sports", 500, 9.3);

describe("Documentary class tests", () => {
  it("El metodo getYear() debe devolver el año del documental", () => {
    expect(documentary1.getYear()).to.equal(2020);
  });
  it("El metodo getTitle() debe devolver el titulo del documental", () => {
    expect(documentary1.getTitle()).to.equal("The last dance");
  });
  it("El metodo getGenre() debe devolver el genero del documental", () => {
    expect(documentary1.getGenre()).to.equal("Sports");
  });
  it("El metodo getDuration() debe devolver la duracion del documental", () => {
    expect(documentary1.getDuration()).to.equal(500);
  });
  it("El metodo getRating() debe devolver el rating del documental", () => {
    expect(documentary1.getRating()).to.equal(9.3);
  });
});
