import React, { Component } from "react";
import { connect } from "react-redux";

import { saveNewAddress } from "./actions";

class DeliveryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNewAddrForm: false,
    };
  }

  onClickNewAddr = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState((pS) => ({ showNewAddrForm: !pS.showNewAddrForm }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const addrData = {};

    for (let field of e.currentTarget) {
      if (field.type !== "submit") {
        addrData[field.id] = field.value;
      }
    }

    this.setState({ showNewAddrForm: false }, () => {
      this.props.saveNewAddress(addrData);
    });
  };

  render() {
    const { showNewAddrForm } = this.state;
    const { myAddresses } = this.props;

    return (
      <div className="cart-page row mb-4">
        <div className="col-10 offset-1">
          <div className="card">
            <div className="card-header">My Addresses</div>
            <ul className="list-group list-group-flush">
              {myAddresses.map((addr) => (
                <li className="list-group-item" key={addr.key}>
                  {`${addr.inputAddressName}, ${addr.inputAddressLine1}, ${addr.inputCity}, ${addr.inputPostalCode}`}
                </li>
              ))}
              {showNewAddrForm ? (
                <li className="list-group-item" key={myAddresses.length + 1}>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                      <div className="form-group col-12">
                        <label htmlFor="inputAddressName">Address name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddressName"
                          placeholder="vacation home"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputAddressLine1">Address Line 1</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddressLine1"
                        placeholder="1234 Main St"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputAddressLine2">Address Line 2</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddressLine2"
                        placeholder="Apartment, studio, or floor"
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputCity"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="inputState">State</label>
                        <select id="inputState" className="form-control">
                          <option>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div className="form-group col-md-2">
                        <label htmlFor="inputPostalCode">Postal Code</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputPostalCode"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="gridCheckDefault"
                        >
                          Save as default
                        </label>
                      </div>
                    </div>
                    <div className="form-group d-flex align-items-end">
                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                    </div>
                  </form>
                </li>
              ) : (
                <li className="list-group-item actions d-flex align-items-end">
                  <span
                    className="btn btn-primary"
                    onClick={this.onClickNewAddr}
                  >
                    Add new address
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({ myAddresses: state.myAddresses.data }), {
  saveNewAddress,
})(DeliveryPage);
