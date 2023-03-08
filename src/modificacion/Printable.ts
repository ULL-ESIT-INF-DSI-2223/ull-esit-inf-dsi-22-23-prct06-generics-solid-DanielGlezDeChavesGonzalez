/*
 * Interfaz generica que define los metodos que
 * toda clase tiene que tener que quiera implementar
 * dicha interfaz llamada Printable
 */
export interface Printable<T> {
  /**
   * funcion print de la interfaz printable
   */
  print(): string;
}
