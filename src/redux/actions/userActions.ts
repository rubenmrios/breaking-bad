import { userQuoteTypes } from "../actiontypes";
import { usersTypes,userDetailTypes } from "../actiontypes/usersActionTypes";
import {
  FetchUsersRequest,
  FetchUsersSuccess,
  FetchUsersFailurePayload,
  FetchUsersFailure,
  FetchUserDetailRequest,
  FetchUserDetailSuccess,
  FetchUsersSuccessPayload,
  FetchUserDetailSuccessPayload,
  FetchUserDetailFailure,
  FetchUserQuoteRequest,
  FetchUserQuoteSuccess,
  FetchUserQuoteSuccessPayload,
  FetchUserQuoteFailure,
  FetchUserQuoteFailurePayload
} from "../types/userTypes";

//Users
export const fetchUsersRequest = (): FetchUsersRequest => ({
  type: usersTypes.FETCH_USER_REQUEST
});

export const fetchUsersSuccess = (
  payload: FetchUsersSuccessPayload
): FetchUsersSuccess => ({
  type: usersTypes.FETCH_USER_SUCCESS,
  payload
});

export const fetchUsersFailure = (
  payload: FetchUsersFailurePayload
): FetchUsersFailure => ({
  type: usersTypes.FETCH_USER_FAILURE,
  payload
});

//User detail
export const fetchUserDetailRequest = (payload): FetchUserDetailRequest => ({
  type: userDetailTypes.FETCH_USER_DETAIL_REQUEST,
  payload
});

export const fetchUserDetailSuccess = (
  payload: FetchUserDetailSuccessPayload
): FetchUserDetailSuccess => ({
  type: userDetailTypes.FETCH_USER_DETAIL_SUCCESS,
  payload
});

export const fetchUserDetailFailure = (
  payload: FetchUsersFailurePayload
): FetchUserDetailFailure => ({
  type: userDetailTypes.FETCH_USER_DETAIL_FAILURE,
  payload
});

//User Quote
export const fetchUserQuoteRequest = (payload): FetchUserQuoteRequest => ({
  type: userQuoteTypes.FETCH_USER_QUOTE_REQUEST,
  payload
});

export const fetchUserQuoteSuccess = (
  payload: FetchUserQuoteSuccessPayload
): FetchUserQuoteSuccess => ({
  type: userQuoteTypes.FETCH_USER_QUOTE_SUCCESS,
  payload
});

export const fetchUserQuoteFailure = (
  payload: FetchUserQuoteFailurePayload
): FetchUserQuoteFailure => ({
  type: userQuoteTypes.FETCH_USER_QUOTE_FAILURE,
  payload
});