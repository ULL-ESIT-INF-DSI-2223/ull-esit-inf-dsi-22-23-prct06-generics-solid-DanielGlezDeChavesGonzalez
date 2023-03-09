/**
 * Interfaz Streamable
 */
export interface Streamable<T> {
  /**
   * funcion que devuelve un array de del tipo que contengan el año pasado por parametro
   * @param year año de la pelicula
   */
  getByYear(year: number): T[];
  /**
   * funcion que devuelve un array de del tipo que contengan el titulo pasado por parametro
   * @param title titulo del tipo generico
   */
  getByTitle(title: string): T[];
  /**
   * funcion que devuelve un array de del tipo que contengan el genero pasado por parametro
   * @param genre genero del tipo generico
   */
  getByGenre(genre: string): T[];
  /**
   * funcion que devuelve un array de del tipo que contengan la duracion pasada por parametro
   * @param duration duracion del tipo generico
   */
  getByDuration(duration: number): T[];
  /**
   * funcion que devuelve un array de del tipo que contengan la valoracion pasada por parametro
   * @param rating valoracion del tipo generico
   */
  getByRating(rating: number): T[];
  /**
   * funcion que devuelve los titulos de los elementos del tipo generico
   */
  getTitles(): string;
  /**
   * funcion que devuelve los años de los elementos del tipo generico
   */
  getYears(): string;
  /**
   * funcion que devuelve los generos de los elementos del tipo generico
   */
  getGenres(): string;
  /**
   * funcion que devuelve las duraciones de los elementos del tipo generico
   */
  getDurations(): string;
}
