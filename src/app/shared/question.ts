export interface Theme {
  theme: string;
  id: number;
  title: string;
  questions: Question[];
  results: Result;
}

export interface Question {
  id: number;
  question: string;
  options: AnswerOption[];
}

export interface AnswerOption {
  id: number;
  name: string;
  alias: string;
}

export interface Result {
  A?: string;
  B?: string;
  C?: string;
  D?: string;
  E?: string;
}
