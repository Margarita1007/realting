import { Input } from 'antd';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { setSearch } from '../../../app/OfferSlice';

const { Search } = Input;


const SearchComponent: React.FC = () => {
    const dispatch = useAppDispatch();
    const stateSearch = useAppSelector(state => state.offers.stateSearch);

    const onSearch = (value: string) => {
        dispatch(setSearch(value));
        console.log(value);
    }

    return (
        <div className='search-wrapper'>
            <Search placeholder="Search..." onSearch={onSearch} enterButton />
            <div className='search-wrapper_text'>
                {stateSearch}
            </div>
        </div>
    )
}

export default SearchComponent;