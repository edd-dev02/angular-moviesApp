import { Component } from '@angular/core';
import { Result } from '../../interfaces/movie.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'movies-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {

  public movies: Result[] = [];

  constructor(private moviesService: MovieService) {}

  searchMovieTitle(movieTitle: string) {

    if(movieTitle.length === 0) return;

    this.moviesService.searchMovies(movieTitle).subscribe(movies => {
      this.movies = movies;
    })
  }

}
