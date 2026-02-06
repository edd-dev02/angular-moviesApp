import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { switchMap } from 'rxjs';
import { Result } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.css'
})
export class MoviePageComponent implements OnInit {

  public movie?: Result;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MovieService,
    private rotuer: Router,
  ) {}

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}: Params)  => this.moviesService.searchMovieById(id)),
      )
      .subscribe( movie => {
        if(!movie) {
          console.log("No hay pelicula");
          return this.rotuer.navigateByUrl("");
        }

        console.log("Tenemos pelicula");
        return this.movie = movie;
      })

  }



}
