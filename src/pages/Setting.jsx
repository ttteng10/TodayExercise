import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import Header from '../components/Header';

const dummyProfile = require('../assets/dummyProfile.png');
const hummanIcon = require('../assets/icons/myprofile.png');

const {width} = Dimensions.get('window');

const Setting = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <Header title={'설정'} />
        <View>
          <View
            style={{
              flexDirection: 'row',
              padding: 16,
              marginTop: 10,
              gap: 24,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 0.5,
              borderColor: '#E0E0E0',
            }}>
            <Image source={dummyProfile} style={{width: 80, height: 80}} />
            <View style={{gap: 5}}>
              <Text style={{fontSize: 20, fontWeight: '700'}}>김승한</Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: '#3A3A3A',
                }}>
                운동 열심히!!!
              </Text>
            </View>
            <TouchableOpacity
              style={{
                marginLeft: 'auto',
                alignItems: 'center',
                gap: 5,
              }}>
              <Image source={hummanIcon} stlye={{widht: 30, height: 30}} />
              <Text style={{fontSize: 13}}>계정 설정</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{padding: 16, gap: 12}}>
          <View>
            <Text style={styles.subText}>서비스 소식</Text>
          </View>
          <TouchableOpacity style={{width: width, height: 40}}>
            <Text style={styles.mainText}>공지사항</Text>
          </TouchableOpacity>
          <View
            style={{
              paddingHorizontal: 24,
              height: 0,
              borderTopWidth: 0.3,
              color: '##C3C3C3',
              marginBottom: 20,
            }}
          />
          <View>
            <Text style={styles.subText}>고객 센터</Text>
          </View>
          <TouchableOpacity style={{width: width, height: 40}}>
            <Text style={styles.mainText}>앱건의</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: width, height: 40}}>
            <Text style={styles.mainText}>1:1문의</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: width, height: 40}}>
            <Text style={styles.mainText}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: width, height: 40}}>
            <Text style={styles.mainText}>이용약관</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#C3C3C3',
  },
  mainText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3A3A3A',
  },
});

export default Setting;
