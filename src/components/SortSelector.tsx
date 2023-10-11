import { Button, MenuItem, HTMLSelect, Menu } from "@blueprintjs/core";
import { ItemPredicate, ItemRenderer, Select,ItemListRenderer  } from "@blueprintjs/select";
import React, { useState } from 'react'

interface Props {
    onSelectSortOrder: (sortOrder: SortOption) => void;

}

const sortOptions: SortOption[] = [
    { label: 'Price Low to High', value: 'pricelh', column: 'price', direction: 'asc' },
    { label: 'Price High to Low', value: 'pricehl', column: 'price', direction: 'desc' },
    { label: 'Name A-Z', value: 'nameaz', column: 'name', direction: 'asc' },
    { label: 'Name Z-A', value: 'nameza', column: 'name', direction: 'desc' }
  ];
  
  export type SortOption = {
    label: string;
    value: string;
    column: string;
    direction: string;
  };
  const SortSelector = ({onSelectSortOrder}:Props) => {
    const [selectedSortOption, setSelectedSortOption] = useState<SortOption>(
      sortOptions[0]
    );
    const renderOption: ItemRenderer<SortOption> = (option, { handleClick, handleFocus, modifiers, query }) => {
        if (!modifiers.matchesPredicate) {
            return null;
        }
        return (
            <option
                key={option.value}
                onClick={handleClick}
                onFocus={handleFocus}
                label={option.label}
             />
        );
    };
    
    const handleItemSelect = (option: SortOption) => {
      setSelectedSortOption(option);
      onSelectSortOrder(option);
    }
    return (    
      <div className="row">
          <Select<SortOption>
            items={sortOptions}
            itemRenderer={renderOption}
            onItemSelect={handleItemSelect}
            filterable={false}
          >
            <Button className="sort-button" text={`Sort by ${selectedSortOption.label}`} rightIcon="double-caret-vertical" />
          </Select>
      </div>
    );
  };
  
  export default SortSelector;
  
  
  
  
  
  