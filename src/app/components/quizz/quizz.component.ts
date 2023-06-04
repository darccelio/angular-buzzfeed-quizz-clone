import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnswerOption, Theme } from 'src/app/shared/question';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
})
export class QuizzComponent implements OnInit {
  title: string = '';


  answers: string[] = [];
  answerSelected: string = '';

  questionIndex: number = 0;
  questionMaxIndex: number = 0;
  finished: boolean = false;

  @Input() optionsTheme: string[] | null;
  @Input() dinamicQuestions: Theme[] | null;
  selectForm: FormGroup;
  themeIndexSelected: number = -1;
  themeSelected: Theme;
  // questionSelectedDinamic: number;
  answerOptionsDinamic: AnswerOption[];

  finalResult: string | undefined;

  constructor(private fb: FormBuilder) {
    this.selectForm = this.fb.group({
      select: '',
    });
  }

  ngOnInit(): void {
    this.questionIndex = 0;
    this.finished = false;

    this.selectForm.valueChanges.subscribe(({ select }) => {
      const index = Number(select);
      this.questionMaxIndex = this.dinamicQuestions![index].questions.length;
    });
  }

  changeTheme() {
    if (this.dinamicQuestions) {
      this.themeIndexSelected = Number(this.selectForm.value.select);

      this.themeSelected = this.dinamicQuestions[this.themeIndexSelected];
      this.answerOptionsDinamic =
        this.themeSelected.questions[this.questionIndex].options;
    }
  }

  playerChoose(value: string) {
    this.answers.push(value);
    this.nextStep();
  }

  async nextStep() {
    this.questionIndex += 1;

    if (this.questionMaxIndex > this.questionIndex) {
      this.answerOptionsDinamic =
        this.themeSelected.questions[this.questionIndex].options;
    } else {
      const finalAnswer: string = await this.checkResult(this.answers);

      this.finished = true;
      this.finalResult =
        this.themeSelected.results[
          finalAnswer as keyof typeof this.themeSelected.results
        ];
    }
  }

  async checkResult(anwsers: string[]) {
    const result = anwsers.reduce((previous, current, i, arr) => {
      if (
        arr.filter((item) => item === previous).length >
        arr.filter((item) => item === current).length
      ) {
        return previous;
      } else {
        return current;
      }
    });

    return result;
  }

  reset() {
    this.themeIndexSelected = -1;
    this.finished = false;
    this.answers = [];
    this.questionIndex = 0;
    this.selectForm.reset({
      select: '',
    });
    this.selectForm.markAsPristine({ onlySelf: true });
    this.selectForm.markAsUntouched();
  }
}
