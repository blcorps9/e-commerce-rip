import React from "react";

export default function FilterCard({
  type,
  title,
  rows,
  selectedFilters,
  onSelectFilter,
  valProp,
  labelProp,
}) {
  return (
    <div className="card filter-card">
      <div className="card-header bg-primary">{title}</div>
      <ul className="list-group">
        {rows.map((item, index) => (
          <li className="list-group-item" key={item.key || item[valProp]}>
            <div className="custom-control custom-radio">
              <input
                type="checkbox"
                id={`customRadio-${type}-${index}`}
                name="customRadio"
                data-type={type}
                data-value={item[valProp]}
                checked={selectedFilters.includes(item[valProp])}
                onChange={onSelectFilter}
                className="custom-control-input"
              />
              <label
                className="custom-control-label"
                htmlFor={`customRadio-${type}-${index}`}
              >
                {item[labelProp]}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
