import React, { Component } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import _get from "lodash/get";
import _map from "lodash/map";
import _remove from "lodash/remove";
import _isEqual from "lodash/isEqual";
import _unionBy from "lodash/unionBy";
import _intersection from "lodash/intersection";

import {
  getProducts,
  onChangeSortingOrder,
  onChangeProdFilter,
} from "../../store/actions";

import ProductCard from "../../components/ProductCard";

import { getSorted } from "../../utils";

import { SIZES, COLORS } from "../../db";
import { SORT_ORDERS } from "../../config";

class Home extends Component {
  constructor(props) {
    super(props);

    const currentSortOrder = props.common.currentSortOrder || 0;
    const sortMeta = SORT_ORDERS[currentSortOrder];

    this.state = {
      isSortMenuOpen: false,
      currentSortOrder: currentSortOrder,
      currentFilters: {},
      inventory: getSorted(
        props.inventory || [],
        sortMeta.prop,
        sortMeta.order
      ),
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (
      props.common.currentSortOrder !== state.currentSortOrder ||
      state.inventory.length === 0
    ) {
      const sortMeta = SORT_ORDERS[props.common.currentSortOrder];

      return {
        inventory: getSorted(
          props.inventory || [],
          sortMeta.prop,
          sortMeta.order
        ),
        currentSortOrder: props.common.currentSortOrder,
      };
    }

    if (!_isEqual(props.common.filterOpts, state.filterOpts)) {
      const filteredSizes = props.common.filterOpts.size;
      const filteredBySize = props.inventory.filter((item) => {
        return (
          _intersection(filteredSizes, _map(item.sizes, "short")).length > 0
        );
      });

      const filteredColors = props.common.filterOpts.color;
      const filteredByColor = props.inventory.filter((item) => {
        return (
          _intersection(filteredColors, _map(item.colors, "name")).length > 0
        );
      });

      return {
        currentFilters: props.common.filterOpts,
        inventory: _unionBy(filteredBySize, filteredByColor, "sku"),
      };
    }

    return {};
  }

  componentDidMount() {
    this.props.getProducts();
  }

  toggleSortMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState((pS) => ({ isSortMenuOpen: !pS.isSortMenuOpen }));
  };

  onChangeSortOrder = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const currentSortOrder = Number(
      e.currentTarget.getAttribute("data-sort-index")
    );

    this.setState({ isSortMenuOpen: false }, () => {
      this.props.onChangeSortingOrder(currentSortOrder);
    });
  };

  onSelectFilter = (e) => {
    // e.preventDefault();
    e.stopPropagation();

    const type = e.currentTarget.getAttribute("data-type");
    const value = e.currentTarget.getAttribute("data-value");
    const { filterOpts } = this.props.common;
    let newValue = filterOpts[type] || [];

    if (newValue.includes(value)) {
      _remove(newValue, (n) => n === value);

      this.props.onChangeProdFilter({ [type]: newValue });
    } else {
      newValue = [...newValue, value];

      this.props.onChangeProdFilter({ [type]: newValue });
    }
  };

  render() {
    const { cart, common } = this.props;
    const cartItemsSku = _map(cart, "sku");
    const { isSortMenuOpen, currentSortOrder, inventory } = this.state;
    const selectedFilters = {
      size: _get(common, "filterOpts.size", []),
      color: _get(common, "filterOpts.color", []),
    };

    return (
      <div className="home-page">
        <div className="row d-flex justify-content-end mr-5">
          <div className="dropdown">
            <button
              className={cx("btn btn-secondary dropdown-toggle", {
                show: isSortMenuOpen,
              })}
              type="button"
              onClick={this.toggleSortMenu}
            >
              {SORT_ORDERS[currentSortOrder].label}
            </button>
            <div
              className={cx("dropdown-menu", {
                show: isSortMenuOpen,
              })}
              aria-labelledby="dropdownMenuButton"
            >
              {SORT_ORDERS.map((item, index) => (
                <span
                  className="dropdown-item"
                  key={item.key}
                  data-sort-index={index}
                  onClick={this.onChangeSortOrder}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <div className="row mt-4 ml-4">
              <ul className="list-group" style={{ width: "100%" }}>
                <li
                  className="list-group-item active"
                  aria-disabled="true"
                  key="0"
                >
                  <h5>Sizes</h5>
                </li>
                {SIZES.map((item, index) => (
                  <li className="list-group-item" key={item.short}>
                    <div className="custom-control custom-radio">
                      <input
                        type="checkbox"
                        id={`customRadioSize${index}`}
                        name="customRadio"
                        data-type="size"
                        data-value={item.short}
                        checked={selectedFilters.size.includes(item.short)}
                        onChange={this.onSelectFilter}
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor={`customRadioSize${index}`}
                      >
                        {item.long}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="row mt-4 ml-4">
              <ul className="list-group" style={{ width: "100%" }}>
                <li
                  className="list-group-item active"
                  aria-disabled="true"
                  key="0"
                >
                  <h5>Colors</h5>
                </li>
                {COLORS.map((item, index) => (
                  <li className="list-group-item" key={item.key}>
                    <div className="custom-control custom-radio">
                      <input
                        type="checkbox"
                        id={`customRadioColor${index}`}
                        name="customRadio"
                        data-type="color"
                        data-value={item.name}
                        checked={selectedFilters.color.includes(item.name)}
                        onChange={this.onSelectFilter}
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor={`customRadioColor${index}`}
                      >
                        {item.name}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-10">
            <div className="row m-4">
              {inventory.map((product) => (
                <div
                  className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
                  key={product.sku}
                >
                  <ProductCard
                    product={product}
                    isInCart={cartItemsSku.includes(product.sku)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    inventory: state.inventory.data,
    cart: state.cart.data,
    common: state.common,
  }),
  {
    getProducts,
    onChangeSortingOrder,
    onChangeProdFilter,
  }
)(Home);
