type IMessageResponse = {
  message: string;
};
type IErrorMessageResponse = {
  error: {
    message: string;
  };
};
type IErrorsResponse = {
  errors: string[];
};

export type IErrorResponseData =
  | IMessageResponse
  | IErrorMessageResponse
  | IErrorsResponse;
