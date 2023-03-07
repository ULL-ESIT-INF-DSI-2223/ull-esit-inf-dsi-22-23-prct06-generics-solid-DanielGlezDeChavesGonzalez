export class Movie {
  constructor(
    private title: string,
    private year: number,
    private genre: string,
    private duration: number,
    private rating: number
  ) {}

  public getTitle(): string {
    return this.title;
  }

  public getYear(): number {
    return this.year;
  }

  public getGenre(): string {
    return this.genre;
  }

  public getDuration(): number {
    return this.duration;
  }

  public getRating(): number {
    return this.rating;
  }
}
