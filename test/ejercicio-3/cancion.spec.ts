import 'mocha';
import { expect } from 'chai';
import { Cancion } from '../../src/ejercicio-3/cancion';


let cancion_prueba = new Cancion("Cancion 1", 100, "Disco 1", "Pop", true, 100);

describe("Ejercicio 1 - Cancion", () => {
  it("Getter de nombre", () => {
    expect(cancion_prueba.getNombre()).to.equal("Cancion 1");
  });
  it("Getter de duracion", () => {
    expect(cancion_prueba.getDuracion()).to.equal(100);
  });
  it("Getter de disco", () => {
    expect(cancion_prueba.getDisco()).to.equal("Disco 1");
  });
  it("Getter de genero", () => {
    expect(cancion_prueba.getGenero()).to.equal("Pop");
  });
  it("Getter de si es un single", () => {
    expect(cancion_prueba.getSingle()).to.equal(true);
  });
  it("Getter de numero de reproducciones", () => {
    expect(cancion_prueba.getNumeroDeReproducciones()).to.equal(100);
  });
  it("Setter de nombre", () => {
    cancion_prueba.setNombre("Cancion 2");
    expect(cancion_prueba.getNombre()).to.equal("Cancion 2");
  });
  it("Setter de duracion", () => {
    cancion_prueba.setDuracion(200);
    expect(cancion_prueba.getDuracion()).to.equal(200);
  });
  it("Setter de disco", () => {
    cancion_prueba.setDisco("Disco 2");
    expect(cancion_prueba.getDisco()).to.equal("Disco 2");
  });
  it("Setter de genero", () => {
    cancion_prueba.setGenero("Rock");
    expect(cancion_prueba.getGenero()).to.equal("Rock");
  });
  it("Setter de si es un single", () => {
    cancion_prueba.setSingle(false);
    expect(cancion_prueba.getSingle()).to.equal(false);
  });
  it("Setter de numero de reproducciones", () => {
    cancion_prueba.setNumeroDeReproducciones(200);
    expect(cancion_prueba.getNumeroDeReproducciones()).to.equal(200);
  });
});
