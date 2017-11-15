import { Component, OnInit } from '@angular/core';
import {MovieService} from './../movie.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {

  movieId: number;
  movie: object;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
    ) {}

  ngOnInit() {
    // this.route.params.subscribe((params) => {
    //   this.movie = this.movieService.getMovie(+params['id']);
    // })
    this.route.params.subscribe((params)=> this.movieId = Number(params['id']));
    this.movie = this.movieService.getMovie(this.movieId);
    }



}
