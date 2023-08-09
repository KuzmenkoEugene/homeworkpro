import React, {useState, useEffect} from "react";

import { Link } from 'react-router-dom'; 

export const RenderUserList = () => {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            headers: {'Content-type': 'application/json'}
            })
            .then(response => response.json())
            .then(data => setUserList(data))
    }, [])

    return (
        <div className="users">
            {
                userList.map(el => 
                <div className="user_item" key={`${el.id}`}>
                    <div className="user_url-block" key={`${el.id}`}>
                        <Link className="user_url" to={`albums/${el.id}`}>
                            Album
                        </Link>
                    </div>
                    <div className="user_name" key={`${el.name}-${el.id}`}>
                        <p key={`${el.name}-${el.id}`}>{el.name}</p>
                    </div>
                </div>)
            }
        </div>
    )   
}


