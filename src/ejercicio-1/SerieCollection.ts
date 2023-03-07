import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Serie } from "./Serie";

export class SerieCollection extends BasicStreamableCollection<Serie> {
  constructor(collection: Serie[]) {
    super(collection);
  }

  public getByYear(year: number): Serie[] {
    return this.collection.filter((serie) => serie.getYear() === year);
  }

  public getByTitle(title: string): Serie[] {
    return this.collection.filter((serie) => serie.getTitle() === title);
  }

  public getByGenre(genre: string): Serie[] {
    return this.collection.filter((serie) => serie.getGenre() === genre);
  }

  public getByDuration(duration: number): Serie[] {
    return this.collection.filter((serie) => serie.getDuration() === duration);
  }

  public getByRating(rating: number): Serie[] {
    return this.collection.filter((serie) => serie.getRating() === rating);
  }

  public getDurations(): number {
    let duration = 0;
    this.collection.forEach((serie) => {
      duration += serie.getDuration();
    });
    return duration;
  }

  public getGenres(): string {
    let genre = "";
    this.collection.forEach((serie) => {
      if (genre.search(serie.getGenre()) == -1) genre += serie.getGenre() + " ";
    });
    return genre;
  }

  public getTitles(): string {
    let title = "";
    this.collection.forEach((serie) => {
      title += serie.getTitle() + " ";
    });
    return title;
  }

  public getYears(): number {
    let year = 0;
    this.collection.forEach((serie) => {
      year += serie.getYear();
    });
    return year;
  }
}
