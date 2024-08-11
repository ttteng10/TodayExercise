import {API} from '.';

export const setApiFollower = async () => {
  const res = await API.get('/follower');
  console.log(res);
};
