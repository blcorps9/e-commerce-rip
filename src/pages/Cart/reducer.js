import {
  GET_CART_DATA_REQUEST,
  GET_CART_DATA_SUCCESS,
  GET_CART_DATA_FAILURE,
} from "./actions";

const initCartDataState = {
  inProgress: false,
  data: [],
  error: null,
};
export default function cartData(state = initCartDataState, action) {
  switch (action.type) {
    case GET_CART_DATA_REQUEST:
      return { ...state, inProgress: true };
    case GET_CART_DATA_SUCCESS:
      return {
        ...state,
        inProgress: false,
        data: action.payload,
      };
    case GET_CART_DATA_FAILURE:
      return {
        ...state,
        inProgress: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
