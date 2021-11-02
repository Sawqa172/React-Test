/**
 * Utils State
 */
export interface UtilsState {
  file: {
    data: string | null;
    loading: boolean;
    done: boolean;
    error?: unknown | null;
  };
}

/**
 * Reducers
 */
export type UploadFileTriggerPayload = FormData;

export type UploadFileSuccessPayload = string;
export type UploadFileFailurePayload = unknown | null;

/**
 * Services
 */

export type PostFileServicePayload = FormData;
