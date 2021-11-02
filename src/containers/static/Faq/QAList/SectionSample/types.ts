import { QuestionItemType } from 'types/models/question';

export interface Props extends QuestionItemType {
  className?: string;
}

/*
 * Styles
 */
export interface QuestionIconProps {
  isToggled: boolean;
}

export interface AnswerProps {
  isToggled: boolean;
}
