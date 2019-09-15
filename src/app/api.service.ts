import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  postQuestion(question) {
    this.httpClient.post('', question).subscribe(res => {
      console.log(res);
    });
  }
}
