export interface Streamable<T> {
    getByYear(year: number): T[];
    getByTitle(title: string): T[];
    getByGenre(genre: string): T[];
    getByDuration(duration: number): T[];
    getByRating(rating: number): T[];
    getTitles(): string;
    getYears(): number;
    getGenres(): string;
    getDurations(): number;
  }