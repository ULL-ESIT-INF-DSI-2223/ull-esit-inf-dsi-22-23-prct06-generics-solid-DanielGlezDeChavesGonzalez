import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Documentary } from "./Documentary";

export class DocumentaryCollection extends BasicStreamableCollection<Documentary> {
  constructor(collection: Documentary[]) {
    super(collection);
  }

  public getByYear(year: number): Documentary[] {
    return this.collection.filter(
      (documentary) => documentary.getYear() === year
    );
  }

  public getByTitle(title: string): Documentary[] {
    return this.collection.filter(
      (documentary) => documentary.getTitle() === title
    );
  }

  public getByGenre(genre: string): Documentary[] {
    return this.collection.filter(
      (documentary) => documentary.getGenre() === genre
    );
  }

  public getByDuration(duration: number): Documentary[] {
    return this.collection.filter(
      (documentary) => documentary.getDuration() === duration
    );
  }

  public getByRating(rating: number): Documentary[] {
    return this.collection.filter(
      (documentary) => documentary.getRating() === rating
    );
  }

  public getDurations(): number {
    let duration = 0;
    this.collection.forEach((documentary) => {
      duration += documentary.getDuration();
    });
    return duration;
  }

  public getGenres(): string {
    let genre = "";
    this.collection.forEach((documentary) => {
      if (genre.search(documentary.getGenre()) == -1)
        genre += documentary.getGenre() + " ";
    });
    return genre;
  }

  public getTitles(): string {
    let title = "";
    this.collection.forEach((documentary) => {
      title += documentary.getTitle() + " ";
    });
    return title;
  }

  public getYears(): number {
    let year = 0;
    this.collection.forEach((documentary) => {
      year += documentary.getYear();
    });
    return year;
  }
}
