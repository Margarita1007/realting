import React from 'react';
import { Select, Slider } from "antd";
import { cards } from '../cards/data';

const FilterItem: React.FC = () => {

    const prices: number[] = cards.map((item) => Number(item.price)).sort((a, b) => a - b);
    console.log(prices)

    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };
      
      const onSearch = (value: string) => {
        console.log('search:', value);
    };

    return (
        <div>
            <Select
                showSearch
                placeholder="Выберите город"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                {
                    value: 'city1',
                    label: 'City1',
                },
                {
                    value: 'city2',
                    label: 'City2',
                },
                {
                    value: 'city3',
                    label: 'City3',
                },
                ]}
            />
            <Slider 
               range 
                defaultValue={[prices[0], prices[prices.length - 1]]} 
                tooltip={{ open: true }} 
                max={prices[prices.length - 1]}
                min={prices[0]}
            />
        </div>
    )
}

export default FilterItem;