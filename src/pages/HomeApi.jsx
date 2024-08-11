import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigationValue} from '../NavigationContext';
import Header from '../components/Header';
import CommentsModal from '../components/CommentsModal';
import {getApiVersion} from '../apis/basic';
import axios from 'axios';
import {setApiNewAccount} from '../apis/accounts';
import {setApiFollower} from '../apis/follower';
import {setApiFollowing, setApiFollowingAdd} from '../apis/following';
import {setApiFeed} from '../apis/feed';

const heart = require('../assets/icons/heart.png');
const comment = require('../assets/icons/comment.png');
const more = require('../assets/icons/more.png');
const leftArrow = require('../assets/icons/left-arrow.png');
const rightArrow = require('../assets/icons/right-arrow.png');
const heartOn = require('../assets/icons/heart_on.png');
const heartOff = require('../assets/icons/heart_off.png');

const {width} = Dimensions.get('window');

const HomeApi = () => {
  let imagesApi;
  useEffect(() => {
    setApiFeed(77).then(apiResImages => {
      if (apiResImages && apiResImages.length > 0) {
        const imageUrl = `http://13.209.27.220:8080${apiResImages[0]}`;
        imagesApi = imageUrl;
        console.log('Image URL:', imageUrl);
      } else {
        console.log('No images available or error occurred.');
      }
    });
    setAllData([
      {
        id: 0,
        record: '오운완',
        name: 'Api_111',
        profileImg: 'https://avatar.iran.liara.run/public',
        feedImg: [imagesApi],
        contents: '등 운동 완료!!',
        like: 37,
        likeUsers: [1, 2, 3],
      },
      ...allData,
    ]);
    // const id = setApiFollowingAdd('mail@mail.com');
    setApiFollowing();
    // setApiFollower();
    // setApiNewAccount();
  }, []);

  const {allData, setAllData} = useNavigationValue();

  const [imageIndices, setImageIndices] = useState({});
  const [heartState, setHeartState] = useState(heartOff);
  const [isVisible, setIsVisible] = useState(false);

  const heartPress = () => {
    if (heartState === heartOff) {
      setHeartState(heartOn);
    } else if (heartState === heartOn) {
      setHeartState(heartOff);
    }
  };

  const leftImageBtn = feedId => {
    setImageIndices(prevIndices => {
      const newIndex = prevIndices[feedId] > 0 ? prevIndices[feedId] - 1 : 0;
      return {...prevIndices, [feedId]: newIndex};
    });
  };

  const rightImageBtn = (feedId, length) => {
    setImageIndices(prevIndices => {
      const newIndex =
        prevIndices[feedId] < length - 1 ? prevIndices[feedId] + 1 : length - 1;
      return {...prevIndices, [feedId]: newIndex};
    });
  };

  const renderCarousel = ({item, index}) => {
    return (
      <Image
        source={{uri: item[index]}}
        style={{width, height: width, marginBottom: 8}}
      />
    );
  };

  const renderFeed = ({item, index}) => {
    const imageIndex = imageIndices[item.id] || 0;
    return (
      <View style={{paddingVertical: 24}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 16,
            marginBottom: 8,
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <Image
              source={{uri: item.profileImg}}
              style={{width: 32, height: 32}}
            />
            <Text style={{fontSize: 16, fontWeight: '400', lineHeight: 19.97}}>
              {item.name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={more} style={{width: 24, height: 24}} />
          </TouchableOpacity>
        </View>
        {item.feedImg.length > 1 ? (
          //   <Carousel
          //     data={item.feedImg}
          //     renderItem={renderCarousel}
          //     sliderWidth={width}
          //     itemWidth={width}
          //   />
          <View>
            <Image
              source={{uri: item.feedImg[imageIndex]}}
              style={{width, height: width, marginBottom: 8}}
              resizeMode="contain"
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 4,
                position: 'absolute',
                zIndex: 4,
                top: width - 20,
                left: width / 2 - 25,
                backgroundColor: '#fff',
                opacity: 0.4,
              }}>
              <TouchableOpacity onPress={() => leftImageBtn(item.id)}>
                <Image source={leftArrow} style={{width: 20, height: 20}} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => rightImageBtn(item.id, item.feedImg.length)}>
                <Image source={rightArrow} style={{width: 20, height: 20}} />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <Image
            source={{uri: item.feedImg[0]}}
            style={{width, height: width, marginBottom: 8}}
            resizeMode="contain"
          />
        )}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            marginBottom: 5,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <TouchableOpacity onPress={() => heartPress()}>
              <Image source={heartState} style={{width: 30, height: 30}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
              <Image source={comment} style={{width: 30, height: 30}} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            marginBottom: 5,
          }}>
          <Text>좋아요 37개</Text>
        </View>
        <View style={{marginHorizontal: 16, gap: 4}}>
          <Text>{item.name}</Text>
          <Text style={{fontWeight: '400', color: '#4F4F4F'}}>
            {item.contents}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <Header title={'HOME'} />
        <View style={{flex: 1, backgroundColor: '#FFF', marginBottom: 30}}>
          <FlatList
            data={allData}
            renderItem={renderFeed}
            keyExtractor={item => item.id}
            removeClippedSubviews
            showsVerticalScrollIndicator={false}
          />
          <CommentsModal isVisible={isVisible} setIsVisible={setIsVisible} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeApi;
