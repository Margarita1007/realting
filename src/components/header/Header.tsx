import React from "react";
import './header.css';

const HeaderComponent: React.FC = () => {
    return (
        <header className="header">
            <div className="header-logo" style={{padding: '5px 0'}}>
                <img src="https://www.selected-estate.com/images/selected-logo.png" alt="logo"
                style={{width: '100%', height: '100%'}}/>
            </div>
            <nav className="main-menu">
                <a href="/" className="nav-link">Новостройки</a>
                <a href="/" className="nav-link">Вторичка</a>
                <a href="/" className="nav-link">Коммерческая</a>
                <a href="/" className="nav-link">Аренда</a>
                <a href="/" className="nav-link">Новости</a>
            </nav>
            <nav className="user-menu">
                <a href="/" className="nav-link nav-link-login">Войти</a>
                <a href="/" className="nav-link nav-link-siqnup">Регистрация</a>
            </nav>
        </header>
    )
}

export default HeaderComponent