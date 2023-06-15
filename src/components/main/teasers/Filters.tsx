import React from "react";
import SearchComponent from "./Search";

const Filters: React.FC = () => {
    return (
        <div className="catalog-filters">
            <SearchComponent/>
        </div>
    )
}

export default Filters;