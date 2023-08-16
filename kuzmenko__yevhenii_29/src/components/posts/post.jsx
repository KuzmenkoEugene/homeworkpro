import React from "react";
import {useDispatch} from 'react-redux';
import { fetchDeleteUser } from "../../actions/index.js"



export const Post = ({el}) => {

    const dispatch = useDispatch();

    const onPostDelete = () => {
        dispatch(fetchDeleteUser(el.id))
    }

    return (
        <div className="user_item" key={`${el.id}-block`}>
            <div className="user_delete" key={`${el.id}-block`}>
                <button onClick={(onPostDelete)} className="delete-btn" key={`${el.id}-btn`}>Delete</button>
            </div>
            <div className="user_name" key={`${el.name}-${el.id}-block`}>
                <p key={`${el.name}-${el.id}`}>{el.name}</p>
            </div>
            <div className="user_username" key={`${el.username}-${el.id}-block`}>
                <p key={`${el.username}-${el.id}`}>{el.username}</p>
            </div>
            <div className="user_phone" key={`${el.phone}-${el.id}-block`}>
                <p key={`${el.phone}-${el.id}`}>{el.phone}</p>
            </div>
        </div>
    )
}
