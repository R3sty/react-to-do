import "./TodoFilter.css";

export default function TodoFilter() {
  return (
    <div className="filter-container">
      <div className="filter-panel">
        <p>3 items left</p>
        <div className="desktop-only">
          <FilterBtns />
        </div>
        <button className="clear-btn">Clear Completed</button>
      </div>
      <div className="mobile-only">
        <FilterBtns />
      </div>
    </div>
  );
}

function FilterBtns() {
  return (
    <div className="filter-btns">
      <button className="filter-btn">All</button>
      <button className="filter-btn">Active</button>
      <button className="filter-btn">Completed</button>
    </div>
  );
}
