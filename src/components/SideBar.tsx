import React from "react";
import PriceFilter from "./PriceFilter";
import { H5 } from "@blueprintjs/core";

interface Props {
  onPriceFilterClicked: (minPrice: number, maxPrice: number) => void;
}

const SideBar = ({ onPriceFilterClicked }: Props) => {
  return (
    <div>
      <div>
        <H5 className="border-bottom me-5">Filters</H5>
      </div>
      <PriceFilter onPriceFilterClicked={onPriceFilterClicked} />
    </div>
  );
};

export default SideBar;
