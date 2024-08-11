import {API} from '.';

export const setApiNewAccount = async (
  email,
  password,
  nickname,
  phoneNumber,
) => {
  const res = await API.post('/accounts', {
    email,
    password,
    nickname,
    phoneNumber,
  });
  console.log(res);
};

// export const setApiNewAccount = async () => {
//   const res = await API.post('/accounts', {
//     email: 'qqq@qqq.com',
//     password: 'QWer1234!',
//     nickname: 'qqq',
//     phoneNumber: '01012341234',
//   });
//   console.log(res);
// };
