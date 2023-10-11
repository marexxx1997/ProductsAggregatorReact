import {
  Alignment,
  Button,
  Classes,
  H5,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch,
  InputGroup
} from "@blueprintjs/core";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch} : Props) => {
  return (
      <Navbar className="row ps-5 pt-3 pb-4">
        <div className="col-5">
            <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>MOBILE SHOP</NavbarHeading>
            </NavbarGroup>
            </div>

              <div className="col-7">
                  <NavbarGroup align={Alignment.RIGHT}>
                      <SearchInput onSearch={onSearch}/>
                  </NavbarGroup>
              </div>
      </Navbar>
  );
};

export default NavBar;
