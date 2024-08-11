import {API} from '.';

export const setApiFeed = async feedId => {
  const res = await API.get(`/feed/${feedId}`);
  console.log(res.data.result.images);
  return res.data.result.images;
};
