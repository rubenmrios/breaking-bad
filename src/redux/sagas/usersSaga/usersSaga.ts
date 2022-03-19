import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IUser,IQuote } from "../../models";
import {
  fetchUsersSuccess,
    fetchUsersFailure,
    fetchUserDetailSuccess,
    fetchUserDetailFailure,
    fetchUserQuoteSuccess,
    fetchUserQuoteFailure
} from "../../actions/userActions";
import { usersTypes,userDetailTypes,userQuoteTypes } from "../../actiontypes";

type UserDetail = {
  payload: string
  type: string
}
type Quote = {
  payload: string
  type: string
}
const getUsers = async () =>{
   const response= await axios.get<IUser[]>("https://www.breakingbadapi.com/api/characters");

   return response
};
const getUserDetail = async (payload):Promise<IUser> =>{
  console.log(payload)

  const {data}= await axios.get<IUser>(`https://www.breakingbadapi.com/api/characters/${payload.payload}`);
   return data
};
const getUserQuote = async (payload):Promise<IQuote> =>{
    const {data}= await axios.get<IQuote>(`https://www.breakingbadapi.com/api/quote/random?author=${payload.payload.name}`);
    return data

};

function* fetchUsersSaga() {

  try {
    let {data} = yield call(getUsers);
    yield put(
        fetchUsersSuccess({
        users: data
      })
    );
  } catch (error) {
    yield put(
        fetchUsersFailure({
        error: 'Error, no se ha podido cargar la página'
      })
    );
  }
}
function* fetchUserDetailSaga(payload:UserDetail){

  try {
    let data = yield call(getUserDetail,payload);

    yield put(
      fetchUserDetailSuccess({
        user: data
      })
    );
  } catch (error) {
    yield put(
      fetchUserDetailFailure({
        error: 'Error, no se ha podido cargar la página'
      })
    );
  }
}
function* fetchUserQuoteSaga(payload:Quote) {
  try {
    let data = yield call(getUserQuote,payload);
    yield put(
      fetchUserQuoteSuccess({
        quote: data
      })
    );
  } catch (error) {
    yield put(
      fetchUserQuoteFailure({
        error: 'Error, no se ha podido cargar la página'
      })
    );
  }
}

function* usersSaga() {
  yield all([takeLatest(usersTypes.FETCH_USER_REQUEST, fetchUsersSaga)]);
  yield all([takeLatest(userDetailTypes.FETCH_USER_DETAIL_REQUEST, fetchUserDetailSaga)]);
  yield all([takeLatest(userQuoteTypes.FETCH_USER_QUOTE_REQUEST, fetchUserQuoteSaga)]);
  
}

export default usersSaga;
