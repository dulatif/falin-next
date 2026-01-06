import { AxiosError } from "axios";
import { ReactNode } from "react";

export type ID = number | null;
export type TMuiColor = "primary" | "error" | "success" | "warning" | "info";
export type LocaleName = {
  en: string;
  ko: string;
};
export type TModalAction = "add" | "edit" | "delete" | "accept" | "reject";
export type TSortOrder = "asc" | "desc";

// # error types
export interface ApiResponseError {
  message: string;
  statusCode: number;
}
export type TApiError = Error | AxiosError | ApiResponseError;

export interface MutationParams<TData, TVariables> {
  onSuccess?:
    | ((data: TData, variables: TVariables, context: unknown) => unknown)
    | undefined;
  onError?:
    | ((error: TApiError, variables: TVariables, context: unknown) => unknown)
    | undefined;
}

export interface DeleteDataResponse {
  message: string;
}
export interface DeleteDataMutationParams
  extends MutationParams<DeleteDataResponse, ID> {}

export interface PaginationParams {
  paginate?: 0 | 1;
  page?: number;
  per_page?: number;
  search?: string;
}
export interface PaginationResponse<TData> {
  data: TData[];
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
  };
}

export type SelectOption<TValue> = {
  label: string | ReactNode;
  value: TValue;
};

// 1. Icon Upload
export interface IconUploadFormValues {
  icon: File | null;
}
export interface IconUploadResponse {
  icon_id: string;
}
export interface IconUploadMutationParams
  extends MutationParams<IconUploadResponse, IconUploadFormValues> {}
