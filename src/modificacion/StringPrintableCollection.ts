import { PrintableCollection } from "./PrintableCollection";

/**
 * Clase colleccion imprimible de strings que hereda de printablecollection
 */
export class StringPrintableCollection extends PrintableCollection<string> {
  /**
   * constructor de la clase
   * @param items items de la clase
   */
  constructor(items: string[]) {
    super();
    this.items = items;
  }
  /**
   * funcion print que devuelve todos los items como una string con comas entre cada item
   * @returns retorna todos los items como una cadena con comas entre medio
   */
  print(): string {
    let print = "";

    for (let i = 0; i < this.items.length; i++) {
      print += this.items[i] + ", ";
    }

    print = print.substring(0, print.length - 2);

    return print;
  }
}
