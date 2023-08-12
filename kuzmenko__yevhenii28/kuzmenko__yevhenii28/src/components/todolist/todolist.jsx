import React, {useState} from "react";
import {connect} from 'react-redux';

const ToDoList = ({listToDo, addToDoItem}) => {
    const [myNewValue, setMyNewValue] = useState('');

    const addItem = (e) => {
        e.preventDefault()

        if (myNewValue !== '') {

            addToDoItem(myNewValue)
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
                    listToDo.map((el, index) => 
                        <div className="list_item" key={`${index}`}> 
                            <p className="item_text" key={`${el}-${index}`}>
                                {el}
                            </p> 
                        </div>
                    )
                }
            </div>
            <div className="form-wrap">
                <form className="form" >
                    <input className="form_input" type="text" name="text" value={myNewValue} placeholder="your text" onChange={(e) => setMyNewValue(e.target.value)}/>
                    <button onClick={addItem} className="form_button">
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

const mapDispatchToProps = (dispatch) => {
   return {
        addToDoItem: (myNewValue) => {
            dispatch({
                type: 'ADD',
                payload: myNewValue
            })
        }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

