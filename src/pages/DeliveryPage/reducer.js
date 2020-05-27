import {
  SAVE_NEW_ADDRESS_REQUEST,
  SAVE_NEW_ADDRESS_SUCCESS,
  SAVE_NEW_ADDRESS_FAILURE,
} from "./actions";

const initAddrState = {
  inProgress: false,
  data: [],
  err: null,
};

export default function myAddresses(state = initAddrState, action) {
  switch (action.type) {
    case SAVE_NEW_ADDRESS_REQUEST:
      return { ...state, inProgress: true };
    case SAVE_NEW_ADDRESS_SUCCESS:
      return {
        ...state,
        inProgress: false,
        data: action.payload,
      };
    case SAVE_NEW_ADDRESS_FAILURE:
      return {
        ...state,
        inProgress: false,
        err: action.payload,
      };
    default:
      return state;
  }
}
