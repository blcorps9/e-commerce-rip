import { saveNewAddress as _saveNewAddress } from "../../server";

export const SAVE_NEW_ADDRESS_REQUEST = "SAVE_NEW_ADDRESS_REQUEST";
export const SAVE_NEW_ADDRESS_SUCCESS = "SAVE_NEW_ADDRESS_SUCCESS";
export const SAVE_NEW_ADDRESS_FAILURE = "SAVE_NEW_ADDRESS_FAILURE";

export const saveNewAddress = (address) => {
  return (dispatch) => {
    dispatch({ type: SAVE_NEW_ADDRESS_REQUEST });

    return _saveNewAddress(address)
      .then((resp) => {
        dispatch({ type: SAVE_NEW_ADDRESS_SUCCESS, payload: resp.data });
      })
      .catch((err) => {
        dispatch({ type: SAVE_NEW_ADDRESS_FAILURE, payload: resp.error });
      });
  };
};
