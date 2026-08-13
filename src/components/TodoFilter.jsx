import "./TodoFilter.css";

export default function TodoFilter({
  onFilterSelect,
  remainingCount,
  clearTasks,
}) {
  return (
    <div className="filter-container">
      <div className="filter-panel">
        <p>{remainingCount} items left</p>
        <div className="desktop-only">
          <FilterBtns onFilterSelect={onFilterSelect} />
        </div>
        <button className="clear-btn" onClick={clearTasks}>
          Clear Completed
        </button>
      </div>
      <div className="mobile-only">
        <FilterBtns onFilterSelect={onFilterSelect} />
      </div>
    </div>
  );
}

function FilterBtns({ onFilterSelect }) {
  return (
    <div className="filter-btns">
      <button
        className="filter-btn"
        value="all"
        onClick={(e) => onFilterSelect(e.target.value)}
      >
        All
      </button>
      <button
        className="filter-btn"
        value="active"
        onClick={(e) => onFilterSelect(e.target.value)}
      >
        Active
      </button>
      <button
        className="filter-btn"
        value="completed"
        onClick={(e) => onFilterSelect(e.target.value)}
      >
        Completed
      </button>
    </div>
  );
}
