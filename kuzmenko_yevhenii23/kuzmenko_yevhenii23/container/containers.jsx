import React from 'react';

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
            <h1>myNav</h1>
        </nav>
    );
}

export const MyContent = () => {
    return (
        <content className='content'>
            <img src="../img/content.jpg" alt="content picture" />
        </content>
    );
}