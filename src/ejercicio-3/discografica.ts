import { Disco } from "./disco";
import { Single } from "./single";

/**
 * clase Discografica que representa una discografica
 */
export class Discografica<T extends Disco | Single> {
  private nombre: string;
  private discos: Disco[];
  private singles: Single[];

  /**
   * constructor de la clase Discografica
   * @param nombre nombre de la discografica
   * @param discos discos de la discografica
   */
  constructor(nombre: string, discos?: Disco[], singles?: Single[]) {
    this.nombre = nombre;

    if (discos) {
      this.discos = discos;
    } else {
      this.discos = [];
    }

    if (singles) {
      this.singles = singles;
    } else {
      this.singles = [];
    }
  }

  /**
   * función que devuelve el nombre de la discografica
   * @returns devuelve el nombre de la discografica
   */
  public getNombre(): string {
    return this.nombre;
  }

  /**
   * función que asigna un nombre a la discografica
   * @param nombre nombre de la discografica a asignar
   */
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  /**
   * función que devuelve los discos de la discografica
   * @returns devuelve los discos de la discografica
   */
  public getDiscos(): Disco[] {
    return this.discos;
  }

  /**
   * función que asigna discos a la discografica
   * @param discos discos de la discografica a asignar
   */
  public setDiscos(discos: Disco[]): void {
    this.discos = discos;
  }

  /**
   * función que devuelve los singles de la discografica
   * @returns devuelve los singles de la discografica
   */
  public getSingles(): Single[] {
    return this.singles;
  }

  /**
   * función que asigna singles a la discografica
   * @param singles singles de la discografica a asignar
   */
  public setSingles(singles: Single[]): void {
    this.singles = singles;
  }
}
