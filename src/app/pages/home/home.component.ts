import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/service/http.service';
import { Theme } from 'src/app/shared/question';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpService) {  }

  optionsTheme$: Observable<string[]>
  questions$: Observable<Theme[]>

  ngOnInit(): void {
    this.fetchOptionThemes();
    this.fetchQuestions();
  }

  private fetchOptionThemes() {
    this.optionsTheme$ = this.httpService.listAllThemes();

  }

  private fetchQuestions() {
    this.questions$ = this.httpService.listQuestions();
  }

  listAllThemes() {
    this.fetchOptionThemes();
    // return this.httpService.listAllThemes().subscribe();
  }

  // listQuestionsByTheme(id: number) {
  //   return this.httpService.listQuestionByTheme(id);
  // }

}
