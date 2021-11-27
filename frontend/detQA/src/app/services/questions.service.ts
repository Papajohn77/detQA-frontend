import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Question } from '../models/Question';
import { environment, Endpoint } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private questionsUrl = `${environment.baseUrl}/${Endpoint.Questions}`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl);
  }

  postQuestion(question: any): void {
    this.http
      .post(this.questionsUrl, question, this.httpOptions)
      .pipe(retry(3))
      .subscribe({
        error: () => {
          console.log('The POST request failed to complete!');
        },
      });
  }
}
