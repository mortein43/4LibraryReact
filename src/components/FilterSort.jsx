import React from "react";
import styles from "../styles/FilterSort.module.css";

const FilterSort = ({ filter, setFilter, sortOrder, setSortOrder }) => (
  <div>
    <input
      type="text"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Шукати по назві"
    />
    <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
      <option value="asc">Сортувати за зростанням (А-Я)</option>
      <option value="desc">Сортувати за спаданням (Я-А)</option>
    </select>
  </div>
);

export default FilterSort;
