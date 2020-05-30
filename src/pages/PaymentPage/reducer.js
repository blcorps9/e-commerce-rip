import {
  SAVE_NEW_CARD_REQUEST,
  SAVE_NEW_CARD_SUCCESS,
  SAVE_NEW_CARD_FAILURE,
  UPDATE_CARD_REQUEST,
  UPDATE_CARD_SUCCESS,
  UPDATE_CARD_FAILURE,
  DELETE_CARD_REQUEST,
  DELETE_CARD_SUCCESS,
  DELETE_CARD_FAILURE,
} from "./actions";

const initAddrState = {
  inProgress: false,
  data: [],
  err: null,
};

export default function myCards(state = initAddrState, action) {
  switch (action.type) {
    case SAVE_NEW_CARD_REQUEST:
      return { ...state, inProgress: true };
    case SAVE_NEW_CARD_SUCCESS:
      return {
        ...state,
        inProgress: false,
        data: action.payload,
      };
    case SAVE_NEW_CARD_FAILURE:
      return {
        ...state,
        inProgress: false,
        err: action.payload,
      };
    case UPDATE_CARD_REQUEST:
      return { ...state, inProgress: true };
    case UPDATE_CARD_SUCCESS:
      return {
        ...state,
        inProgress: false,
        data: action.payload,
      };
    case UPDATE_CARD_FAILURE:
      return {
        ...state,
        inProgress: false,
        err: action.payload,
      };
    case DELETE_CARD_REQUEST:
      return { ...state, inProgress: true };
    case DELETE_CARD_SUCCESS:
      return {
        ...state,
        inProgress: false,
        data: action.payload,
      };
    case DELETE_CARD_FAILURE:
      return {
        ...state,
        inProgress: false,
        err: action.payload,
      };
    default:
      return state;
  }
}
