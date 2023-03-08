import { PrintableCollection } from "./PrintableCollection";

/**
 * Clase colleccion imprimible de numeros que hereda de printablecollection
 */
export class NumericPrintableCollection extends PrintableCollection<number> {
  /**
   * constructor de la clase
   * @param items items de la clase
   */
  constructor(items: number[]) {
    super();
    this.items = items;
  }

  /**
   * funcion que devuelve los items de la clase como una string
   * @returns devuelve los items de la coleccion como una string
   */
  print(): string {
    let print = "";

    for (let i = 0; i < this.items.length; i++) {
      print += this.items[i] + " ";
    }

    print = print.substring(0, print.length - 1);
    return print;
  }
}
