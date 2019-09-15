import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  getQuestions() {
    return this.httpClient.get('https://localhost:44308/api/questions/');
  }
  postQuestion(question) {
    this.httpClient.post('https://localhost:44308/api/questions/', question).subscribe(res => {
      console.log(res);
    });
  }
}
