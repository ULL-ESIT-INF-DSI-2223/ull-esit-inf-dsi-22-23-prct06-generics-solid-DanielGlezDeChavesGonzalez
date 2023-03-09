/**
 * Clase que representa un documental
 */
export class Documentary {
  /**
   * constructor de la clase
   * @param title titulo del documental
   * @param year year de estreno
   * @param genre genero
   * @param duration duracion en minutos
   * @param rating rating
   */
  constructor(
    private title: string,
    private year: number,
    private genre: string,
    private duration: number,
    private rating: number
  ) {}

  /**
   * funcion que devuelve el titulo del documental
   * @returns titulo del documental
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
   * funcion que devuelve el genero
   * @returns genero
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
   * funcion que devuelve el rating
   * @returns rating
   */
  public getRating(): number {
    return this.rating;
  }
}
