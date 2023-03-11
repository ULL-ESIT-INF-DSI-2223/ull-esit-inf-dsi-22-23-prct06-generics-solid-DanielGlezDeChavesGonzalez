import { Cancion } from "./cancion";

/**
 * Clase Single que representa un single
 */
export class Single {
  private nombre: string;
  private fecha_publicacion: string;
  private canciones: string[];

  /**
   * constructor de la clase Single
   * @param nombre nombre del single
   * @param fecha_publicacion fecha de publicación del single
   * @param canciones canciones del single
   */
  constructor(nombre: string, fecha_publicacion: string, canciones: string[]) {
    this.nombre = nombre;
    this.fecha_publicacion = fecha_publicacion;
    this.canciones = canciones;
  }

  /**
   * función que devuelve el nombre del single
   * @returns devuelve el nombre del single
   */
  public getNombre(): string {
    return this.nombre;
  }

  /**
   * función que devuelve la fecha de publicación del single
   * @returns devuelve la fecha de publicación del single
   */
  public getFechaPublicacion(): string {
    return this.fecha_publicacion;
  }

  /**
   * función que devuelve las canciones del single
   * @returns devuelve las canciones del single
   */
  public getCanciones(): string[] {
    return this.canciones;
  }

  /**
   * función que asigna un nombre al single
   * @param nombre nombre del single a asignar
   */
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  /**
   * función que asigna una fecha de publicación al single
   * @param fecha_publicacion fecha de publicación del single a asignar
   */
  public setFechaPublicacion(fecha_publicacion: string): void {
    this.fecha_publicacion = fecha_publicacion;
  }

  /**
   * función que asigna canciones al single
   * @param canciones canciones del single a asignar
   */
  public setCanciones(canciones: string[]): void {
    this.canciones = canciones;
  }
}
