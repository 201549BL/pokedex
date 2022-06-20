import React, { useState } from "react";

const useCapsuleFilter = (filterOptions = [], filterFunction = () => {}) => {
  const [filterIndex, setFilterIndex] = useState(0);

  const onFilterClick = () =>
    setFilterIndex((prev) => (prev + 1) % filterOptions.length);

  let term = filterOptions[filterIndex];

  return { term, onFilterClick };
};

export default useCapsuleFilter;
