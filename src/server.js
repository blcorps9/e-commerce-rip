// Settimeout
// Promise
// HTTP status codes
import _map from "lodash/map";

import { uuidv4 } from "./utils";
import { PRODUCTS_LIST } from "./db";

const delay = 2;

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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      profile.userId = uuidv4();

      localStorage.setItem("profile", JSON.stringify(profile));

      return resolve({
        status: 200,
        data: {
          message: "Your profile has been created successfully.",
          profile: {
            email: profile.email,
            username: profile.username,
            userId: profile.userId,
          },
        },
      });
    }, delay);
  });
}

export function login(profile) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const _profile = JSON.parse(localStorage.getItem("profile"));

      if (
        _profile.username === profile.username &&
        _profile.password === profile.password
      ) {
        return resolve({
          status: 200,
          data: {
            message: "You are logged in successfully.",
            profile: {
              email: _profile.email,
              username: _profile.username,
              userId: _profile.userId,
            },
          },
        });
      }

      return reject({
        status: 401,
        data: {
          message: "Your username and/or password is wrong.",
          profile: {},
        },
      });
    }, delay);
  });
}

export function forgotPassword(profile) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const _profile = JSON.parse(localStorage.getItem("profile"));

      return resolve({
        status: 200,
        data: {
          message:
            "Your temporary profile password is sent to your registered email.",
          profile: {
            email: _profile.email,
            username: _profile.username,
            userId: _profile.userId,
            password: _profile.password,
          },
        },
      });
    }, delay);
  });
}

export function getSlpData(query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let productList = PRODUCTS_LIST;

      if (query) {
        const _query = query.toLowerCase();

        productList = PRODUCTS_LIST.filter((product) => {
          const { name, tags, categories } = product;
          const _tags = tags.join(" ");
          const _categories = categories.join(" ");
          const _queryStr = `${name} ${_tags} ${_categories}`.toLowerCase();

          return _queryStr.indexOf(_query) > -1;
        });
      }

      return resolve({
        status: 200,
        data: productList,
      });
    }, delay);
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
