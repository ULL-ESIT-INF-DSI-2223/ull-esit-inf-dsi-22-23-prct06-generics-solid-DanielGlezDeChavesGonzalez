import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Movie } from "./Movie";

export class MovieCollection extends BasicStreamableCollection<Movie> {
  constructor(collection: Movie[]) {
    super(collection);
  }

  public getByYear(year: number): Movie[] {
    return this.collection.filter((movie) => movie.getYear() === year);
  }

  public getByTitle(title: string): Movie[] {
    return this.collection.filter((movie) => movie.getTitle() === title);
  }

  public getByGenre(genre: string): Movie[] {
    return this.collection.filter((movie) => movie.getGenre() === genre);
  }

  public getByDuration(duration: number): Movie[] {
    return this.collection.filter((movie) => movie.getDuration() === duration);
  }

  public getByRating(rating: number): Movie[] {
    return this.collection.filter((movie) => movie.getRating() === rating);
  }

  public getDurations(): number {
    let duration = 0;
    this.collection.forEach((movie) => {
      duration += movie.getDuration();
    });
    return duration;
  }

  public getGenres(): string {
    let genre = "";
    this.collection.forEach((movie) => {
      if (genre.search(movie.getGenre()) == -1) genre += movie.getGenre() + " ";
    });
    return genre;
  }

  public getTitles(): string {
    let title = "";
    this.collection.forEach((movie) => {
      title += movie.getTitle() + " ";
    });
    return title;
  }

  public getYears(): number {
    let year = 0;
    this.collection.forEach((movie) => {
      year += movie.getYear();
    });
    return year;
  }
}
