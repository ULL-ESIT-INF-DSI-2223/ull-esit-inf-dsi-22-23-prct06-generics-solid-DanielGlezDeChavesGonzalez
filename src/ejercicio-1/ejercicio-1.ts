import { Streamable } from "./Streamable";
import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Movie } from "./Movie";
import { Serie } from "./Serie";
import { Documentary } from "./Documentary";
import { MovieCollection } from "./MovieCollection";
import { DocumentaryCollection } from "./DocumentaryCollection";
import { SerieCollection } from "./SerieCollection";

const MovieCollection1 = new MovieCollection([
  new Movie("The Shawshank Redemption", 1994, "Drama", 142, 9.3),
  new Movie("The Godfather", 1972, "Crime", 175, 9.2),
  new Movie("The Godfather: Part II", 1974, "Crime", 202, 9.0),
  new Movie("The Dark Knight", 2008, "Action", 152, 9.0),
]);

const DocumentaryCollection1 = new DocumentaryCollection([
  new Documentary("The last dance", 2020, "Sports", 500, 9.3),
  new Documentary("The social dilemma", 2020, "Documentary", 100, 9.2),
  new Documentary("Blackfish", 2013, "Documentary", 80, 9.0),
  new Documentary("The Cove", 2009, "Documentary", 90, 9.1),
]);

const SerieCollection1 = new SerieCollection([
  new Serie("The Office", 2005, "Comedy", 200, 9.3),
  new Serie("Breaking Bad", 2008, "Crime", 400, 9.2),
  new Serie("The Wire", 2002, "Crime", 300, 9.0),
  new Serie("The Sopranos", 1999, "Crime", 350, 9.1),
]);
