import 'mocha';
import { expect } from 'chai';
import { Disco } from '../../src/ejercicio-3/disco';

const disco_prueba = new Disco("Disco 1", "01/01/2000", [
    "Cancion 1",
    "Cancion 2",
  ]);
  
  describe("Ejercicio 1 - Disco", () => {
    it("Getter de nombre", () => {
      expect(disco_prueba.getNombre()).to.equal("Disco 1");
    });
    it("Getter de fecha de publicacion", () => {
      expect(disco_prueba.getFechaPublicacion()).to.equal("01/01/2000");
    });
    it("Getter de canciones", () => {
      expect(disco_prueba.getCanciones()[0]).to.equal("Cancion 1");
    });
    it("Setter de nombre", () => {
      disco_prueba.setNombre("Disco 2");
      expect(disco_prueba.getNombre()).to.equal("Disco 2");
    });
    it("Setter de fecha de publicacion", () => {
      disco_prueba.setFechaPublicacion("01/01/2001");
      expect(disco_prueba.getFechaPublicacion()).to.equal("01/01/2001");
    });
    it("Setter de canciones", () => {
      disco_prueba.setCanciones(["Cancion 3", "Cancion 4"]);
      expect(disco_prueba.getCanciones()[0]).to.equal("Cancion 3");
    });
  });
  