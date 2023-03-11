import { Cancion } from "./cancion";

/**
 * Clase Disco que representa un disco
 */
export class Disco {
  private nombre: string;
  private fecha_publicacion: string;
  private canciones: string[];

  /**
   * constructor de la clase Disco
   * @param nombre nombre del disco
   * @param fecha_publicacion fecha de publicación del disco
   * @param canciones canciones del disco
   */
  constructor(nombre: string, fecha_publicacion: string, canciones: string[]) {
    this.nombre = nombre;
    this.fecha_publicacion = fecha_publicacion;
    this.canciones = canciones;
  }

  /**
   * función que devuelve el nombre del disco
   * @returns devuelve el nombre del disco
   */
  public getNombre(): string {
    return this.nombre;
  }

  /**
   * función que devuelve la fecha de publicación del disco
   * @returns devuelve la fecha de publicación del disco
   */
  public getFechaPublicacion(): string {
    return this.fecha_publicacion;
  }

  /**
   * función que devuelve las canciones del disco
   * @returns devuelve las canciones del disco
   */
  public getCanciones(): string[] {
    return this.canciones;
  }

  /**
   * función que asigna un nombre al disco
   * @param nombre nombre del disco a asignar
   */
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  /**
   * función que asigna una fecha de publicación al disco
   * @param fecha_publicacion fecha de publicación del disco a asignar
   */
  public setFechaPublicacion(fecha_publicacion: string): void {
    this.fecha_publicacion = fecha_publicacion;
  }

  /**
   * función que asigna canciones al disco
   * @param canciones canciones del disco a asignar
   */
  public setCanciones(canciones: string[]): void {
    this.canciones = canciones;
  }
}
