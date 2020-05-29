import {
  SAVE_NEW_ADDRESS_REQUEST,
  SAVE_NEW_ADDRESS_SUCCESS,
  SAVE_NEW_ADDRESS_FAILURE,
  UPDATE_ADDRESS_REQUEST,
  UPDATE_ADDRESS_SUCCESS,
  UPDATE_ADDRESS_FAILURE,
  DELETE_ADDRESS_REQUEST,
  DELETE_ADDRESS_SUCCESS,
  DELETE_ADDRESS_FAILURE,
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
    case UPDATE_ADDRESS_REQUEST:
      return { ...state, inProgress: true };
    case UPDATE_ADDRESS_SUCCESS:
      return {
        ...state,
        inProgress: false,
        data: action.payload,
      };
    case UPDATE_ADDRESS_FAILURE:
      return {
        ...state,
        inProgress: false,
        err: action.payload,
      };
    case DELETE_ADDRESS_REQUEST:
      return { ...state, inProgress: true };
    case DELETE_ADDRESS_SUCCESS:
      return {
        ...state,
        inProgress: false,
        data: action.payload,
      };
    case DELETE_ADDRESS_FAILURE:
      return {
        ...state,
        inProgress: false,
        err: action.payload,
      };
    default:
      return state;
  }
}
