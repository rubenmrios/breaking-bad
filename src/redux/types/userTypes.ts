import { IUser,IQuote } from "../models";
import { usersTypes, userDetailTypes,userQuoteTypes } from "../actiontypes";



//Users
export interface FetchUsersSuccessPayload {
  users: IUser[];
}

export interface FetchUsersFailurePayload {
  error: string;
}

export interface FetchUsersRequest {
  type: typeof usersTypes.FETCH_USER_REQUEST;
}

export type FetchUsersSuccess = {
  type: typeof usersTypes.FETCH_USER_SUCCESS;
  payload: FetchUsersSuccessPayload;
};

export type FetchUsersFailure = {
  type: typeof usersTypes.FETCH_USER_FAILURE;
  payload: FetchUsersFailurePayload;
};

//User detail
export interface FetchUserDetailSuccessPayload {
  user: IUser[];
}
export interface FetchUserDetailRequest {
  type:  userDetailTypes.FETCH_USER_DETAIL_REQUEST,
  payload:number
}

export type FetchUserDetailSuccess = {
  type: typeof userDetailTypes.FETCH_USER_DETAIL_SUCCESS;
  payload: FetchUserDetailSuccessPayload;
};

export type FetchUserDetailFailure = {
  type: typeof userDetailTypes.FETCH_USER_DETAIL_FAILURE;
  payload: FetchUsersFailurePayload;
};

//User Quote
export interface FetchUserQuoteSuccessPayload {
  quote: IQuote[];
}
export interface FetchUserQuoteRequest {
  type: typeof userQuoteTypes.FETCH_USER_QUOTE_REQUEST,
  payload:string
}

export type FetchUserQuoteSuccess = {
  type: typeof userQuoteTypes.FETCH_USER_QUOTE_SUCCESS;
  payload: FetchUserQuoteSuccessPayload;
};

export interface FetchUserQuoteFailurePayload {
  error: string;
}

export type FetchUserQuoteFailure = {
  type: typeof userQuoteTypes.FETCH_USER_QUOTE_FAILURE;
  payload: FetchUserQuoteFailurePayload;
};

export type UsersActions =
  | FetchUsersRequest
  | FetchUsersSuccess
  | FetchUsersFailure
  | FetchUserDetailRequest
  | FetchUserDetailSuccess
  | FetchUserDetailFailure
  | FetchUserQuoteRequest
  | FetchUserQuoteSuccess
  | FetchUserQuoteFailure;
