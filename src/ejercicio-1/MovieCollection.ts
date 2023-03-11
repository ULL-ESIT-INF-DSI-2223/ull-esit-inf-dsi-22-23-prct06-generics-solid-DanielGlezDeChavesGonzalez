import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Movie } from "./Movie";

/**
 * Clase MovieCollection
 */
export class MovieCollection extends BasicStreamableCollection<Movie> {
  /**
   * constructor de la clase
   * @param collection coleccion de peliculas
   */
  constructor(collection: Movie[]) {
    super(collection);
  }

  /**
   * funcion que devuelve un array de peliculas que contengan el year pasado por parametro
   * @param year año de estreno
   * @returns devuelve un array de peliculas que contengan el year pasado por parametro
   */
  public getByYear(year: number): Movie[] {
    return this.collection.filter((movie) => movie.getYear() === year);
  }

  /**
   * funcion que devuelve un array de peliculas que contengan el titulo pasado por parametro
   * @param title titulo de la pelicula
   * @returns devuelve un array de peliculas que contengan el titulo pasado por parametro
   */
  public getByTitle(title: string): Movie[] {
    return this.collection.filter((movie) => movie.getTitle() === title);
  }

  /**
   * funcion que devuelve un array de peliculas que contengan el genero pasado por parametro
   * @param genre genero de la pelicula
   * @returns devuelve un array de peliculas que contengan el genero pasado por parametro
   */
  public getByGenre(genre: string): Movie[] {
    return this.collection.filter((movie) => movie.getGenre() === genre);
  }

  /**
   * funcion que devuelve un array de peliculas que contengan la duracion pasada por parametro
   * @param duration duracion de la pelicula
   * @returns devuelve un array de peliculas que contengan la duracion pasada por parametro
   */
  public getByDuration(duration: number): Movie[] {
    return this.collection.filter((movie) => movie.getDuration() === duration);
  }

  /**
   * funcion que devuelve un array de peliculas que contengan el rating pasado por parametro
   * @param rating rating de la pelicula
   * @returns devuelve un array de peliculas que contengan el rating pasado por parametro
   */
  public getByRating(rating: number): Movie[] {
    return this.collection.filter((movie) => movie.getRating() === rating);
  }

  /**
   * funcion que devuelve la duracion total de la coleccion de peliculas
   * @returns devuelve la duracion total de la coleccion de peliculas
   */
  public getDurations(): string {
    let duration = "";
    this.collection.forEach((movie) => {
      duration += movie.getDuration() + " ";
    });
    duration = duration.substring(0, duration.length - 1);
    return duration;
  }

  /**
   * funcion que devuelve el rating total de la coleccion de peliculas
   * @returns devuelve el rating total de la coleccion de peliculas
   */
  public getGenres(): string {
    let genre = "";
    this.collection.forEach((movie) => {
      if (genre.search(movie.getGenre()) == -1) genre += movie.getGenre() + " ";
    });
    genre = genre.substring(0, genre.length - 1);
    return genre;
  }

  /**
   * funcion que devuelve el rating total de la coleccion de peliculas
   * @returns devuelve el rating total de la coleccion de peliculas
   */
  public getTitles(): string {
    let title = "";
    this.collection.forEach((movie) => {
      title += movie.getTitle() + " ";
    });
    title = title.substring(0, title.length - 1);
    return title;
  }

  /**
   * funcion que devuelve el rating total de la coleccion de peliculas
   * @returns devuelve el rating total de la coleccion de peliculas
   */
  public getYears(): string {
    let year = "";
    this.collection.forEach((movie) => {
      year += movie.getYear() + " ";
    });
    year = year.substring(0, year.length - 1);
    return year;
  }
}
