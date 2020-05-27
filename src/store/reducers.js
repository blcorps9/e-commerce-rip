import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import counter from "../pages/Counter/reducer";
import { inventory, spinner, cart, favList, common } from "./reducer";
import pdp from "../pages/PDP/reducer";
import cartData from "../pages/Cart/reducer";
import myAddresses from "../pages/DeliveryPage/reducer";

export default (history) =>
  combineReducers({
    counter,
    spinner,
    inventory,
    cart,
    favList,
    common,
    pdp,
    cartData,
    myAddresses,
    router: connectRouter(history),
  });
