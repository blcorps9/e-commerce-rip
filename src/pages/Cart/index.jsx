import React, { Component } from "react";
import _get from "lodash/get";
import _sampleSize from "lodash/sampleSize";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import cx from "classnames";

import Placeholder from "../../components/Svgs/Placeholder";
import Colors from "../../components/Colors";
import Prices from "../../components/Prices";

import { removeFromCart } from "../../store/actions";
import { getCartData } from "./actions";

class CartPage extends Component {
  componentDidMount() {
    this.props.getCartData();
  }

  removeFromCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const sku = e.currentTarget.getAttribute("data-sku");
    this.props.removeFromCart({ sku }).then(this.props.getCartData);
  };

  render() {
    const { cartData } = this.props;
    const itemCount = cartData.length;

    if (itemCount === 0) {
      return (
        <div className="cart-page row mb-4">
          <div className="col-10 offset-1">
            <div className="card">
              <div className="card-header text-center">
                You cart is empty.
                <br />
                <Link to="/">Click to continue shoping.</Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="cart-page row mb-4">
        <div className="col-10 offset-1">
          <div className="card">
            <div className="card-header">Cart Items</div>
            <div className="cart-item-container">
              {cartData.map((item, index) => {
                const color = _sampleSize(item.colors, 1)[0];

                return (
                  <div
                    className={cx(
                      "p-2 row d-flex justify-content-between align-items-center border-secondary",
                      { "border-bottom": itemCount !== index + 1 }
                    )}
                    key={item.sku}
                  >
                    <div className="col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2">
                      <Link to={item.landingPageUrl}>
                        <Placeholder height="100" />
                      </Link>
                    </div>
                    <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3">
                      <Link to={item.landingPageUrl}>{item.name}</Link>
                    </div>
                    <div className="col-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
                      <Colors sku={item.sku} colors={[color]} />
                      <span>{color.name}</span>
                    </div>
                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                      {item.quantity}
                    </div>
                    <div className="col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                      <Prices
                        price={item.price}
                        salePrice={item.salePrice}
                        addLineBreak
                      />
                    </div>
                    <div className="col-5 col-sm-5 col-md-2 col-lg-2 col-xl-2">
                      <button
                        onClick={this.removeFromCart}
                        data-sku={item.sku}
                        className="btn btn-primary mx-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    cart: _get(state, "cart.data", []),
    cartData: _get(state, "cartData.data"),
  }),
  {
    removeFromCart,
    getCartData,
  }
)(CartPage);
