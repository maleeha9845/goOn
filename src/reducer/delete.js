import { DELETE_API_REQUEST, DELETE_API_SUCCESS, DELETE_API_FAILURE} from "../actiontypes/delete.js";

const initialState = {
  fetch: false,
  data : null,
  errors: null,
}

const delete01 = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_API_REQUEST:
      return { ...state, fetch: true, data: action.payload};
    case DELETE_API_SUCCESS:
      return {
        ...state, fetch: false, data: action.payload
      };
    case DELETE_API_FAILURE:
      return {};
  default:
      return state;

  }
};


export default delete01;
