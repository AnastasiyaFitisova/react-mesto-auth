export const url = "https://auth.nomoreparties.co";

const checkResult = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject('Возникла ошибка');
  };
};

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export const register = ({ email, password }) => {
  return fetch(`${url}/signup`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      return checkResult(res);
    });
};

export const authorize = ({ email, password }) => {
  return fetch(`${url}/signin`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      return checkResult(res);
    });
};

export const getToken = (token) => {
  return fetch(`${url}/users/me`, {
    method: 'GET',
    headers: {
      ...headers,
      'Authorization': `Bearer ${token}`,
    },
  })
    .then((res) => {
      return checkResult(res);
    });
};

