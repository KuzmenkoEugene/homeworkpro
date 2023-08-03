import React from "react";

export class Contacts extends React.Component {
    constructor() {
        super();
        
        this.state = {
            list: [],
            showForm: false,
            noText: false,
        }

        this.newUser = {
            name: '',
            username: '',
            phone: ''
        }

        this.data()
    }

    data = () => {
        fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(data => {

            let usersData = data.map(el => ({
                name: el.name,
                username: el.username,
                phone: el.phone
            }))

            this.setState({
                list: usersData
            })
        })
    } 

    deleteUser = (index) => {
        let updatedList = [...this.state.list];

        updatedList.splice(index, 1);

        this.setState({ list: updatedList })
    }

    showForm = () => {
        this.setState(
            {showForm: true}
        )
    }

    closeForm = () => {
        this.setState(
            {showForm: false}
        )
    }

    cleaner = () => {
        this.newUser = {
            name: '',
            username: '',
            phone: ''
        }
    }

    add = () => {
        if (this.newUser.name === '' || this.newUser.username === '' || this.newUser.phone === '') {
                this.setState({
                    noText: true
                })
        } else {

            this.setState({
                noText: false
            })

            this.state.list.push({name: this.newUser.name, username: this.newUser.username, phone: this.newUser.phone})

            this.setState(
                this.render(),
                this.closeForm(),
                this.cleaner()
            )
        }
        
    }

    nameForNewPerson = (e) => {
        this.newUser.name = e.target.value
    }

    usernameForNewPerson = (e) => {
        this.newUser.username = e.target.value
    }

    phoneForNewPerson = (e) => {
        this.newUser.phone = e.target.value
    }

    render = () => {
        return (
            <div className="users">
                {
                    this.state.list.map((el, index) => 
                    <div className="user_item" key={`${index}-block`}>
                        <div className="user_delete" key={`${index}-delte`}>
                            <button onClick={() => this.deleteUser(index)} className="delete-btn" key={`${index}-delte-btn`}>Delete</button>
                        </div>
                        <div className="user_name" key={`${el.name}-${index}-d`}>
                            <p key={`${el.name}-${index}-p`}>{el.name}</p>
                        </div>
                        <div className="user_username" key={`${el.username}-${index}-d`}>
                            <p key={`${el.username}-${index}-p`}>{el.username}</p>
                        </div>
                        <div className="user_phone" key={`${el.phone}-${index}-d`}>
                            <p key={`${el.phone}-${index}-p`}>{el.phone}</p>
                        </div>
                    </div>)
                }
                <div className="users_create">
                   <button onClick={this.showForm} className="users_create_btn">Show form</button>
                   {this.state.noText && (
                    <p>Fields are empty</p>
                   )}
                   {this.state.showForm && (
                        <div className="create_form">
                            <input onInput={this.nameForNewPerson}  className="form_input" type="text" placeholder="Your name" />
                            <input onInput={this.usernameForNewPerson}  className="form_input" type="text" placeholder="Your username"/>
                            <input onInput={this.phoneForNewPerson} className="form_input" type="text" placeholder="Your phone"/>
                            {this.state.showForm && (
                            <div className="form_close">
                                <button  onClick={this.add} className="users_create_btn">Add</button>
                                <button onClick={this.closeForm} className="users_create_btn">Close</button>
                            </div>)}
                        </div>
                   )}
                </div>
            </div>
        )   
    }
}