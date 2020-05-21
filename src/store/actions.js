import {
  getSlpData,
  addToCart as _addToCart,
  removeFromCart as _removeFromCart,
  addToFavList as _addToFavList,
  removeFromFavList as _removeFromFavList,
} from "../server";

import {
  SHOW_LOADER,
  HIDE_LOADER,
  GET_PRODTUCT_LIST_REQUEST,
  GET_PRODTUCT_LIST_SUCCESS,
  GET_PRODTUCT_LIST_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
  ADD_TO_FAV_REQUEST,
  ADD_TO_FAV_SUCCESS,
  ADD_TO_FAV_FAILURE,
  REMOVE_FROM_FAV_REQUEST,
  REMOVE_FROM_FAV_SUCCESS,
  REMOVE_FROM_FAV_FAILURE,
  COMMON_SORT_ORDER_CHANGE,
  COMMON_PROD_FILTER_CHANGE,
} from "./actionTypes";

export function getProducts(query) {
  return (dispatch) => {
    dispatch({ type: SHOW_LOADER });
    dispatch({ type: GET_PRODTUCT_LIST_REQUEST });

    return getSlpData(query)
      .then((resp) => {
        dispatch({ type: GET_PRODTUCT_LIST_SUCCESS, payload: resp.data });
      })
      .catch((err) => {
        dispatch({ type: GET_PRODTUCT_LIST_FAILURE, payload: err });
      })
      .then(() => {
        dispatch({ type: HIDE_LOADER });
      });
  };
}

export const showLoader = () => {
  return (dispatch) => dispatch({ type: SHOW_LOADER });
};

export const hideLoader = () => {
  return (dispatch) => dispatch({ type: HIDE_LOADER });
};

export const addToCart = (product) => {
  return (dispatch) => {
    dispatch({ type: SHOW_LOADER });
    dispatch({ type: ADD_TO_CART_REQUEST });

    return _addToCart(product)
      .then((resp) => {
        dispatch({ type: ADD_TO_CART_SUCCESS, payload: resp.data });
      })
      .catch((err) => {
        dispatch({ type: ADD_TO_CART_FAILURE, payload: err });
      })
      .then(() => {
        dispatch({ type: HIDE_LOADER });
      });
  };
};

export const removeFromCart = (product) => {
  return (dispatch) => {
    dispatch({ type: SHOW_LOADER });
    dispatch({ type: REMOVE_FROM_CART_REQUEST });

    return _removeFromCart(product)
      .then((resp) => {
        dispatch({ type: REMOVE_FROM_CART_SUCCESS, payload: resp.data });
      })
      .catch((err) => {
        dispatch({ type: REMOVE_FROM_CART_FAILURE, payload: err });
      })
      .then(() => {
        dispatch({ type: HIDE_LOADER });
      });
  };
};

export const addToFavList = (product) => {
  return (dispatch) => {
    dispatch({ type: SHOW_LOADER });
    dispatch({ type: ADD_TO_FAV_REQUEST });

    return _addToFavList(product)
      .then((resp) => {
        dispatch({ type: ADD_TO_FAV_SUCCESS, payload: resp.data });
      })
      .catch((err) => {
        dispatch({ type: ADD_TO_FAV_FAILURE, payload: err });
      })
      .then(() => {
        dispatch({ type: HIDE_LOADER });
      });
  };
};

export const removeFromFavList = (product) => {
  return (dispatch) => {
    dispatch({ type: SHOW_LOADER });
    dispatch({ type: REMOVE_FROM_FAV_REQUEST });

    return _removeFromFavList(product)
      .then((resp) => {
        dispatch({ type: REMOVE_FROM_FAV_SUCCESS, payload: resp.data });
      })
      .catch((err) => {
        dispatch({ type: REMOVE_FROM_FAV_FAILURE, payload: err });
      })
      .then(() => {
        dispatch({ type: HIDE_LOADER });
      });
  };
};

export const onChangeSortingOrder = (newSortOrderIndex = 0) => {
  return (dispatch) => {
    dispatch({ type: COMMON_SORT_ORDER_CHANGE, payload: newSortOrderIndex });
  };
};

export const onChangeProdFilter = (opt) => {
  return (dispatch) => {
    dispatch({ type: COMMON_PROD_FILTER_CHANGE, payload: opt });
  };
};
