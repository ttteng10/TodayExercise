import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigationValue} from '../NavigationContext';
import Header from '../components/Header';
import LoginNeed from '../components/LoginNeed';

const dummyProfile = require('../assets/dummyProfile.png');
const dummyImage1 = require('../assets/dummyImage.jpg');
const dummyImage2 = require('../assets/dummyImage2.jpg');
const dummyImage3 = require('../assets/dummyImage3.jpg');

const MyPage = ({navigation}) => {
  const {login} = useNavigationValue();
  const {width} = Dimensions.get('window');
  const dummyImages = [
    {id: 1, image: dummyImage1},
    {id: 2, image: dummyImage2},
    {id: 3, image: dummyImage3},
  ];
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <Image
          source={item.image}
          style={{width: width / 3 - 2, height: width / 3 - 2}}
        />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flex: 1}}>
        <Header title={'MyPage'} />
        <View style={{backgroundColor: '#FFF'}}>
          {login ? (
            <View>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 16,
                    marginTop: 10,
                    gap: 24,
                    alignItems: 'center',
                    borderWidth: 0.5,
                    borderColor: '#E0E0E0',
                  }}>
                  <Image
                    source={dummyProfile}
                    style={{width: 80, height: 80}}
                  />
                  <View style={{gap: 5}}>
                    <Text style={{fontSize: 20, fontWeight: '700'}}>
                      김승한
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '500',
                        color: '#3A3A3A',
                      }}>
                      운동 열심히!!!
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 16,
                  justifyContent: 'center',
                  gap: 90,
                  marginTop: 0,
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: '#3A3A3A',
                    }}>
                    게시글
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: '#3A3A3A',
                    }}>
                    3
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: '#3A3A3A',
                    }}>
                    팔로우
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: '#3A3A3A',
                    }}>
                    10
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: '#3A3A3A',
                    }}>
                    팔로워
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: '#3A3A3A',
                    }}>
                    10
                  </Text>
                </View>
              </View>
              <View style={{height: 5, backgroundColor: '#F5F5F5'}} />
              <View>
                <Text style={{margin: 16}}>게시글 3개</Text>
                <View style={{padding: 2}}>
                  <FlatList
                    data={dummyImages}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    removeClippedSubviews
                    numColumns={3}
                  />
                </View>
              </View>
            </View>
          ) : (
            <LoginNeed />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyPage;
