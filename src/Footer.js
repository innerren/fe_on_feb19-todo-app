import React from "react";
import Filters from "./Filters";

const Footer = ({ leftIems, setFilter, clearComplete, filter, filters }) => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{leftIems()}</strong> items left
    </span>

    <Filters isSelect={filters} setFilter={setFilter} filter={filter} />

    <button className="clear-completed" onClick={clearComplete}>
      clear-completed
    </button>
  </footer>
);

export default Footer;
