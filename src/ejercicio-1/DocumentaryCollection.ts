import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Documentary } from "./Documentary";

/**
 * Clase que representa una coleccion de documentales
 */
export class DocumentaryCollection extends BasicStreamableCollection<Documentary> {
  /**
   * constructor de la clase
   * @param collection coleccion de documentales
   */
  constructor(collection: Documentary[]) {
    super(collection);
  }

  /**
   * funcion que devuelve un array de documentales que contengan el year pasado por parametro
   * @param year año de estreno
   * @returns devuelve un array de documentales que contengan el year pasado por parametro
   */
  public getByYear(year: number): Documentary[] {
    return this.collection.filter(
      (documentary) => documentary.getYear() === year
    );
  }

  /**
   * funcion que devuelve un array de documentales que contengan el titulo pasado por parametro
   * @param title titulo del documental
   * @returns devuelve un array de documentales que contengan el titulo pasado por parametro
   */
  public getByTitle(title: string): Documentary[] {
    return this.collection.filter(
      (documentary) => documentary.getTitle() === title
    );
  }

  /**
   * funcion que devuelve un array de documentales que contengan el genero pasado por parametro
   * @param genre genero del documental
   * @returns devuelve un array de documentales que contengan el genero pasado por parametro
   */
  public getByGenre(genre: string): Documentary[] {
    return this.collection.filter(
      (documentary) => documentary.getGenre() === genre
    );
  }

  /**
   * funcion que devuelve un array de documentales que contengan la duracion pasada por parametro
   * @param duration duracion del documental
   * @returns devuelve un array de documentales que contengan la duracion pasada por parametro
   */
  public getByDuration(duration: number): Documentary[] {
    return this.collection.filter(
      (documentary) => documentary.getDuration() === duration
    );
  }

  /**
   * funcion que devuelve un array de documentales que contengan el rating pasado por parametro
   * @param rating rating del documental
   * @returns devuelve un array de documentales que contengan el rating pasado por parametro
   */
  public getByRating(rating: number): Documentary[] {
    return this.collection.filter(
      (documentary) => documentary.getRating() === rating
    );
  }

  /**
   * funcion que devuelve la duracion total de todos los documentales
   * @returns devuelve la duracion total de todos los documentales
   */
  public getDurations(): string {
    let duration = "";
    this.collection.forEach((documentary) => {
      duration += documentary.getDuration() + " ";
    });
    duration = duration.substring(0, duration.length - 1);
    return duration;
  }

  /**
   * funcion que devuelve el rating total de todos los documentales
   * @returns devuelve el rating total de todos los documentales
   */
  public getGenres(): string {
    let genre = "";
    this.collection.forEach((documentary) => {
      if (genre.search(documentary.getGenre()) == -1)
        genre += documentary.getGenre() + " ";
    });
    genre = genre.substring(0, genre.length - 1);
    return genre;
  }

  /**
   * funcion que devuelve el titulo de todos los documentales
   * @returns devuelve el titulo de todos los documentales
   */
  public getTitles(): string {
    let title = "";
    this.collection.forEach((documentary) => {
      title += documentary.getTitle() + " ";
    });
    title = title.substring(0, title.length - 1);
    return title;
  }

  /**
   * funcion que devuelve el year de estreno de todos los documentales
   * @returns devuelve el year de estreno de todos los documentales
   */
  public getYears(): string {
    let year = "";
    this.collection.forEach((documentary) => {
      year += documentary.getYear() + " ";
    });
    year = year.substring(0, year.length - 1);
    return year;
  }
}
