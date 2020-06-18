// Settimeout
// Promise
// HTTP status codes
import _map from "lodash/map";

import { uuidv4 } from "./utils";
import { PRODUCTS_LIST } from "./db";

const delay = 2;

export function fetchService(url, opts = {}) {
  const req = {
    method: opts.method || "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "same-origin", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  };

  if (opts.method === "POST") {
    req.body = JSON.stringify(opts.data);
  }

  if (opts.query) {
    const params = _map(
      Object.keys(opts.query),
      (k) => `${k}=${encodeURIComponent(opts.query[k])}`
    );

    if (params.length) url += `?${params.join("&")}`;
  }

  return fetch(url, req).then((res) => res.json());
}

export function getInitialState() {
  return {
    cart: {
      inProgress: false,
      data: JSON.parse(localStorage.getItem("myCart") || "[]"),
      err: null,
    },
    favList: {
      inProgress: false,
      data: JSON.parse(localStorage.getItem("myFavList") || "[]"),
      err: null,
    },
    myAddresses: {
      inProgress: false,
      data: JSON.parse(localStorage.getItem("myAddress") || "[]"),
      err: null,
      deliveryAddress: JSON.parse(
        localStorage.getItem("paymentMethod") || "{}"
      ),
    },
    myCards: {
      inProgress: false,
      paymentMethod: JSON.parse(
        localStorage.getItem("deliveryAddress") || "{}"
      ),
      data: JSON.parse(localStorage.getItem("myCards") || "[]"),
      err: null,
    },
    cartData: {
      inProgress: false,
      data: JSON.parse(localStorage.getItem("cartData") || "[]"),
      err: null,
    },
    myOrders: {
      inProgress: false,
      data: JSON.parse(localStorage.getItem("myOrders") || "[]"),
      err: null,
    },
  };
}

export function register(profile) {
  return fetchService("/api/register", { method: "POST", data: profile });
}

export function login(profile) {
  return fetchService("/api/login", { method: "POST", data: profile });
}

export function forgotPassword(profile) {
  return fetchService("/api/forgotPassword", { method: "POST", data: profile });
}

export function getSlpData(query) {
  return fetchService("/api/inventory", {
    query,
  });
}

export function addToCart(product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let myCart = localStorage.getItem("myCart");
      let found = false;

      if (myCart) {
        myCart = JSON.parse(myCart);
      } else {
        myCart = [];
      }

      for (let i = 0; i < myCart.length; i++) {
        if (myCart[i].sku === product.sku) {
          const _qty = myCart[i].quantity + (product.quantity || 1);

          myCart[i].quantity = _qty;

          found = true;
          break;
        }
      }

      if (!found) {
        myCart.push({ sku: product.sku, quantity: product.quantity || 1 });
      }

      localStorage.setItem("myCart", JSON.stringify(myCart));

      return resolve({
        status: 200,
        data: myCart,
      });
    }, delay);
  });
}

export function removeFromCart(product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let myCart = JSON.parse(localStorage.getItem("myCart") || "[]");

      const newCart = [];
      for (let i = 0; i < myCart.length; i++) {
        if (myCart[i].sku !== product.sku) {
          newCart.push(myCart[i]);
        }
      }

      localStorage.setItem("myCart", JSON.stringify(newCart));

      return resolve({
        status: 200,
        data: newCart,
      });
    }, delay);
  });
}

export function addToFavList(product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let myFavList = localStorage.getItem("myFavList");

      if (myFavList) {
        myFavList = JSON.parse(myFavList);
      } else {
        myFavList = [];
      }

      myFavList.push(product.sku);

      localStorage.setItem("myFavList", JSON.stringify(myFavList));

      return resolve({
        status: 200,
        data: myFavList,
      });
    }, delay);
  });
}

export function removeFromFavList(product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let myFavList = JSON.parse(localStorage.getItem("myFavList") || "[]");

      const newFavList = [];
      for (let i = 0; i < myFavList.length; i++) {
        if (myFavList[i] !== product.sku) {
          newFavList.push(myFavList[i]);
        }
      }

      localStorage.setItem("myFavList", JSON.stringify(newFavList));

      return resolve({
        status: 200,
        data: newFavList,
      });
    }, delay);
  });
}

export function getPropductDetails(sku) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = PRODUCTS_LIST.find((item) => item.sku === sku);

      if (product) {
        return resolve({
          status: 200,
          data: product,
        });
      }

      return reject({
        status: 404,
        error: {
          message: "Product is not available",
        },
      });
    }, delay);
  });
}

export function getCartData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const myCart = JSON.parse(localStorage.getItem("myCart") || "[]");
      const cartData = _map(myCart, (product) => {
        const _product = PRODUCTS_LIST.find((item) => item.sku === product.sku);

        return {
          ..._product,
          availableQuantity: _product.quantity,
          quantity: product.quantity,
        };
      });

      localStorage.setItem("cartData", JSON.stringify(cartData));

      return resolve({
        status: 200,
        data: cartData,
      });
    }, delay);
  });
}

export function updateItemQuantity({ sku, updatedQty }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const myCart = JSON.parse(localStorage.getItem("myCart") || "[]");
      const cartData = _map(myCart, (product) => {
        const _product = PRODUCTS_LIST.find((item) => item.sku === product.sku);

        if (sku === product.sku) {
          return {
            ..._product,
            availableQuantity: _product.quantity,
            quantity: updatedQty,
          };
        }

        return {
          ..._product,
          availableQuantity: _product.quantity,
          quantity: product.quantity,
        };
      });

      localStorage.setItem("myCart", JSON.stringify(cartData));

      return resolve({
        status: 200,
        data: cartData,
      });
    }, delay);
  });
}

export function saveNewAddress(address) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let myAddress = JSON.parse(localStorage.getItem("myAddress") || "[]");

      address.key = uuidv4();

      if (address.gridCheckDefault) {
        myAddress = myAddress.map((addr) => ({
          ...addr,
          gridCheckDefault: false,
        }));
      }

      myAddress.push(address);

      localStorage.setItem("myAddress", JSON.stringify(myAddress));

      return resolve({
        status: 200,
        data: myAddress,
      });
    }, delay);
  });
}

export function updateAddress(address) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let myAddress = JSON.parse(localStorage.getItem("myAddress") || "[]");

      myAddress = myAddress.map((oldAddr) => {
        if (oldAddr.key === address.key) {
          return Object.assign(oldAddr, address);
        }

        return {
          ...oldAddr,
          gridCheckDefault: address.gridCheckDefault
            ? false
            : oldAddr.gridCheckDefault,
        };
      });

      localStorage.setItem("myAddress", JSON.stringify(myAddress));

      return resolve({
        status: 200,
        data: myAddress,
      });
    }, delay);
  });
}

export function deleteAddress(address) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const myAddress = JSON.parse(localStorage.getItem("myAddress") || "[]");

      const newAddrs = myAddress.filter((oldAddr) => {
        return oldAddr.key !== address.key;
      });

      localStorage.setItem("myAddress", JSON.stringify(newAddrs));

      return resolve({
        status: 200,
        data: newAddrs,
      });
    }, delay);
  });
}

export function saveNewCard(card) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const myCards = JSON.parse(localStorage.getItem("myCards") || "[]");

      card.key = uuidv4();

      // TODO: Keep one item as default at any point of time

      myCards.push(card);

      localStorage.setItem("myCards", JSON.stringify(myCards));

      return resolve({
        status: 200,
        data: myCards,
      });
    }, delay);
  });
}

export function updateCard(card) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const myCards = JSON.parse(localStorage.getItem("myCards") || "[]");

      // TODO: Keep one item as default at any point of time

      myCards.map((oldCard) => {
        if (oldCard.key === card.key) {
          Object.assign(oldCard, card);
        }
      });

      localStorage.setItem("myCards", JSON.stringify(myCards));

      return resolve({
        status: 200,
        data: myCards,
      });
    }, delay);
  });
}

export function deleteCard(card) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const myCards = JSON.parse(localStorage.getItem("myCards") || "[]");

      const newCards = myCards.filter((oldCard) => {
        return oldCard.key !== card.key;
      });

      localStorage.setItem("myCards", JSON.stringify(newCards));

      return resolve({
        status: 200,
        data: newCards,
      });
    }, delay);
  });
}
export function onSelectDelveryAddress(address) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      localStorage.setItem("deliveryAddress", JSON.stringify(address));

      return resolve({
        status: 200,
        data: address,
      });
    }, delay);
  });
}

export function setPaymentMethod(card) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      localStorage.setItem("paymentMethod", JSON.stringify(card));

      return resolve({
        status: 200,
        data: card,
      });
    }, delay);
  });
}

export function onPurchaseOrder(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const myOrders = JSON.parse(localStorage.getItem("myOrders") || "[]");

      myOrders.push(order);

      localStorage.setItem("myOrders", JSON.stringify(myOrders));
      localStorage.setItem("myCart", JSON.stringify([]));
      localStorage.setItem("cartData", JSON.stringify([]));

      return resolve({
        status: 200,
        data: myOrders,
      });
    }, delay);
  });
}
