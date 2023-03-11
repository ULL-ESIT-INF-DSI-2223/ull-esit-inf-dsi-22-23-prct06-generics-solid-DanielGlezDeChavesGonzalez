import { Cancion } from "./cancion";
import { Disco } from "./disco";
import { Discografica } from "./discografica";
import { Artista } from "./artista";
import * as Prompt from "prompt-sync";
import { Single } from "./single";
const prompt = Prompt();

/**
 * Clase biblioteca_musical que representa una biblioteca musical
 */
export class Biblioteca_musical {
  private canciones: Cancion[];
  private discos: Disco[];
  private singles: Single[];
  private discograficas: Discografica<Single | Disco>[];
  private artistas: Artista[];

  /**
   * constructor de la clase Biblioteca_musical
   * @param canciones canciones de la biblioteca
   * @param discos discos de la biblioteca
   * @param singles singles de la biblioteca
   * @param discograficas discograficas de la biblioteca
   * @param artistas artistas de la biblioteca
   */
  constructor(
    canciones: Cancion[],
    discos: Disco[],
    singles: Single[],
    discograficas: Discografica<Single | Disco>[],
    artistas: Artista[]
  ) {
    this.canciones = canciones;
    this.discos = discos;
    this.singles = singles;
    this.discograficas = discograficas;
    this.artistas = artistas;
  }

  /**
   * getter de las canciones
   * @returns canciones de la biblioteca
   */
  public getCanciones(): Cancion[] {
    return this.canciones;
  }

  /**
   * funcion que devuelve los singles de la biblioteca
   * @returns devuelve los singles de la biblioteca
   */
  public getSingles(): Single[] {
    return this.singles;
  }

  /**
   * getter de los discos
   * @returns discos de la biblioteca
   */
  public getDiscos(): Disco[] {
    return this.discos;
  }

  /**
   * getter de las discograficas
   * @returns discograficas de la biblioteca
   */
  public getDiscograficas(): Discografica<Single | Disco>[] {
    return this.discograficas;
  }

  /**
   * getter de los artistas
   * @returns artistas de la biblioteca
   */
  public getArtistas(): Artista[] {
    return this.artistas;
  }

  /**
   * setter de las canciones
   * @param canciones canciones de la biblioteca
   */
  public setCanciones(canciones: Cancion[]): void {
    this.canciones = canciones;
  }

  /**
   * setter de los singles
   * @param singles singles de la biblioteca
   */
  public setSingles(singles: Single[]): void {
    this.singles = singles;
  }

  /**
   * setter de los discos
   * @param discos discos de la biblioteca
   */
  public setDiscos(discos: Disco[]): void {
    this.discos = discos;
  }

  /**
   * setter de las discograficas
   * @param discograficas discograficas de la biblioteca
   */
  public setDiscograficas(discograficas: Discografica<Single | Disco>[]): void {
    this.discograficas = discograficas;
  }

  /**
   * setter de los artistas
   * @param artistas artistas de la biblioteca
   */
  public setArtistas(artistas: Artista[]): void {
    this.artistas = artistas;
  }

  /**
   * Método que muestra por pantalla la biblioteca musical
   */
  public mostrarPorPantalla(): void {
    console.log("Canciones");
    console.table(this.canciones);
    console.log("Discos");
    console.table(this.discos);
    console.log("Discograficas");
    console.table(this.discograficas);
    console.log("Artistas");
    console.table(this.artistas);
  }

  /**
   * función que añade una canción a la biblioteca
   * @param cancion canción a añadir a la biblioteca
   */
  public añadirCancion(cancion: Cancion): void {
    this.canciones.push(cancion);
  }

  /**
   * función que añade un disco a la biblioteca
   * @param disco disco a añadir a la biblioteca
   */
  public añadirDisco(disco: Disco): void {
    this.discos.push(disco);
  }

  /**
   * función que añade un single a la biblioteca
   * @param single single a añadir a la biblioteca
   */
  public añadirSingle(single: Single): void {
    this.singles.push(single);
  }

  /**
   * función que añade una discografica a la biblioteca
   * @param discografica discografica a añadir a la biblioteca
   */
  public añadirDiscografica(discografica: Discografica<Single | Disco>): void {
    this.discograficas.push(discografica);
  }

  /**
   * función que añade un artista a la biblioteca
   * @param artista artista a añadir a la biblioteca
   */
  public añadirArtista(artista: Artista): void {
    this.artistas.push(artista);
  }

  /**
   * función que busca un artista por su nombre
   * @param nombre nombre del artista a buscar
   * @returns devuelve el artista buscado o undefined si no existe
   */
  public BuscarArtistaPorNombre(nombre: string): Artista | undefined {
    return this.artistas.find((artista) => artista.getNombre() === nombre);
  }

  /**
   * función que busca una discografica por su nombre
   * @param nombre nombre del disco a buscar
   * @returns devuelve la discografica buscada o undefined si no existe
   */
  public BuscarDiscoPorNombre(nombre: string): Disco | undefined {
    return this.discos.find((disco) => disco.getNombre() === nombre);
  }

  /**
   * función que busca una canción por su nombre
   * @param nombre nombre de la canción a buscar
   * @returns devuelve la canción buscada o undefined si no existe
   */
  public BuscarCancionPorNombre(nombre: string): Cancion | undefined {
    return this.canciones.find((cancion) => cancion.getNombre() === nombre);
  }

  /**
   * función que calcula el número de canciones de un disco
   * @param nombre nombre del disco
   * @returns devuelve el número de canciones del disco o undefined si no existe
   */
  public CalcularNumeroDeCancionesEnUnDisco(
    nombre: string
  ): number | undefined {
    if (this.BuscarDiscoPorNombre(nombre) !== undefined) {
      const canciones_disco: Cancion[] = [];
      for (let i = 0; i < this.canciones.length; i++) {
        if (this.canciones[i].getDisco() === nombre) {
          canciones_disco.push(this.canciones[i]);
        }
      }
      return canciones_disco.length;
    }
    return undefined;
  }

  /**
   * función que calcula la duración total de un disco
   * @param nombre nombre del disco
   * @returns devuelve la duración total del disco o undefined si no existe
   */
  public CalcularDuracionTotalDeUnDisco(nombre: string): number | undefined {
    if (this.BuscarDiscoPorNombre(nombre) !== undefined) {
      const canciones_disco: Cancion[] = [];
      for (let i = 0; i < this.canciones.length; i++) {
        if (this.canciones[i].getDisco() === nombre) {
          canciones_disco.push(this.canciones[i]);
        }
      }
      if (canciones_disco.length === 0) {
        return 0;
      }
      if (canciones_disco.length > 0) {
        return canciones_disco.reduce(
          (total, cancion) => total + cancion.getDuracion(),
          0
        );
      }
    }
    return undefined;
  }

  /**
   * función que calcula el número de reproducciones de un disco
   * @param nombre nombre del disco
   * @returns devuelve el número de reproducciones del disco o undefined si no existe
   */
  public CalcularNumeroReproduccionesDeUnDisco(
    nombre: string
  ): number | undefined {
    if (this.BuscarDiscoPorNombre(nombre) !== undefined) {
      const canciones_disco: Cancion[] = [];
      for (let i = 0; i < this.canciones.length; i++) {
        if (this.canciones[i].getDisco() === nombre) {
          canciones_disco.push(this.canciones[i]);
        }
      }
      if (canciones_disco.length === 0) {
        return 0;
      }
      if (canciones_disco.length > 0) {
        return canciones_disco.reduce(
          (total, cancion) => total + cancion.getNumeroDeReproducciones(),
          0
        );
      }
    }
    return undefined;
  }

  /**
   * Método que ejecuta el menú de la biblioteca
   */
  public menu(): void {
    let seguir = true;
    while (seguir) {
      console.log("1. Mostrar por pantalla");
      console.log("2. Añadir artista");
      console.log("3. Añadir disco");
      console.log("4. Añadir single");
      console.log("5. Añadir canción");
      console.log("6. Añadir discografica");
      console.log("7. Buscar artista por nombre");
      console.log("8. Buscar disco por nombre");
      console.log("9. Buscar canción por nombre");
      console.log("10. Calcular número de canciones en un disco");
      console.log("11. Calcular duración total de un disco");
      console.log("12. Calcular número de reproducciones de un disco");
      console.log("13. Salir");

      let opcion = prompt("Introduce una opción ");
      console.log(opcion);

      switch (opcion) {
        case "1":
          this.mostrarPorPantalla();
          break;
        case "2":
          let nombre_artista = prompt("Introduce el nombre del artista ");
          if (nombre_artista) {
            let numero_de_oyentes_mensuales = prompt(
              "Introduce el número de oyentes mensuales"
            );
            if (numero_de_oyentes_mensuales) {
              let discografica = prompt(
                "Introduce la discografica del artista "
              );
              if (discografica) {
                let artista = new Artista(
                  nombre_artista,
                  parseInt(numero_de_oyentes_mensuales),
                  discografica
                );
                this.añadirArtista(artista);
                this.mostrarPorPantalla();
              } else {
                console.log("No se ha introducido la discografica del artista");
              }
            } else {
              console.log(
                "No se ha introducido el número de oyentes mensuales"
              );
            }
          } else {
            console.log("No se ha introducido el nombre del artista");
          }
          break;
        case "3":
          let nombre_disco = prompt("Introduce el nombre del disco ");
          if (nombre_disco) {
            let artista_disco = prompt("Introduce el artista del disco ");
            if (artista_disco) {
              let nombre_canciones = prompt(
                "Introduce las canciones del disco "
              );
              if (nombre_canciones) {
                let canciones_disco = nombre_canciones.split(",");
                let disco = new Disco(
                  nombre_disco,
                  artista_disco,
                  canciones_disco
                );
                this.añadirDisco(disco);
                this.mostrarPorPantalla();
              } else {
                console.log("No se ha introducido las canciones del disco");
              }
            } else {
              console.log("No se ha introducido el artista del disco");
            }
          } else {
            console.log("No se ha introducido el nombre del disco");
          }
          break;

        case "4":
          let nombre_single = prompt("Introduce el nombre del single ");
          if (nombre_single) {
            let artista_single = prompt("Introduce el artista del single ");
            if (artista_single) {
              let nombre_canciones = prompt(
                "Introduce las canciones del single "
              );
              if (nombre_canciones) {
                let canciones_single = nombre_canciones.split(",");
                let single = new Single(
                  nombre_single,
                  artista_single,
                  canciones_single
                );
                this.añadirSingle(single);
                this.mostrarPorPantalla();
              } else {
                console.log("No se ha introducido las canciones del single");
              }
            } else {
              console.log("No se ha introducido el artista del single");
            }
          } else {
            console.log("No se ha introducido el nombre del single");
          }
          break;

        case "5":
          let nombre_cancion = prompt("Introduce el nombre de la canción ");
          if (nombre_cancion) {
            let duracion = prompt("Introduce la duración de la canción ");
            if (duracion) {
              let disco_cancion = prompt("Introduce el disco de la canción ");
              if (disco_cancion) {
                let genero = prompt("Introduce el género de la canción ");
                if (genero) {
                  let single = prompt("¿Es single? (true/false )");
                  if (single) {
                    let numero_de_reproducciones = prompt(
                      "Introduce el número de reproducciones"
                    );
                    if (numero_de_reproducciones) {
                      let cancion = new Cancion(
                        nombre_cancion,
                        parseInt(duracion),
                        disco_cancion,
                        genero,
                        single.toLowerCase() === "true",
                        parseInt(numero_de_reproducciones)
                      );
                      this.añadirCancion(cancion);
                      this.mostrarPorPantalla();
                    } else {
                      console.log(
                        "No se ha introducido el número de reproducciones"
                      );
                    }
                  } else {
                    console.log("No se ha introducido si es single");
                  }
                } else {
                  console.log("No se ha introducido el género de la canción");
                }
              } else {
                console.log("No se ha introducido el disco de la canción");
              }
            } else {
              console.log("No se ha introducido la duración de la canción");
            }
          } else {
            console.log("No se ha introducido el nombre de la canción");
          }
          break;
        case "6":
          let nombre_discografica = prompt(
            "Introduce el nombre de la discografica"
          );
          if (nombre_discografica) {
            let discografica = new Discografica(nombre_discografica);
            this.añadirDiscografica(discografica);
            this.mostrarPorPantalla();
          } else {
            console.log("No se ha introducido el nombre de la discografica");
          }

          break;
        case "7":
          let nombre_artista_buscar = prompt(
            "Introduce el nombre del artista "
          );
          if (nombre_artista_buscar) {
            let artista_busqueda = this.BuscarArtistaPorNombre(
              nombre_artista_buscar
            );
            console.log(artista_busqueda);
          } else {
            console.log("No se ha introducido el nombre del artista");
          }
          break;
        case "8":
          let nombre_disco_buscar = prompt("Introduce el nombre del disco ");
          if (nombre_disco_buscar) {
            let disco_busqueda = this.BuscarDiscoPorNombre(nombre_disco_buscar);
            console.log(disco_busqueda);
          } else {
            console.log("No se ha introducido el nombre del disco");
          }
          break;
        case "9":
          let nombre_cancion_buscar = prompt(
            "Introduce el nombre de la canción "
          );
          if (nombre_cancion_buscar) {
            let cancion_busqueda = this.BuscarCancionPorNombre(
              nombre_cancion_buscar
            );
            console.table(cancion_busqueda);
          } else {
            console.log("No se ha introducido el nombre de la canción");
          }
          break;
        case "10":
          let nombre_disco_canciones = prompt("Introduce el nombre del disco ");
          if (nombre_disco_canciones) {
            let canciones_disco = this.CalcularNumeroDeCancionesEnUnDisco(
              nombre_disco_canciones
            );
            console.log(canciones_disco);
          } else {
            console.log("No se ha introducido el nombre del disco");
          }
          break;
        case "11":
          let nombre_disco_duracion = prompt("Introduce el nombre del disco ");
          if (nombre_disco_duracion) {
            let duracion_disco = this.CalcularDuracionTotalDeUnDisco(
              nombre_disco_duracion
            );
            console.log(duracion_disco);
          } else {
            console.log("No se ha introducido el nombre del disco");
          }
          break;
        case "12":
          let nombre_disco_reproducciones = prompt(
            "Introduce el nombre del disco "
          );
          if (nombre_disco_reproducciones) {
            let reproducciones_disco =
              this.CalcularNumeroReproduccionesDeUnDisco(
                nombre_disco_reproducciones
              );
            console.log(reproducciones_disco);
          } else {
            console.log("No se ha introducido el nombre del disco");
          }
          break;
        case "13":
          console.log("Adios");
          seguir = false;
          break;
        default:
          console.log("Opción no válida");
          break;
      }
    }
  }
}
