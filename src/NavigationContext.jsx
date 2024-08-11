import React, {createContext, useContext, useState} from 'react';
const NavigationContext = createContext();
const healthImage1 = require('./assets/health.jpg');

const dummyData = [
  {
    id: 1,
    record: '오운완',
    name: 'Physical_111',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: [healthImage1],
    contents: '등 운동 완료!!',
    like: 37,
    likeUsers: [1, 2, 3],
  },
  {
    id: 2,
    record: '오운완',
    name: 'Physical_222',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: [
      'https://picsum.photos/id/1/400/400',
      'https://picsum.photos/id/2/400/400',
      'https://picsum.photos/id/3/400/400',
      'https://picsum.photos/id/4/400/400',
    ],
    contents: '등 운동 완료!!',
    like: 37,
    likeUsers: [1, 2, 3],
  },
  {
    id: 3,
    record: '오운완',
    name: 'total_500kg',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: [
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
    ],
    contents: '3대 500 달성',
    like: 37,
    likeUsers: [1, 2, 3],
  },
  {
    id: 4,
    record: '하체',
    name: 'Physical_333',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: [
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
    ],
    contents: '오늘 하체 하는날',
    like: 37,
    likeUsers: [1, 2, 3],
  },
  {
    id: 5,
    record: '러닝',
    name: 'gymlover',
    profileImg: 'https://avatar.iran.liara.run/public',
    feedImg: [
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
      'https://picsum.photos/400/400',
    ],
    contents: '3대 500 달성',
    like: 37,
    likeUsers: [1, 2, 3],
  },
];
const loginMembers = [
  {id: 0, memberId: 'admin', memberPw: 'admin'},
  {id: 1, memberId: 'admin2', memberPw: 'admin2'},
  {id: 2, memberId: 'admin3', memberPw: 'admin3'},
  {id: 3, memberId: 'aaa', memberPw: 'aaa'},
];
export const useNavigationValue = () => {
  return useContext(NavigationContext);
};

export const NavigationProvider = ({children}) => {
  const [login, setLogin] = useState(false);
  const [allData, setAllData] = useState([...dummyData]);
  const [addImages, setAddImages] = useState([]);
  const [members, setMembers] = useState([...loginMembers]);
  const navigate = screen => {
    // 실제 네비게이션 로직을 추가합니다.
  };

  return (
    <NavigationContext.Provider
      value={{
        login,
        setLogin,
        allData,
        setAllData,
        addImages,
        setAddImages,
        navigate,
        members,
        setMembers,
      }}>
      {children}
    </NavigationContext.Provider>
  );
};
