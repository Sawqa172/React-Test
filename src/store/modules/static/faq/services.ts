import { $apiClient } from 'utils/request';
import { PostFeedbackPayload } from './types';

export function getListData() {
  const url = 'api/v1/page/faq';

  return $apiClient.get(url);
}

export function postFeedbackData(payload: PostFeedbackPayload) {
  const url = 'api/v1/feedback';

  return $apiClient.post(url, payload);
}
