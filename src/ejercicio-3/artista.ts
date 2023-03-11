/**
 * Clase Artista que representa un artista
 */
export class Artista {
  private nombre: string;
  private numero_de_oyentes_mensuales: number;
  private discografica: string;

  /**
   * constructor de la clase Artista
   * @param nombre nombre del artista
   * @param numero_de_oyentes_mensuales número de oyentes mensuales del artista
   * @param discografica discográfica del artista
   */
  constructor(
    nombre: string,
    numero_de_oyentes_mensuales: number,
    discografica: string
  ) {
    this.nombre = nombre;
    this.numero_de_oyentes_mensuales = numero_de_oyentes_mensuales;
    this.discografica = discografica;
  }

  /**
   * función que devuelve el nombre del artista
   * @returns devuelve el nombre del artista
   */
  public getNombre(): string {
    return this.nombre;
  }

  /**
   * función que devuelve el número de oyentes mensuales del artista
   * @returns devuelve el número de oyentes mensuales del artista
   */
  public getNumeroDeOyentesMensuales(): number {
    return this.numero_de_oyentes_mensuales;
  }

  /**
   * función que devuelve la discográfica del artista
   * @returns devuelve la discográfica del artista
   */
  public getDiscografica(): string {
    return this.discografica;
  }

  /**
   * función que asigna un nombre al artista
   * @param nombre nombre del artista a asignar
   */
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  /**
   * función que asigna un número de oyentes mensuales al artista
   * @param numero_de_oyentes_mensuales número de oyentes mensuales del artista a asignar
   */
  public setNumeroDeOyentesMensuales(
    numero_de_oyentes_mensuales: number
  ): void {
    this.numero_de_oyentes_mensuales = numero_de_oyentes_mensuales;
  }

  /**
   * función que asigna una discográfica al artista
   * @param discografica discográfica del artista a asignar
   */
  public setDiscografica(discografica: string): void {
    this.discografica = discografica;
  }
}
