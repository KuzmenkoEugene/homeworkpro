import React, {useState, useEffect} from "react";

import {useParams} from 'react-router-dom'; 

export const RenderPhotoList = () => {
    const {id} = useParams()
    const [userPhotos, setUserPhotos] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`, {
        method: 'GET',
        headers: {'Content-type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => setUserPhotos(data))
    }, [id])
    
    return (
        <div className="users_album">
            {
                userPhotos.map(el => 
                <div className="user_item" key={`${el.id}`}>
                    <div className="user_url-block" key={`${el.id}`}>
                        <img src={el.url} alt={el.title} />
                    </div>
                    <div className="user_name" key={`${el.title}-${el.id}`}>
                        <p key={`${el.title}-${el.id}`}>{el.title}</p>
                    </div>
                </div>)
            }
        </div>
    )   
}

