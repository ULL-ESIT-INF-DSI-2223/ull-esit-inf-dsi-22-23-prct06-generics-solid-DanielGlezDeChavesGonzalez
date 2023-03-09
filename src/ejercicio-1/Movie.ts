/**
 * Clase Movie
 */
export class Movie {
  /**
   * constructor de la clase
   * @param title titulo de la pelicula
   * @param year year de estreno
   * @param genre genero de la pelicula
   * @param duration duracion en minutos
   * @param rating rating de la pelicula
   */
  constructor(
    private title: string,
    private year: number,
    private genre: string,
    private duration: number,
    private rating: number
  ) {}

  /**
   * funcion que devuelve el titulo de la pelicula
   * @returns titulo de la pelicula
   */
  public getTitle(): string {
    return this.title;
  }

  /**
   * funcion que devuelve el year de estreno
   * @returns year de estreno
   */
  public getYear(): number {
    return this.year;
  }

  /**
   * funcion que devuelve el genero de la pelicula
   * @returns genero de la pelicula
   */
  public getGenre(): string {
    return this.genre;
  }

  /**
   * funcion que devuelve la duracion en minutos
   * @returns duracion en minutos
   */
  public getDuration(): number {
    return this.duration;
  }

  /**
   * funcion que devuelve el rating de la pelicula
   * @returns rating de la pelicula
   */
  public getRating(): number {
    return this.rating;
  }
}
