import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../Services/movie-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  //title = 'movie-app';
  MyMovies: any = [];
  constructor(private movieService: MovieServiceService) {
   
      }

  ngOnInit() {
    this.movieService.GetMovieInformation().subscribe((data) => {
      this.MyMovies = data.Search;
      console.log(this.MyMovies);
    
  })

}
}