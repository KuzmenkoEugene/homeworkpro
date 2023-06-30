const api = (() => {
    const API_URL = 'https://reqres.in/api/';

    class API {
        loginApi({email, password}) {
            return fetch(`${API_URL}login`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            
        }

        delete(numberId, item) {
            fetch(`${API_URL}users/${numberId}`, {
                method: 'DELETE'
            })
                .then(response => response)
                .then(response => {
                    if(response.status === 204) {
                        item.remove()
                    }
                })  
        }

        editUser(numberId, {email, name, lastName, avatar}) {
            return fetch(`${API_URL}users/${numberId}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    name,
                    lastName,
                    avatar
                })
            });
        }

    }

    return new API();
})();


