import { Component, Input } from '@angular/core';
import { Result } from '../../interfaces/movie.interface';

@Component({
  selector: 'movies-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrl: './card-movie.component.css'
})
export class CardMovieComponent {

  @Input("InputCardMovies")
  public movie!: Result;

}
