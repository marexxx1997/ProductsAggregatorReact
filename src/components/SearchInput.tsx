import { InputGroup } from "@blueprintjs/core";
import { useRef } from "react";
interface Props {
    onSearch: (searchText: string) => void;
}
const SearchInput = ({onSearch} : Props) => {
const ref = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(event) => {event.preventDefault(); if(ref.current) onSearch(ref.current.value);}}>
        <InputGroup
          disabled={false}
          large={false}
          placeholder="Search..."
          readOnly={false}
          small={false}
          type="search"
          inputRef={ref}
        />
    </form>
  );
};

export default SearchInput;
