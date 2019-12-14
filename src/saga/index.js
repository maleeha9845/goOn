import { all, takeLatest, takeEvery} from 'redux-saga/effects';

// saga Workers

import deleteApiWorker from './delete.js';

//  action actiontypes

import { DELETE_API_REQUEST } from "../actiontypes/delete.js";

export default function* rootSaga(){
  yield all([

    yield takeLatest(DELETE_API_REQUEST, deleteApiWorker),
  ])
}
