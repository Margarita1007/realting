import React from "react";
import './header.css';
import { Link } from "react-router-dom";
import { SettingLangCurrency } from "./Setting";
import Profile from "./Profile";

const HeaderComponent: React.FC = () => {
    return (
        <header className="header">
            <Link to='/' style={{display: 'flex'}}>
            <div className="header-logo" style={{padding: '5px 0'}}>
                <img src="https://www.selected-estate.com/images/selected-logo.png" alt="logo"
                style={{width: '100%', height: '100%'}}/>
            </div>
            </Link>
            
            <nav className="main-menu">
                <a href="/" className="nav-link">Новостройки</a>
                <a href="/" className="nav-link">Вторичка</a>
                <a href="/" className="nav-link">Коммерческая</a>
                <a href="/" className="nav-link">Аренда</a>
                <a href="/" className="nav-link">Новости</a>
            </nav>
            <nav className="user-menu">
                <SettingLangCurrency/>
                <a href="/" className="nav-link nav-link-login">Войти</a>
                <a href="/" className="nav-link nav-link-siqnup">Регистрация</a>
            </nav>
            <div className="user-menu-mobile">
                <SettingLangCurrency/>
                <Profile/>
            </div>
        </header>
    )
}

export default HeaderComponent