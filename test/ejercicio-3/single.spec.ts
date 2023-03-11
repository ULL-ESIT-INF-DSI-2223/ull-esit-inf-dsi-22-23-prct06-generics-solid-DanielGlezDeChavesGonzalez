import "mocha";
import { expect } from "chai";
import { Single } from "../../src/ejercicio-3/single";

const single1 = new Single("Single 1", "01/01/2000", ["Cancion 1"]);
const single2 = new Single("Single 2", "04/02/2000", ["Cancion 2"]);
const single3 = new Single("Single 3", "10/06/2000", ["Cancion 3"]);

const Single_prueba = new Single("Single 1", "01/01/2000", [
  "Cancion 1",
  "Cancion 2",
]);

describe("Ejercicio 1 - Single", () => {
  it("Getter de nombre", () => {
    expect(Single_prueba.getNombre()).to.equal("Single 1");
  });
  it("Getter de fecha de publicacion", () => {
    expect(Single_prueba.getFechaPublicacion()).to.equal("01/01/2000");
  });
  it("Getter de canciones", () => {
    expect(Single_prueba.getCanciones()[0]).to.equal("Cancion 1");
  });
  it("Setter de nombre", () => {
    Single_prueba.setNombre("Single 2");
    expect(Single_prueba.getNombre()).to.equal("Single 2");
  });
  it("Setter de fecha de publicacion", () => {
    Single_prueba.setFechaPublicacion("01/01/2001");
    expect(Single_prueba.getFechaPublicacion()).to.equal("01/01/2001");
  });
  it("Setter de canciones", () => {
    Single_prueba.setCanciones(["Cancion 3", "Cancion 4"]);
    expect(Single_prueba.getCanciones()[0]).to.equal("Cancion 3");
  });
});
