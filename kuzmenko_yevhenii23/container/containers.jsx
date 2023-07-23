import React from 'react';

import {Menu} from '../components/components.jsx'

export const MyHeader = () => {
    return (
        <header className='header'>
            <h1 className='header__title'>Header</h1>
        </header>
    );
}

export const MyMain = () => {
    return (
        <main className='main'>
            {MyNav()}
            {MyContent()}
        </main>
    );
}

export const MyNav = () => {
    return ( 
        <nav className='nav'>
            {Menu()}
        </nav>
    );
}

export const MyContent = () => {
    return (
        <div className='content'>
            <img src="../img/content.jpg" alt="content picture" />
        </div>
    );
}