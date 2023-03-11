/**
 * Clase Cancion que representa una canción
 */
export class Cancion {
  private nombre: string;
  private duracion: number;
  private genero: string;
  private single: boolean;
  private numero_de_reproducciones: number;
  private disco: string;

  /**
   * constructor de la clase Cancion
   * @param nombre nombre de la canción
   * @param duracion duración de la canción
   * @param disco disco al que pertenece la canción
   * @param genero género de la canción
   * @param single si es single o no
   * @param numero_de_reproducciones número de reproducciones de la canción
   */
  constructor(
    nombre: string,
    duracion: number,
    disco: string,
    genero: string,
    single: boolean,
    numero_de_reproducciones: number
  ) {
    this.nombre = nombre;
    this.duracion = duracion;
    this.disco = disco;
    this.genero = genero;
    this.single = single;
    this.numero_de_reproducciones = numero_de_reproducciones;
  }

  /**
   * función que devuelve el nombre de la canción
   * @returns devuelve el nombre de la canción
   */
  public getNombre(): string {
    return this.nombre;
  }

  /**
   * función que devuelve la duración de la canción
   * @returns devuelve la duración de la canción
   */
  public getDuracion(): number {
    return this.duracion;
  }

  /**
   * función que devuelve el disco al que pertenece la canción
   * @returns devuelve el disco al que pertenece la canción
   */
  public getDisco(): string {
    return this.disco;
  }

  /**
   * función que devuelve el género de la canción
   * @returns devuelve el género de la canción
   */
  public getGenero(): string {
    return this.genero;
  }

  /**
   * función que devuelve si es single o no
   * @returns devuelve si es single o no
   */
  public getSingle(): boolean {
    return this.single;
  }

  /**
   * función que devuelve el número de reproducciones de la canción
   * @returns devuelve el número de reproducciones de la canción
   */
  public getNumeroDeReproducciones(): number {
    return this.numero_de_reproducciones;
  }

  /**
   * función que establece el nombre de la canción
   * @param nombre nombre de la canción a establecer
   */
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  /**
   * función que establece la duración de la canción
   * @param duracion duración de la canción a establecer
   */
  public setDuracion(duracion: number): void {
    this.duracion = duracion;
  }

  /**
   * función que establece el disco al que pertenece la canción
   * @param disco disco al que pertenece la canción a establecer
   */
  public setDisco(disco: string): void {
    this.disco = disco;
  }

  /**
   * función que establece el género de la canción
   * @param genero genero de la canción a establecer
   */
  public setGenero(genero: string): void {
    this.genero = genero;
  }

  /**
   * función que establece si es single o no
   * @param single si es single o no a establecer
   */
  public setSingle(single: boolean): void {
    this.single = single;
  }

  /**
   * función que establece el número de reproducciones de la canción
   * @param numero_de_reproducciones número de reproducciones de la canción a establecer
   */
  public setNumeroDeReproducciones(numero_de_reproducciones: number): void {
    this.numero_de_reproducciones = numero_de_reproducciones;
  }
}
