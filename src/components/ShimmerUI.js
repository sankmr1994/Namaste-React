import React from "react";

const ShimmerUI = () => {
  const filterListOfResturant = new Array(8).fill().map(Object);

  return (
    <div className="shimmer-body">
      <div className="filter">
        <button className="shimmer-filter-btn"></button>
        <button className="shimmer-filter-btn"></button>
        <button className="shimmer-filter-btn"></button>
      </div>
      <div className="shimmer-restaurant-container">
        {filterListOfResturant.map((restaurant, index) => (
          <div className="shimmer-resturant-card" key={index} />
        ))}
      </div>
    </div>
  );
};

export default ShimmerUI;
