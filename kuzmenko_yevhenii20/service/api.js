const api = (() => {
    const API_URL = 'https://reqres.in/api/';

    class API {
        constructor() {
            this._xhr = new XMLHttpRequest();
        }

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
            });
        }

        delete(numberId, item) {
            xhr.open('DELETE', `${API_URL}users/${numberId}`, true);
            xhr.send()
            xhr.onload = (e) => {
            if(e.target.status === 204) {
                item.remove()
            }}
        }

        creatNewUser(numberId, {email, name, lastName, avatar}) {
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


