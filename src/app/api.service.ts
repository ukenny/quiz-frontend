import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();

  constructor(private httpClient: HttpClient) { }

  getQuestions() {
    return this.httpClient.get('https://localhost:44308/api/questions/');
  }

  getQuizzes() {
    return this.httpClient.get('https://localhost:44308/api/Quizzes/');
  }

  postQuestion(question) {
    this.httpClient.post('https://localhost:44308/api/questions/', question).subscribe(res => {
      console.log(res);
    });
  }

  putQuestion(question) {
    this.httpClient.put(`https://localhost:44308/api/questions/${question.id}`, question).subscribe(res => {
      console.log(res);
    });
  }

  postQuiz(quiz) {
    this.httpClient.post(`https://localhost:44308/api/quizzes/`, quiz).subscribe(res => {
      console.log(res);
    });
  }

  putQuiz(quiz) {
    this.httpClient.put(`https://localhost:44308/api/quizzes/${quiz.id}`, quiz).subscribe(res => {
      console.log(res);
    })
  }

  selectQuestion(question) {
    this.selectedQuestion.next(question);
  }

  selectQuiz(quiz) {
    this.selectedQuiz.next(quiz);
  }
}
