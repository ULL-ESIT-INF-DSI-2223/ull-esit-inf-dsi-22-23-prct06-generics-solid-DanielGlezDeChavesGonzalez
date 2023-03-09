import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Serie } from "./Serie";

/**
 * Clase SerieCollection
 */
export class SerieCollection extends BasicStreamableCollection<Serie> {
  /**
   * constructor de la clase
   * @param collection coleccion de series
   */
  constructor(collection: Serie[]) {
    super(collection);
  }

  /**
   * funcion que devuelve un array de series que contengan el year pasado por parametro
   * @param year año de estreno
   * @returns devuelve un array de series que contengan el year pasado por parametro
   */
  public getByYear(year: number): Serie[] {
    return this.collection.filter((serie) => serie.getYear() === year);
  }

  /**
   * funcion que devuelve un array de series que contengan el titulo pasado por parametro
   * @param title titulo de la serie
   * @returns devuelve un array de series que contengan el titulo pasado por parametro
   */
  public getByTitle(title: string): Serie[] {
    return this.collection.filter((serie) => serie.getTitle() === title);
  }

  /**
   * funcion que devuelve un array de series que contengan el genero pasado por parametro
   * @param genre genero de la serie
   * @returns devuelve un array de series que contengan el genero pasado por parametro
   */
  public getByGenre(genre: string): Serie[] {
    return this.collection.filter((serie) => serie.getGenre() === genre);
  }

  /**
   * funcion que devuelve un array de series que contengan la duracion pasada por parametro
   * @param duration duracion de la serie
   * @returns devuelve un array de series que contengan la duracion pasada por parametro
   */
  public getByDuration(duration: number): Serie[] {
    return this.collection.filter((serie) => serie.getDuration() === duration);
  }

  /**
   * funcion que devuelve un array de series que contengan el rating pasado por parametro
   * @param rating rating de la serie
   * @returns devuelve un array de series que contengan el rating pasado por parametro
   */
  public getByRating(rating: number): Serie[] {
    return this.collection.filter((serie) => serie.getRating() === rating);
  }

  /**
   * funcion que devuelve un string con todos las duraciones de las series
   * @returns devuelve un string con todos las duraciones de las series
   */
  public getDurations(): string {
    let duration = "";
    this.collection.forEach((serie) => {
      duration += serie.getDuration() + " ";
    });
    duration = duration.substring(0, duration.length - 1);
    return duration;
  }

  /**
   * funcion que devuelve un string con todos los generos de las series
   * @returns devuelve un string con todos los generos de las series
   */
  public getGenres(): string {
    let genre = "";
    this.collection.forEach((serie) => {
      if (genre.search(serie.getGenre()) == -1) genre += serie.getGenre() + " ";
    });
    return genre;
  }

  /**
   * funcion que devuelve un string con todos los titulos de las series
   * @returns devuelve un string con todos los titulos de las series
   */
  public getTitles(): string {
    let title = "";
    this.collection.forEach((serie) => {
      title += serie.getTitle() + " ";
    });
    return title;
  }

  /**
   * funcion que devuelve un string con todos los años de las series
   * @returns devuelve un string con todos los años de las series
   */
  public getYears(): string {
    let year = "";
    this.collection.forEach((serie) => {
      year += serie.getYear() + " ";
    });
    year = year.substring(0, year.length - 1);
    return year;
  }
}
