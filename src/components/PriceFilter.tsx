import React, { useState } from "react";
import { H5, Button } from "@blueprintjs/core";

interface Props {
  onPriceFilterClicked: (minPrice: number, maxPrice: number) => void;
}

const PriceFilter = ({ onPriceFilterClicked }: Props) => {

  const [minPrice, setMinPrice] = useState<number | null>(0);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const handleFilterClick = () => {
    if (typeof minPrice === "number" && typeof maxPrice === "number") {
      onPriceFilterClicked(minPrice, maxPrice);
    }
  };

  return (
    <>
      <p className="mt-4">Price</p>
      <div className="d-flex price-input">
        <input
          type="number"
          placeholder="Min"
          value={minPrice || ""}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
        <span className="mx-2">-</span>
        <input
          type="number"
          placeholder="Max"
          value={maxPrice || ""}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <span className="mx-2">KM</span>
      </div>
      <Button
        className="mt-3 price-filter-button"
        text="Filter"
        onClick={handleFilterClick}
      />
    </>
  );
};

export default PriceFilter;
