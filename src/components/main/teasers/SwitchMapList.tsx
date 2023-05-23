import { Button } from 'antd';
import React from 'react';


const SwitchMapList: React.FC = () => {
    return (
        <div className='switch-map-list'>
            <Button className='btn'>
                <svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.8.1a.5.5 0 01.2.4v13a.5.5 0 01-.34.47l-6 2a.5.5 0 01-.3.01l-6.85-1.96-5.85 1.95A.5.5 0 010 15.5v-13a.5.5 0 01.34-.47l6-2a.5.5 0 01.3-.01l6.85 1.96L19.34.03a.5.5 0 01.45.06zM13 2.87L7 1.16v11.96l6 1.72V2.88zm1 11.93l5-1.67V1.19l-5 1.67v11.95zm-8-1.67V1.19L1 2.86v11.95l5-1.67z" fill='#fff'/>
                </svg>
                <span>Показать объекты на карте</span>
            </Button>
        </div>
    )
}

export default SwitchMapList;