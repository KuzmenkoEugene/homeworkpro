import React from 'react';

import { ToDoList } from './todolist/todolist.jsx';

export class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <main className='main'>
                <div className='todolist_title-wrap'>
                    <h1 className='todolist_title'>
                        To do List
                    </h1>
                </div>
                <ToDoList/>  
            </main>
        )
    }
}