import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {useNavigationValue} from '../NavigationContext';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import LeftBubble from '../components/LeftBubble';
import RightBubble from '../components/RightBubble';

const leftArrow = require('../assets/icons/left-arrow.png');
const listIcon = require('../assets/icons/list.png');
const pencilIcon = require('../assets/icons/pencil.png');

const MessageDetail = () => {
  const route = useRoute();
  const {allData} = useNavigationValue();
  const {messageName, messageId} = route.params;
  const navigation = useNavigation();
  const profileImg = allData.find(e => e.id === messageId)?.profileImg;
  const [messageValue, setMessageValue] = useState('');
  const dummy_DM = [
    {
      id: 1,
      name: messageName,
      message: '오늘 어디 운동하니?',
      created_date: '02:31PM',
      position: 'left',
      profileImgUrl: profileImg,
      isOpen: true,
    },
    {
      id: 2,
      name: '나',
      message: '오늘 등운동할꺼야',
      created_date: '02:32PM',
      position: 'right',
      profileImgUrl: profileImg,
      isOpen: true,
    },
    {
      id: 3,
      name: messageName,
      message: '나도 등 운동하는 날인데 같이할까?',
      created_date: '02:32PM',
      position: 'left',
      profileImgUrl: profileImg,
      isOpen: true,
    },
    {
      id: 4,
      name: '나',
      message: '그래 같이하자',
      created_date: '02:33PM',
      position: 'right',
      profileImgUrl: profileImg,
      isOpen: true,
    },
    {
      id: 5,
      name: '나',
      message: '몇시에 만날래',
      created_date: '02:33PM',
      position: 'right',
      profileImgUrl: profileImg,
      isOpen: true,
    },
    {
      id: 6,
      name: messageName,
      message: '3시 어때?',
      created_date: '02:34PM',
      position: 'left',
      profileImgUrl: profileImg,
      isOpen: true,
    },
    {
      id: 7,
      name: '나',
      message: '그래 그때보자',
      created_date: '02:36PM',
      position: 'right',
      profileImgUrl: profileImg,
      isOpen: true,
    },
    {
      id: 8,
      name: messageName,
      message: '나 지금 출발할게',
      created_date: '02:55PM',
      position: 'left',
      profileImgUrl: profileImg,
      isOpen: true,
    },
  ];
  const [dmState, setDmstate] = useState([...dummy_DM]);

  const messageAdd = () => {
    const currentTime = new Date();
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };

    const formattedTime = currentTime.toLocaleTimeString('en-US', options);
    if (messageValue.length > 0) {
      setDmstate(prevState => [
        ...prevState,
        {
          id: dmState.length + 1,
          name: '나',
          message: messageValue,
          created_date: formattedTime,
          position: 'right',
          profileImgUrl: profileImg,
          isOpen: false,
        },
      ]);
      setMessageValue('');
    }
  };
  useEffect(() => {
    console.log('DM:' + JSON.stringify(dmState));
  }, [dmState]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: 15,
              }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={leftArrow} style={{width: 30, height: 30}} />
              </TouchableOpacity>
              <Text>{messageName}</Text>
              <TouchableOpacity onPress={() => {}}>
                <Image source={listIcon} style={{width: 20, height: 20}} />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, padding: 16}}>
              <FlatList
                data={dmState}
                renderItem={({item, index}) =>
                  item.position === 'left' ? (
                    <LeftBubble data={item} />
                  ) : (
                    <RightBubble data={item} nextData={dummy_DM[index + 1]} />
                  )
                }
                keyExtractor={item => item.id.toString()}
                removeClippedSubviews
                showsVerticalScrollIndicator={false}
              />
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  placeholder="메세지 입력하기"
                  style={{
                    borderWidth: 1,
                    borderColor: '#EFEFEF',
                    borderRadius: 20,
                    flex: 1,
                    paddingHorizontal: 12,
                    marginRight: 8,
                  }}
                  autoCapitalize="none"
                  spellCheck={false}
                  autoCorrect={false}
                  value={messageValue}
                  onChangeText={text => setMessageValue(text)}
                />
                <TouchableOpacity
                  onPress={messageAdd}
                  style={{
                    borderWidth: 1,
                    borderColor: '#EFEFEF',
                    borderRadius: 20,
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={pencilIcon} style={{width: 20, height: 20}} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MessageDetail;
