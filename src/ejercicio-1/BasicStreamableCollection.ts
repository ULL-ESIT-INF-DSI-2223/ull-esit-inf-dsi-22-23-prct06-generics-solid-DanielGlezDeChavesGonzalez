import { Streamable } from './Streamable';

export abstract class BasicStreamableCollection<T> implements Streamable<T> {
    constructor(protected collection: T[]) {}
  
    abstract getByYear(year: number): T[];
    abstract getByTitle(title: string): T[];
    abstract getByGenre(genre: string): T[];
    abstract getByDuration(duration: number): T[];
    abstract getByRating(rating: number): T[];
    abstract getTitles(): string;
    abstract getYears(): number;
    abstract getGenres(): string;
    abstract getDurations(): number;
  
    public getCollection(): T[] {
      return this.collection;
    }
  
    public setCollection(collection: T[]): void {
      this.collection = collection;
    }
  
    public addItem(Item: T): void {
      this.collection.push(Item);
    }
  
    public getNumberOfItems(): number {
      return this.collection.length;
    }
  }