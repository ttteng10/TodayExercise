import React, {useEffect} from 'react';
import {View, Text, ImageBackground} from 'react-native';

const backImage = require('../assets/dummyBackImg.png');

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainTab');
    }, 2000);
  }, []);

  return (
    <ImageBackground
      source={backImage}
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: 150,
        resizeMode: 'cover',
      }}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.2)',
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          Today Work Out
        </Text>
        <Text style={{fontSize: 16, fontWeight: '500', color: 'white'}}>
          운동 기록하기
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Splash;
