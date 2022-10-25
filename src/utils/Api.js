class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
    this._headers = {
        credentials: 'include',
      }
    };

    _checkResult(res) {
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject('Возникла ошибка');
      }; 
    };
  
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    })
    .then(this._checkResult);
  };

  addCard(inputName, inputLink) {
    const body = {
      name: inputName,
      link: inputLink
    };

    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(body)
    })
    .then(this._checkResult);
  };

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then(this._checkResult);
  };

  correctUserInfo(userName, userPosition) {
    const body = {
      name: userName,
      about: userPosition
    };

    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(body)
    })
    .then(this._checkResult);
  };

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResult);
  };

  changeLikeCardStatus(cardId, likeStatus) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: (likeStatus ? "PUT": "DELETE"),
      headers: this._headers
    })
    .then(this._checkResult);
  };

  changeUserAvatar(userAvatar) {
    const body = {
      avatar: userAvatar
    };

    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(body)
    })
    .then(this._checkResult);
  };

};

const api = new Api ('http://localhost:4000', 
'8636da29-c732-4db2-9071-001062507334');

export default api;