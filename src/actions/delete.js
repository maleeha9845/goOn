import {DELETE_API_REQUEST } from '../actiontypes/delete.js'

const deleteApiRequest = data => ({
  type: DELETE_API_REQUEST,
  payload: data,
});

export default deleteApiRequest;
