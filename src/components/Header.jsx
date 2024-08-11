import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useNavigationValue} from '../NavigationContext';
import {setApiLogout} from '../apis/login';

const homeIcon = require('../assets/icons/home.png');
const settingIcon = require('../assets/icons/setting.png');

const Header = ({title}) => {
  const navigation = useNavigation();
  const {login, setLogin} = useNavigationValue();
  const loginPress = () => {
    navigation.navigate('LoginPage');
  };
  const logoutPress = () => {
    setApiLogout();
    setLogin(false);
  };
  return (
    <View style={{backgroundColor: '#FFF'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 15,
          backgroundColor: '#FFF',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={homeIcon} style={{width: 30, height: 30}} />
        </TouchableOpacity>
        <Text>{title}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <Image source={settingIcon} style={{width: 30, height: 30}} />
        </TouchableOpacity>
      </View>
      {login ? (
        <View style={{marginLeft: 'auto', marginRight: 15}}>
          <TouchableOpacity onPress={logoutPress}>
            <Text style={{color: 'red'}}>로그아웃</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{marginLeft: 'auto', marginRight: 15}}>
          <TouchableOpacity onPress={loginPress}>
            <Text>로그인</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;
