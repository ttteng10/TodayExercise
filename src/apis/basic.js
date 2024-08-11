import {API} from '.';

export const getApiVersion = async () => {
  const res = await API.post('/accounts', {
    email: 'qqq@qqq.com',
    password: 'Qwer@1234',
    nickname: 'qqq',
    phoneNumber: '111222',
  });
  console.log(res);
};
