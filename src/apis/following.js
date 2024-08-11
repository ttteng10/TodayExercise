import {API} from '.';

export const setApiFollowing = async () => {
  const res = await API.get('/following');
  console.log(res);
};

export const setApiFollowingAdd = async email => {
  const res = await API.post('/following', {
    email,
  });
  console.log(res.data);
  return res.data;
};
