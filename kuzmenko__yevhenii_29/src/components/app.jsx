import React from 'react';

import { Contacts } from './contacts/contacts.jsx';

export class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <main className='main'>
                <Contacts/>
            </main>
        )
    }
}

