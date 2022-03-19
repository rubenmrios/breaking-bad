import { usersTypes, userDetailTypes, userQuoteTypes } from "../../actiontypes";
import { UsersActions, UsersState } from "../../types/userTypes";

const initialState: UsersState = {
  pending: false,
  users: [],
  user: [],
  quote: [],
  error: "",
};

export const userReducer = (state = initialState, action: UsersActions) => {

  switch (action.type) {
    case usersTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case usersTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        users: action.payload.users,
        error: null,
      };
    case usersTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        pending: false,
        users: [],
        error: action.payload.error,
      };
    case userDetailTypes.FETCH_USER_DETAIL_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case userDetailTypes.FETCH_USER_DETAIL_SUCCESS:
      return {
        ...state,
        pending: false,
        user: action.payload.user,
        error: null,
      };
    case userDetailTypes.FETCH_USER_DETAIL_FAILURE:
      return {
        ...state,
        pending: false,
        user: [],
        error: action.payload.error,
      };
    case userQuoteTypes.FETCH_USER_QUOTE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case userQuoteTypes.FETCH_USER_QUOTE_SUCCESS:
      return {
        ...state,
        pending: false,
        quote: action.payload.quote,
        error: null,
      };
    case userQuoteTypes.FETCH_USER_QUOTE_FAILURE:
      return {
        ...state,
        pending: false,
        quote: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
