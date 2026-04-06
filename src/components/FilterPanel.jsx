function FilterPanel({
  vegetarianOnly,
  onVegetarianChange,
  maxCookingTime,
  onMaxCookingTimeChange,
  resultCount,
}) {
  return (
    <section className="filter-panel">
      <div className="filter-group">
        <label htmlFor="time-filter" className="section-label">
          Max Cooking Time
        </label>
        <select
          id="time-filter"
          className="select-input"
          value={maxCookingTime}
          onChange={(event) => onMaxCookingTimeChange(event.target.value)}
        >
          <option value="15">15 min</option>
          <option value="30">30 min</option>
          <option value="60">60 min</option>
        </select>
      </div>

      <label className="checkbox-row">
        <input
          type="checkbox"
          checked={vegetarianOnly}
          onChange={(event) => onVegetarianChange(event.target.checked)}
        />
        <span>Vegetarian only</span>
      </label>

      <p className="result-count">{resultCount} recipes found</p>
    </section>
  )
}

export default FilterPanel
