import React, { useState } from "react";
import SearchComponent from "./Search";
import FilterItem from "./FilterItem";
import { useAppSelector } from "../../../../app/hooks";
import './filters.css';

const Filters: React.FC = () => {
    const [openFilter, setOpenFilter] = useState(false);
    const stateSearch = useAppSelector(state => state.offers.stateSearch);

    return (
        <div className="catalog-filters">
            <div className="catalog-filters_filters-row">
                <SearchComponent/>
                <div className="filters-button" onClick={() => setOpenFilter(!openFilter)}>
                    {/* <span>Фильтр</span> */}
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3 1a1 1 0 012 0v4a3 3 0 010 6v12a1 1 0 11-2 0V11a3 3 0 010-6V1zM2 8a1 1 0 011-1h2a1 1 0 010 2H3a1 1 0 01-1-1zM19 1a1 1 0 112 0v4a3 3 0 110 6v12a1 1 0 11-2 0V11a3 3 0 110-6V1zm0 6a1 1 0 100 2h2a1 1 0 100-2h-2zM12 24a1 1 0 001-1v-4a3 3 0 100-6V1a1 1 0 10-2 0v12a3 3 0 100 6v4a1 1 0 001 1zm1-7h-2a1 1 0 110-2h2a1 1 0 110 2z"></path>
                    </svg> 
                </div>
            </div>
            <div className='search-wrapper_text'>
                {stateSearch}
            </div>
            {openFilter ? 
            <FilterItem/>
            : null}
        </div>
    )
}

export default Filters;