const OPTIONS = [
  ["all", "All", "all"],
  ["active", "Active", "active"],
  ["completed", "Completed", "completed"],
];

export default function TodoFilters({ filter, counts, onFilter }) {
  return (
    <div className="filters" role="group" aria-label="Filter tasks">
      {OPTIONS.map(([value, label, countKey]) => (
        <button
          key={value}
          type="button"
          className={value === "all" ? "chip is-selected" : "chip"}
          aria-pressed={value === "all"}
          onClick={() => onFilter(value)}
        >
          <span>{label}</span>
          <span className="count">{counts[countKey]}</span>
        </button>
      ))}
    </div>
  );
}
