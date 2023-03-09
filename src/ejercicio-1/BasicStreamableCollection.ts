import { Streamable } from "./Streamable";

/**
 * clase abstracta que implementa la interfaz Streamable
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  constructor(protected collection: T[]) {}

  /**
   * funcion que devuelve un array de del tipo que contengan el año pasado por parametro
   * @param year año de la pelicula
   */
  abstract getByYear(year: number): T[];
  /**
   * funcion que devuelve un array de del tipo que contengan el titulo pasado por parametro
   * @param title titulo del tipo generico
   */
  abstract getByTitle(title: string): T[];
  /**
   * funcion que devuelve un array de del tipo que contengan el genero pasado por parametro
   * @param genre genero del tipo generico
   */
  abstract getByGenre(genre: string): T[];
  /**
   * funcion que devuelve un array de del tipo que contengan la duracion pasada por parametro
   * @param duration duracion del tipo generico
   */
  abstract getByDuration(duration: number): T[];
  /**
   * funcion que devuelve un array de del tipo que contengan la valoracion pasada por parametro
   * @param rating valoracion del tipo generico
   */
  abstract getByRating(rating: number): T[];
  /**
   * funcion que devuelve un array de del tipo que contengan la valoracion pasada por parametro
   */
  abstract getTitles(): string;

  /**
   * funcion que devuelve los años de los elementos del tipo generico
   */
  abstract getYears(): string;
  /**
   * funcion que devuelve los generos de los elementos del tipo generico
   */
  abstract getGenres(): string;
  /**
   * funcion que devuelve las duraciones de los elementos del tipo generico
   */
  abstract getDurations(): string;

  /**
   * funcion que devuelve la coleccion de elementos del tipo generico
   * @returns devuelve la coleccion de elementos del tipo generico
   */
  public getCollection(): T[] {
    return this.collection;
  }

  /**
   * funcion que establece la coleccion de elementos del tipo generico
   * @param collection coleccion de elementos del tipo generico
   */
  public setCollection(collection: T[]): void {
    this.collection = collection;
  }

  /**
   * funcion que añade un elemento del tipo generico a la coleccion
   * @param Item elemento del tipo generico
   */
  public addItem(Item: T): void {
    this.collection.push(Item);
  }

  /**
   * funcion que elimina un elemento del tipo generico de la coleccion
   * @returns devuelve el numero de elementos del tipo generico que hay en la coleccion
   */
  public getNumberOfItems(): number {
    return this.collection.length;
  }
}
