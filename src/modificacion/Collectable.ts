/**
 * Interfaz generica que define los metodos que
 * toda clase tiene que tener que quiera implementar
 * dicha interfaz llamada collectable
 */
export interface Collectable<T> {
  /**
   * funcion añadir item a la coleccion
   * @param item item a añadir a la coleccion
   */
  addItem(item: T): void;

  /**
   * funcion para obtener el item en el indice indicado
   * @param index indice del item a obtener de la coleccion
   */
  getItem(index: number): T | undefined;

  /**
   * funcion que borra el item en el indice indicacado
   * @param index indice del item a borrar de la coleccion
   */
  removeItem(index: number): T | undefined;

  /**
   * funcion que devuelve el numero de items que existen en la coleccion
   */
  getNumberOfItems(): number;
}
