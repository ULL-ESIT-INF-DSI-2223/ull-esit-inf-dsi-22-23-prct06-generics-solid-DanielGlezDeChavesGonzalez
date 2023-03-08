import { Collectable } from "./Collectable";
import { Printable } from "./Printable";

/**
 * clase abstracta generica que implementa las interfaces genericas collectable y printable
 */
export abstract class PrintableCollection<T>
  implements Collectable<T>, Printable<T>
{
  /**
   * items de la clase
   */
  protected items: T[] = [];

  /**
   * funcion para añadir items a la coleccion
   * @param item item a añadir a la coleccion
   */
  addItem(item: T): void {
    this.items.push(item);
  }

  /**
   * funcion que devuelve el item en el indice que se ha indicado
   * @param index indice del item que se quiere obtener
   * @returns devuelve el item en el indice que se ha indicado
   */
  getItem(index: number): T | undefined {
    if (index < 0 || index > this.items.length) {
      return undefined;
    }
    return this.items[index];
  }

  /**
   * funcion que devuelve el item que se quiere borarr dado un indice
   * @param index indice del item que se quiere borrar
   * @returns devuelve el item que se ha borrado o undefined
   */
  removeItem(index: number): T | undefined {
    if (index < 0 || index > this.items.length) {
      return undefined;
    }
    return this.items.splice(index, 1)[0];
  }
  
  /**
   * funcion para obtener el numero de items que tiene la coleccion
   * @returns devuelve el numero de items que tiene la coleccion
   */
  getNumberOfItems(): number {
    return this.items.length;
  }

  abstract print(): string;
}
