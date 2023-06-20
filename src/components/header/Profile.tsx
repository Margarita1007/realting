import { Button, Dropdown } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';


const items: MenuProps['items'] = [
    {
      label: 'Что-то',
      key: '1',
    },
    {
      label: 'Еще что-то',
      key: '2',
    },
    {
      label: 'Что-то другое',
      key: '3',
    },
    {
      label: 'Выйти из профиля',
      key: '4',
    },
];


const Profile: React.FC = () => {

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        if (e.key === '4') {
            console.log('4')
            }
        
        }

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };


    return (
        <Dropdown menu={menuProps}>
            <Button style={{border: 'none', boxShadow: 'none'}}>
                <UserOutlined className="icon_profile"/>
            </Button>
        </Dropdown>
    )
}

export default Profile;