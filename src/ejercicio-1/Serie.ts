/**
 * Clase Serie
 */
export class Serie {
  /**
   * constructor de la clase
   * @param title titulo de la serie
   * @param year año de estreno
   * @param genre genero de la serie
   * @param duration duracion en minutos
   * @param rating rating de la serie
   */
  constructor(
    private title: string,
    private year: number,
    private genre: string,
    private duration: number,
    private rating: number
  ) {}

  /**
   * funcion que devuelve el titulo de la serie
   * @returns titulo de la serie
   */
  public getTitle(): string {
    return this.title;
  }

  /**
   * funcion que devuelve el año de estreno
   * @returns devuelve el año de estreno
   */
  public getYear(): number {
    return this.year;
  }

  /**
   * funcion que devuelve el genero de la serie
   * @returns devuelve el genero de la serie
   */
  public getGenre(): string {
    return this.genre;
  }

  /**
   * funcion que devuelve la duracion en minutos
   * @returns devuelve la duracion en minutos
   */
  public getDuration(): number {
    return this.duration;
  }

  /**
   * funcion que devuelve el rating de la serie
   * @returns devuelve el rating de la serie
   */
  public getRating(): number {
    return this.rating;
  }
}
