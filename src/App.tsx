import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ScanList from './components/ScanList'
import CandidateGrid from './components/CandidateGrid'
import './index.css'
import SortSelector, { SortOption } from './components/SortSelector'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'


function App() {
  const [sortOrder, setSortOrder] = useState<SortOption>({
    label: "Price Low to High",
    value: "pricelh",
    column: "price",
    direction: "asc"
  });
  const [searchText, setSearchText] = useState('');
  // console.log(sortOrder?.column, sortOrder?.direction);

  const [minFilterPrice, setMinFilterPrice] = useState<number | null>(0);
  const [maxFilterPrice, setMaxFilterPrice] = useState<number | null>(5000);

  console.log(minFilterPrice, maxFilterPrice);

 return (
   <div className="row">
     <NavBar onSearch={(searchText) => setSearchText(searchText)} />
     <div className="col-10 ps-5">
       <SortSelector
         onSelectSortOrder={(sortOrder) => setSortOrder(sortOrder)}
       />
       <CandidateGrid
         minFilterPrice={minFilterPrice}
         maxFilterPrice={maxFilterPrice}
         searchText={searchText}
         sortOrder={sortOrder}
       />
     </div>
     <div className="col-2">
       <SideBar
         onPriceFilterClicked={(minFilterPrice, maxFilterPrice) => {
           setMinFilterPrice(minFilterPrice);
           setMaxFilterPrice(maxFilterPrice);
         }}
       />
     </div>
   </div>
 );
}

export default App
