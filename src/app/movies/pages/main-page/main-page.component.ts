import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Result } from '../../interfaces/movie.interface';

@Component({
  selector: 'movies-popular-movies',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class PopularMoviesComponent implements OnInit {

  public movies: Result[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {

    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
    })

  }

}
