import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

import { addToFavList, removeFromFavList } from "../../store/actions";
import { ITEM_FAV_COLOR_DEFAULT, ITEM_FAV_COLOR_ADDED } from "../../config";

class AddToFavList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onHover: false,
    };
  }

  onMouseEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({ onHover: true });
  };

  onMouseLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({ onHover: false });
  };

  onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { favList, skuId } = this.props;

    if (favList.includes(skuId)) {
      this.props.removeFromFavList({ sku: skuId });
    } else {
      this.props.addToFavList({ sku: skuId });
    }
  };

  render() {
    const { onHover } = this.state;
    const { favList, skuId } = this.props;
    const isSelected = favList.includes(skuId) || onHover;

    return (
      <div
        data-sku={skuId}
        className="fav-icon"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
      >
        <FontAwesomeIcon
          icon="heart"
          color={isSelected ? ITEM_FAV_COLOR_ADDED : ITEM_FAV_COLOR_DEFAULT}
          size="2x"
        />
      </div>
    );
  }
}

export default connect((state) => ({ favList: state.favList.data }), {
  addToFavList,
  removeFromFavList,
})(AddToFavList);
