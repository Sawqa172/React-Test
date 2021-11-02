export interface QuestionCategoryType {
  id: number;
  title: string;
  slug: string;
  questions: Array<QuestionItemType>;
}

export interface QuestionItemType {
  id: number;
  question: string;
  answer: string;
}
