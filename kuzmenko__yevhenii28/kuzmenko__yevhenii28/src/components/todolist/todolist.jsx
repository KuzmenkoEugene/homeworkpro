import React, {useState} from "react";
import {connect} from 'react-redux';

const ToDoList = ({listToDo}) => {
    const[list, setList] = useState(listToDo);
    const [myNewValue, setMyNewValue] = useState('');

    const itemChange = (e) => {

        setMyNewValue(e.target.value) 

    }

    const addToDo = (e) => {

        e.preventDefault()

        if (myNewValue !== '') {

            const updateList = [...list, myNewValue]

            setList(updateList)

            setMyNewValue('')
        }
    }

    const statusChange = (e) => {
        if (e.target.classList.contains('item_text')) {
            e.target.classList.remove('item_text');
            e.target.classList.add('diditem_text');
          } else if (e.target.classList.contains('diditem_text')) {
            e.target.classList.remove('diditem_text');
            e.target.classList.add('item_text');
          }
    }


    return (
        <div className="todolist-wrap">
            <div onClick={statusChange} className="todolist_list">
                {
                    list.map((el, index) => 
                        <div className="list_item" key={`${index}`}> 
                            <p className="item_text" key={`${el}-${index}`}>
                                {el}
                            </p> 
                        </div>
                    )
                }
            </div>
            <div className="form-wrap">
                <form className="form" onSubmit={addToDo}>
                    <input className="form_input" type="text" name="text" value={myNewValue} placeholder="your text" onChange={itemChange}/>
                    <button className="form_button">
                        add
                    </button>
                </form>
            </div>
        </div>
    )   
}

const mapStateToProps = (state) => {
    return {
        listToDo: state.listToDoReducer.listToDo
    }
}

export default connect(mapStateToProps)(ToDoList);

