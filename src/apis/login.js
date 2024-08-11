import {API} from '.';

export const setApiLogin = async (email, password) => {
  return await API.post('/auth', {
    email,
    password,
  });
};

export const setApiLogout = async (email, password) => {
  return await API.delete('/auth');
};
