import React, {useState, useEffect} from "react";
import { Post } from "../posts/post.jsx";
import {useDispatch, useSelector} from 'react-redux';
import { selectPosts } from '../../selectors';
import { fetchPosts } from "../../actions/posts.actions.js";
import { fetchAddNewPost } from "../../actions/addNewPost.action.js";

export const Contacts = () => {
    const [userForm, setUserForm] = useState(false)
    const [nameInput, setNameInput] = useState('');
    const [usernameInput, setUsernameInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [noText, setNoText] = useState(false);
    const {postsList} = useSelector(selectPosts);

    const cleaner = () => {
        setNameInput('');
        setUsernameInput('')
        setPhoneInput('')
    }

    const addUser = () => {
        if (usernameInput === '' || phoneInput === '' || nameInput === '' ) {
            setNoText(!false)
        } else {
            
            setNoText(false)

            let newUser = {
                id: postsList.length + 1,
                name: nameInput,
                username: usernameInput,
                phone: phoneInput,
            }

            dispatch(fetchAddNewPost(newUser))
        }

        cleaner()
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    
    

    return (
        <div className="users">
                {
                    postsList.map((el, index) => <Post key={index} el={el}/>)
                }
                {
                    <div className="users_create">
                        <button onClick={() => {setUserForm(!false)}} className="users_create_btn">Show form</button>
                        {noText && (
                            <p>Fields are empty</p>
                        )}
                        {userForm && (
                            <div className="create_form">
                                <input value={nameInput} onChange={(event) => setNameInput(event.target.value)}  className="form_input" type="text" placeholder="Your name" />
                                <input value={usernameInput} onChange={(event) => setUsernameInput(event.target.value)}  className="form_input" type="text" placeholder="Your username"/>
                                <input value={phoneInput} onChange={(event) => setPhoneInput(event.target.value)} className="form_input" type="text" placeholder="Your phone"/>
                                {userForm && (
                                <div className="form_close">
                                    <button  onClick={addUser} className="users_create_btn">Add</button>
                                    <button onClick={() => {setUserForm(false)}} className="users_create_btn">Close</button>
                                </div>)}
                            </div>
                        )}
                    </div>
                }
        </div>
    )
}