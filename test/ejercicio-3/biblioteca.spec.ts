import "mocha";
import { expect } from "chai";
import { Biblioteca_musical } from "../../src/ejercicio-3/biblioteca";
import { Cancion } from "../../src/ejercicio-3/cancion";
import { Disco } from "../../src/ejercicio-3/disco";
import { Discografica } from "../../src/ejercicio-3/discografica";
import { Artista } from "../../src/ejercicio-3/artista";
import { Single } from "../../src/ejercicio-3/single";

const disco1 = new Disco("Disco 1", "01/01/2000", ["Cancion 1"]);
const disco2 = new Disco("Disco 2", "04/02/2000", [
  "Cancion 2",
  "Cancion 4",
  "Cancion 5",
]);
const disco3 = new Disco("Disco 3", "10/06/2000", ["Cancion 3", "Cancion 6"]);
const discos = [disco1, disco2, disco3];

const single1 = new Single("Single 1", "01/01/2000", ["Cancion 1"]);
const single2 = new Single("Single 2", "04/02/2000", ["Cancion 2"]);
const single3 = new Single("Single 3", "10/06/2000", ["Cancion 3"]);
const singles = [single1, single2, single3];

const discografica = new Discografica("Discografica 1", [discos[0], discos[1]]);
const discografica2 = new Discografica("Discografica 2", [discos[2]]);
const discograficas = [discografica, discografica2];

const artista = new Artista("Artista 1", 100, "Discografica 1");
const artista2 = new Artista("Artista 2", 200, "Discografica 2");
const artista3 = new Artista("Artista 3", 300, "Discografica 3");
const artistas = [artista, artista2, artista3];

const cancion = new Cancion("Cancion 1", 100, "Disco 1", "Rock", true, 100);
const cancion2 = new Cancion("Cancion 2", 200, "Disco 2", "Pop", false, 200);
const cancion3 = new Cancion("Cancion 3", 300, "Disco 3", "Rock", false, 300);
const cancion4 = new Cancion("Cancion 4", 400, "Disco 2", "Pop", false, 400);
const cancion5 = new Cancion("Cancion 5", 400, "Disco 2", "Pop", false, 400);
const cancion6 = new Cancion("Cancion 6", 400, "Disco 3", "Pop", false, 400);
const canciones = [cancion, cancion2, cancion3, cancion4, cancion5, cancion6];

const biblioteca = new Biblioteca_musical(
  canciones,
  discos,
  singles,
  discograficas,
  artistas
);

describe("Ejercicio 1 - Biblioteca Musical", () => {
  it("Getter de canciones", () => {
    expect(biblioteca.getCanciones()).to.equal(canciones);
  });
  it("Getter de discos", () => {
    expect(biblioteca.getDiscos()).to.equal(discos);
  });
  it("Getter de singles", () => {
    expect(biblioteca.getSingles()).to.equal(singles);
  });
  it("Getter de discograficas", () => {
    expect(biblioteca.getDiscograficas()).to.equal(discograficas);
  });
  it("Getter de artistas", () => {
    expect(biblioteca.getArtistas()).to.equal(artistas);
  });
  it("Setter de canciones", () => {
    biblioteca.setCanciones(canciones);
    expect(biblioteca.getCanciones()[0].getNombre()).to.equal("Cancion 1");
  });
  it("Setter de discos", () => {
    biblioteca.setDiscos(discos);
    expect(biblioteca.getDiscos()[0].getNombre()).to.equal("Disco 1");
  });
  it("Setter de singles", () => {
    biblioteca.setSingles(singles);
    expect(biblioteca.getSingles()[0].getNombre()).to.equal("Single 1");
  });
  it("Setter de discograficas", () => {
    biblioteca.setDiscograficas(discograficas);
    expect(biblioteca.getDiscograficas()[0].getNombre()).to.equal(
      "Discografica 1"
    );
  });
  it("Setter de artistas", () => {
    biblioteca.setArtistas(artistas);
    expect(biblioteca.getArtistas()[0].getNombre()).to.equal("Artista 1");
  });
  it("Metodo añadir un single", () => {
    let single4 = new Single("Single 4", "10/06/2000", ["Cancion 3"]);
    biblioteca.añadirSingle(single4);
    expect(biblioteca.getSingles()[3].getNombre()).to.equal("Single 4");
  });
  it("Metodo añadir una cancion", () => {
    let cancion7 = new Cancion("Cancion 7", 400, "Disco 3", "Pop", false, 400);
    biblioteca.añadirCancion(cancion7);
    expect(biblioteca.getCanciones()[6].getNombre()).to.equal("Cancion 7");
  });
  it("Metodo añadir un disco", () => {
    let disco4 = new Disco("Disco 4", "10/06/2000", ["Cancion 3", "Cancion 6"]);
    biblioteca.añadirDisco(disco4);
    expect(biblioteca.getDiscos()[3].getNombre()).to.equal("Disco 4");
  });
  it("Metodo añadir una discografica", () => {
    let discografica3 = new Discografica("Discografica 3", [discos[2]]);
    biblioteca.añadirDiscografica(discografica3);
    expect(biblioteca.getDiscograficas()[2].getNombre()).to.equal(
      "Discografica 3"
    );
  });
  it("Metodo añadir un artista", () => {
    let artista4 = new Artista("Artista 4", 300, "Discografica 3");
    biblioteca.añadirArtista(artista4);
    expect(biblioteca.getArtistas()[3].getNombre()).to.equal("Artista 4");
  });
  it("Metodo buscar un artista por nombre", () => {
    expect(biblioteca.BuscarArtistaPorNombre("Artista 1")).to.equal(artista);
  });
  it("Metodo buscar un disco por nombre", () => {
    expect(biblioteca.BuscarDiscoPorNombre("Disco 1")).to.equal(disco1);
  });
  it("Metodo buscar una cancion por nombre", () => {
    expect(biblioteca.BuscarCancionPorNombre("Cancion 1")).to.equal(cancion);
  });
  it("Metodo calcular el numero de canciones en un disco", () => {
    expect(biblioteca.CalcularNumeroDeCancionesEnUnDisco("Disco 1")).to.equal(
      1
    );
    expect(biblioteca.CalcularNumeroDeCancionesEnUnDisco("Disco 2")).to.equal(
      3
    );
    expect(biblioteca.CalcularNumeroDeCancionesEnUnDisco("Disco 3")).to.equal(
      3
    );
  });
  it("Metodo calcular la duracion total de un disco", () => {
    expect(biblioteca.CalcularDuracionTotalDeUnDisco("Disco 1")).to.equal(100);
    expect(biblioteca.CalcularDuracionTotalDeUnDisco("Disco 2")).to.equal(1000);
    expect(biblioteca.CalcularDuracionTotalDeUnDisco("Disco 3")).to.equal(1100);
  });
  it("Metodo calcular el numero total de reproducciones de un disco", () => {
    expect(
      biblioteca.CalcularNumeroReproduccionesDeUnDisco("Disco 1")
    ).to.equal(100);
    expect(
      biblioteca.CalcularNumeroReproduccionesDeUnDisco("Disco 2")
    ).to.equal(1000);
    expect(
      biblioteca.CalcularNumeroReproduccionesDeUnDisco("Disco 3")
    ).to.equal(1100);
  });
  it("Exite un metodo llamado mostrarPorPantalla() que muestra la biblioteca por pantalla", () => {
    expect(biblioteca.mostrarPorPantalla).to.exist;
  });

  it("Existe un metodo llamado menu() que muestra un menu con las opciones de la biblioteca", () => {
    expect(biblioteca.menu).to.exist;
  });
});
