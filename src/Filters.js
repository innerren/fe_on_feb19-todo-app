import React from "react";

class Filters extends React.Component {
  list = filters => {
    return filters.map((filter, id) => (
      <li key={id}>
        <label className="radio">
          <input
            type="radio"
            name="filters"
            checked={filter === this.props.filter}
            onChange={() => {
              this.props.setFilter(filter);
            }}
          />
          <span className="radio-text">{filter}</span>
        </label>
      </li>
    ));
  };
  render() {
    const isSelect = this.props.isSelect;
    return <ul className="filters">{this.list(isSelect)}</ul>;
  }
}

export default Filters;
