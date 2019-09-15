import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questionsList;
  question;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getQuestions().subscribe(res => {
      this.questionsList = res;
    });
  }

}
