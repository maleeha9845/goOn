import { put } from 'redux-saga/effects';
import firebase from 'firebase';
import firebaseConfig from '../index';
import { DELETE_API_SUCCESS, DELETE_API_FAILURE} from "../actiontypes/delete.js";

function deleteApi(data){
  console.log(data);
}

export default function* deleteApiWorker(action){
  try{
    const response = yield deleteApi(action.payload);
    yield put({ type: DELETE_API_SUCCESS, payload: response });
  }catch (error){
    yield put({ type: DELETE_API_FAILURE, error });
  }
}
