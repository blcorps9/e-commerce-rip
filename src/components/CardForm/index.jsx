import React from "react";
import _map from "lodash/map";
import _range from "lodash/range";

import { LIST_OF_MONTHS } from "../../db";
import { CC_EXPIRY_YEARS } from "../../config";

export default function CardForm({ onSubmit, isNew, card }) {
  const currentYear = new Date().getFullYear();

  return (
    <form onSubmit={onSubmit} className="mt-4">
      <div className="form-row">
        <div className="form-group col-12">
          <label htmlFor="inputCardHolderName">Name on card</label>
          <input
            required
            type="text"
            id="inputCardHolderName"
            className="form-control"
            placeholder="e.g. Will Smith"
            defaultValue={isNew ? "" : card.inputCardHolderName}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputCardNumber">Card number</label>
        <input
          required
          type="text"
          id="inputCardNumber"
          className="form-control"
          placeholder="1234 5678 1234 5678"
          defaultValue={isNew ? "" : card.inputCardNumber}
        />
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="inputExpiryMonth">Expiry Month</label>
          <select required id="inputExpiryMonth" className="form-control">
            <option>Choose month...</option>
            {_map(LIST_OF_MONTHS, ({ short }) => (
              <option value={short} key={short}>
                {short}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputExpiryYear">Expiry Year</label>
          <select required id="inputExpiryYear" className="form-control">
            <option>Choose year...</option>
            {_map(
              _range(currentYear, currentYear + CC_EXPIRY_YEARS + 1),
              (yy) => (
                <option value={yy} key={yy}>
                  {yy}
                </option>
              )
            )}
          </select>
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="inputCVV">CVV</label>
          <input
            required
            type="password"
            id="inputCVV"
            maxLength="3"
            minLength="3"
            className="form-control"
          />
        </div>
      </div>

      <div className="form-group">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="inputSaveCard"
            defaultChecked={isNew ? "" : card.inputSaveCard}
          />
          <label className="form-check-label" htmlFor="inputSaveCard">
            Save card as default
          </label>
        </div>
      </div>
      <div className="form-group d-flex align-items-end">
        <button type="submit" className="btn btn-primary">
          {isNew ? "Save" : "Update"}
        </button>
      </div>
    </form>
  );
}
