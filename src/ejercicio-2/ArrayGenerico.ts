/**
 * Clase Lista que representa una lista de elementos de tipo T
 */
export class Lista<T> {
  private elementos: T[];

  /**
   * constructor de la clase Lista
   * @param elementos Elementos de la lista
   */
  constructor(...elementos: T[]) {
    this.elementos = [];
    this.concatenate(...elementos);
  }

  /**
   * funcion que concatena los elementos pasados como argumento
   * @param elementos Elementos a concatenar
   */
  concatenate(...elementos: T[]): void {
    let indice = this.elementos.length;
    for (let i = 0; i < elementos.length; i++) {
      this.elementos[indice] = elementos[i];
      indice++;
    }
  }

  /**
   * funcion que concatena las listas pasadas como argumento
   * @param listas Lista de listas a concatenar
   */
  concatenarListas(...listas: Lista<T>[]): void {
    for (let i = 0; i < listas.length; i++) {
      let elementos = listas[i].toArray();
      this.concatenate(...elementos);
    }
  }

  /**
   * funcion que filtra los elementos de la lista
   * @param predicado predicado que se aplica a cada elemento de la lista
   * @returns devuelve una lista con los elementos que cumplen el predicado
   */
  filter(predicado: (elemento: T) => boolean): Lista<T> {
    let elementosFiltrados = new Lista<T>();
    for (let i = 0; i < this.elementos.length; i++) {
      if (predicado(this.elementos[i])) {
        elementosFiltrados.concatenate(this.elementos[i]);
      }
    }
    return elementosFiltrados;
  }

  /**
   * funcion que devuelve la longitud de la lista
   * @returns devuelve la longitud de la lista
   */
  length(): number {
    let longitud = 0;
    for (let i = 0; i < this.elementos.length; i++) {
      longitud++;
    }
    return longitud;
  }

  /**
   * funcion que mappea los elementos de la lista dada una funcion
   * @param funcion funcion que se aplica a cada elemento de la lista
   * @returns devuelve una lista con los elementos transformados
   */
  map<U>(funcion: (elemento: T) => U): Lista<U> {
    let nuevosElementos = new Lista<U>();
    for (let i = 0; i < this.elementos.length; i++) {
      let resultado = funcion(this.elementos[i]);
      nuevosElementos.concatenate(resultado);
    }
    return nuevosElementos;
  }

  /**
   * funcion que reduce los elementos de la lista dada una funcion y un acumulador
   * @param funcion funcion que se aplica a cada elemento de la lista
   * @param acumulador acumulador que se va actualizando
   * @returns devuelve el acumulador
   */
  reduce<U>(funcion: (acumulador: U, elemento: T) => U, acumulador: U): U {
    let nuevoAcumulador = acumulador;
    for (let i = 0; i < this.elementos.length; i++) {
      nuevoAcumulador = funcion(nuevoAcumulador, this.elementos[i]);
    }
    return nuevoAcumulador;
  }

  /**
   * funcion que devuelve la lista original en orden inverso
   * @returns devuelve una lista con los elementos de la lista original en orden inverso
   */
  reverse(): Lista<T> {
    let invertida = new Lista<T>();
    for (let i = this.length() - 1; i >= 0; i--) {
      invertida.concatenate(this.elementos[i]);
    }
    return invertida;
  }

  /**
   * funcion que devuelve la lista original en un array
   * @returns devuelve un array con los elementos de la lista
   */
  toArray(): T[] {
    let resultado = new Array<T>();
    for (let i = 0; i < this.elementos.length; i++) {
      resultado.push(this.elementos[i]);
    }
    return resultado;
  }

  /**
   * funcion que aplica una funcion a cada elemento de la lista
   * @param funcion funcion que se aplica a cada elemento de la lista
   */
  forEach(funcion: (elemento: T) => void): void {
    for (let i = 0; i < this.elementos.length; i++) {
      funcion(this.elementos[i]);
    }
  }
}
