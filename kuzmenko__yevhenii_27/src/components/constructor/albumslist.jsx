import React, {useState, useEffect} from "react";

import {Link, useParams} from 'react-router-dom'; 

export const RenderAlbumsList = () => {
    const [userAlbums, setUserAlbums] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`, {
        method: 'GET',
        headers: {'Content-type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => setUserAlbums(data))
    }, [id])

    return (
        <div className="users">
            {
                userAlbums.map(el => 
                    <div className="user_item" key={`${el.id}`}>
                        <div className="user_url-block" key={`${el.id}`}>
                            <Link className="user_url" to={`/photos/${el.id}`}>
                                Photos
                            </Link>
                        </div>
                        <div className="user_name" key={`${el.title}-${el.id}-`}>
                            <p key={`${el.title}-${el.title}-p`}>{el.title}</p>
                        </div>
                    </div>)
            }
        </div>
    )  
}