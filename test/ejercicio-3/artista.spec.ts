import "mocha";
import { Artista } from "../../src/ejercicio-3/artista";
import { expect } from "chai";

let artista_prueba = new Artista("Artista 1", 100, "Discografica 1");

describe("Ejercicio 1 - Artista", () => {
  it("Getter de nombre", () => {
    expect(artista_prueba.getNombre()).to.equal("Artista 1");
  });
  it("Getter de numero de oyentes mensuales", () => {
    expect(artista_prueba.getNumeroDeOyentesMensuales()).to.equal(100);
  });
  it("Getter de discografica", () => {
    expect(artista_prueba.getDiscografica()).to.equal("Discografica 1");
  });
  it("Setter de nombre", () => {
    artista_prueba.setNombre("Artista 2");
    expect(artista_prueba.getNombre()).to.equal("Artista 2");
  });
  it("Setter de numero de oyentes mensuales", () => {
    artista_prueba.setNumeroDeOyentesMensuales(200);
    expect(artista_prueba.getNumeroDeOyentesMensuales()).to.equal(200);
  });
  it("Setter de discografica", () => {
    artista_prueba.setDiscografica("Discografica 2");
    expect(artista_prueba.getDiscografica()).to.equal("Discografica 2");
  });
});