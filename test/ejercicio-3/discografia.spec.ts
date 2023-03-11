import "mocha";
import { expect } from "chai";
import { Disco } from "../../src/ejercicio-3/disco";
import { Discografica } from "../../src/ejercicio-3/discografica";
import { Single } from "../../src/ejercicio-3/single";

let single1 = new Single("Single 1", "01/01/2000", ["Cancion 1"]);
let single2 = new Single("Single 2", "04/02/2000", ["Cancion 2"]);

let disco_prueba1 = new Disco("Disco 1", "01/01/2000", [
  "Cancion 1",
  "Cancion 2",
]);
let disco_prueba2 = new Disco("Disco 2", "01/01/2001", [
  "Cancion 3",
  "Cancion 4",
]);
const discografica_prueba = new Discografica(
  "Discografica 1",
  [disco_prueba1, disco_prueba2],
  [single1, single2]
);

describe("Ejercicio 1 - Discografica", () => {
  it("Getter de nombre", () => {
    expect(discografica_prueba.getNombre()).to.equal("Discografica 1");
  });
  it("Getter de discos", () => {
    expect(discografica_prueba.getDiscos()[0].getNombre()).to.equal("Disco 1");
  });
  it("Getter de singles", () => {
    expect(discografica_prueba.getSingles()[0].getNombre()).to.equal(
      "Single 1"
    );
  });
  it("Setter de nombre", () => {
    discografica_prueba.setNombre("Discografica 2");
    expect(discografica_prueba.getNombre()).to.equal("Discografica 2");
  });
  it("Setter de discos", () => {
    discografica_prueba.setDiscos([disco_prueba1]);
    expect(discografica_prueba.getDiscos()[0].getNombre()).to.equal("Disco 1");
  });
  it("Setter de singles", () => {
    discografica_prueba.setSingles([single1]);
    expect(discografica_prueba.getSingles()[0].getNombre()).to.equal(
      "Single 1"
    );
  });
});
