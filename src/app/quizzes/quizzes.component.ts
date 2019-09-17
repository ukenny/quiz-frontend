import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {

  quiz = {};
  quizzes;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getQuizzes().subscribe( res => {
      this.quizzes = res;
    });
  }

}
