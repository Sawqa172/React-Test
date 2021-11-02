/*
 * State
 */
import { QuestionCategoryType } from 'types/models/question';

export interface FaqState {
  list: {
    data: QuestionCategoryType[];
    loading: boolean;
    done: boolean;
    error?: unknown | null;
  };
  feedback: {
    loading: boolean;
    done: boolean;
    error?: unknown | null;
  };
}

/*
 * Reducers
 */
export type FetchListPayloadSuccessType = QuestionCategoryType[];
export type FetchListPayloadErrorType = unknown | null;

export type SendFeedbackPayloadTriggerType = {
  email: string;
  message: string;
};
export type SendFeedbackPayloadFailedType = unknown | null;

/*
 * Services
 */
export type PostFeedbackPayload = {
  email: string;
  message: string;
};
