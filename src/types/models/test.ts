export type QuestionType = 'input' | 'select';
export type QuestionOptionType = {
  id: number;
  value: string;
};

export interface QuestionSample {
  id: number;
  title: string;
  value?: number | string;
  type: QuestionType;
  options?: QuestionOptionType[];
}

export interface AnswerSample {
  id: number;
  value: number | string;
}

export interface Archetype {
  id: number;
  title: string;
  type: string;
  description: string;
  image: string;
}
