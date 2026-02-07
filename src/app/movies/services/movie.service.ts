import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Movie, Result } from '../interfaces/movie.interface';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class MovieService {

  private baseUrl: string = environment.tmdb.baseUrl;

  private headers = new HttpHeaders()
    .set('Authorization', `Bearer ${environment.tmdb.apiToken}`)
    .set('Accept', 'application/json');

  public moviesList: Result[] = [];

  constructor(private httpClient: HttpClient) { }

  public searchMovieById(movieId: number): Observable<Result | null> {

    const url: string = `${this.baseUrl}/movie/${movieId}`;

    return this.httpClient.get<Result>(
      url,
      {
        headers: this.headers
      })
      .pipe(
        catchError( () => of (null))
      )

  }

  public getMovies(): Observable<Result[]> {

    const params = new HttpParams()
      .set("include_adult", false)
      .set("include_video", false)
      .set("language", "en-US")
      .set("page", 1)
      .set("sort_by", "popularity.desc")

    const url: string = `${this.baseUrl}/discover/movie`

    return this.httpClient.get<Movie>(
      url,
      {
        params,
        headers: this.headers
      })
      .pipe(
        map(resp => resp.results)
      )

  }

  public searchMovies(movieTitle: string): Observable<Result[]> {
    const params = new HttpParams()
    .set("query", movieTitle)

    const url: string = `${this.baseUrl}/search/movie`;

    return this.httpClient.get<Movie>(
      url,
      {
        params,
        headers: this.headers
      })
      .pipe(
        map(resp => resp.results)
      )

  }

}
