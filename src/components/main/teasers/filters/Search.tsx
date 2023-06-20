import { Input } from 'antd';
import React from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { setSearch } from '../../../../app/OfferSlice';

const { Search } = Input;


const SearchComponent: React.FC = () => {
    const dispatch = useAppDispatch();

    const onSearch = (value: string) => {
        dispatch(setSearch(value.trim()));
        console.log(value);
    }

    return (
        <div className='search-wrapper'>
            <Search placeholder="Search..." onSearch={onSearch} />
            
        </div>
    )
}

export default SearchComponent;