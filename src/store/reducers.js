import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import counter from "../pages/Counter/reducer";
import { inventory, spinner, cart } from "./reducer";

export default (history) =>
  combineReducers({
    counter,
    spinner,
    inventory,
    cart,
    router: connectRouter(history),
  });
