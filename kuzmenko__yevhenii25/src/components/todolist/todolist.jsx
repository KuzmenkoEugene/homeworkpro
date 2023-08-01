import React from "react";

export class ToDoList extends React.Component {
    constructor() {
        super();

        this.value = '';
        this.state = {
            list: ['Text 1', 'Text 2', 'Text 3']
        }
    }

    addToDo = (e) => {
        e.preventDefault()

        if (this.value !== '') {
            this.setState(
                [this.state.list.push(this.value),
                this.value = ''
                ],
            )
        }
    }

    itemChange = (e) => {
        this.setState(
            [this.value = e.target.value],
        )
    }

    statusChange = (e) => {
        if (e.target.classList.contains('item_text')) {
            e.target.classList.remove('item_text');
            e.target.classList.add('diditem_text');
          } else if (e.target.classList.contains('diditem_text')) {
            e.target.classList.remove('diditem_text');
            e.target.classList.add('item_text');
          }
    }

    render = () => {
        return (
            <div className="todolist-wrap">
                <div onClick={this.statusChange} className="todolist_list">
                    {
                        this.state.list.map((el, index) => 
                            <div className="list_item" key={`block-${el}-${index}`}> 
                                <p className="item_text" key={`${el}-${index}`}>{el}</p> 
                            </div>
                        )
                    }
                </div>
                <div className="form-wrap">
                    <form className="form" onSubmit={this.addToDo}>
                        <input className="form_input" type="text" name="text" placeholder="your text" value={this.value} onChange={this.itemChange}/>
                        <button>add</button>
                    </form>
                </div>
            </div>
        )   
    }
}