import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import counter from "../pages/Counter/reducer";
import { inventory, spinner, cart, favList, common } from "./reducer";
import pdp from "../pages/PDP/reducer";

export default (history) =>
  combineReducers({
    counter,
    spinner,
    inventory,
    cart,
    favList,
    common,
    pdp,
    router: connectRouter(history),
  });
