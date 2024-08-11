import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useNavigationValue} from '../NavigationContext';
import Modal from 'react-native-modal';
// import Carousel from 'react-native-snap-carousel';

import Header from '../components/Header';

const {width} = Dimensions.get('window');
const imageUploadIcon = require('../assets/icons/image_upload.png');
const leftArrow = require('../assets/icons/left-arrow.png');
const rightArrow = require('../assets/icons/right-arrow.png');

const Add = () => {
  const {addImages, setAddImages, allData, setAllData} = useNavigationValue();
  const [addImage, setAddImage] = useState([]);
  const [addText, setAddText] = useState('');
  const [addDummy, setAddDummy] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);
  const [imageURI, setImageURI] = useState({uri: addImages[0]});

  const navigation = useNavigation();

  const keyboardDrop = () => {
    Keyboard.dismiss();
  };
  const onPressAdd = () => {
    if (addImages.length > 0 && addText.length > 0) {
      setAllData([
        {
          id: allData.length + 1,
          record: '오운완',
          name: 'Physical_111',
          profileImg: 'https://avatar.iran.liara.run/public',
          feedImg: addImages,
          contents: addText,
          like: 37,
          likeUsers: [1, 2, 3],
        },
        ...allData,
      ]);
      setAddImages([]);
      setAddText('');
      navigation.navigate('Home');
    } else if (addImages.length === 0) {
      setErrorVisible(true);
      setErrorMsg('이미지를 1개이상 첨부하세요');
      setTimeout(() => {
        setErrorVisible(false);
      }, 1000);
    } else if (addText.length === 0) {
      setErrorVisible(true);
      setErrorMsg('문구를 입력하세요');
      setTimeout(() => {
        setErrorVisible(false);
      }, 1000);
    }
  };
  const moveAlbum = () => {
    navigation.navigate('AddDetail');
  };

  const renderCarousel = ({item}) => {
    return (
      <Image
        source={{uri: item}}
        style={{width: width / 2, height: width / 2}}
      />
    );
  };

  const renderImages = ({item}) => {
    return (
      <TouchableOpacity onPress={() => setImageURI({uri: item})}>
        <Image source={{uri: item}} style={{width: 30, height: 30}} />
      </TouchableOpacity>
    );
  };
  useEffect(() => {}, [imageURI]);

  return (
    <TouchableWithoutFeedback onPress={keyboardDrop}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
        <Header title={'피드 업로드'} />
        <View
          style={{
            padding: 16,
          }}>
          <TouchableOpacity
            onPress={moveAlbum}
            style={{
              height: width / 2,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
              borderWidth: 1,
              borderColor: '#E0E0E0',
            }}>
            {addImages.length > 0 ? (
              addImages.length > 1 ? (
                <>
                  {/* <Carousel
                    data={dummy_data}
                    renderItem={renderCarousel}
                    sliderWidth={width}
                    itemWidth={width / 2}
                    containerCustomStyle={{backgroundColor: '#FFF'}}
                  /> */}
                  <Image
                    source={{uri: addImages[0]}}
                    style={{width: width / 2, height: width / 2}}
                  />
                </>
              ) : (
                <>
                  <Image
                    source={{uri: addImages[0]}}
                    style={{width: width / 2, height: width / 2}}
                  />
                </>
              )
            ) : (
              <>
                <Image
                  source={imageUploadIcon}
                  style={{width: 50, height: 50}}
                />
                <Text>이미지 업로드해주세요</Text>
              </>
            )}
          </TouchableOpacity>
          <View
            style={{
              paddingTop: 20,
              height: 80,
              marginBottom: 20,
            }}>
            <TextInput
              style={{
                minHeight: 23,
                maxHeight: 80,
                paddingVertical: 0,
                lineHeight: 18,
                fontSize: 15,
                color: '#3A3A3A',
              }}
              multiline
              maxLength={200}
              placeholder="문구를 작성해주세요"
              placeholderTextColor="#BBB"
              autoCapitalize="none"
              spellCheck={false}
              autoCorrect={false}
              value={addText}
              onChangeText={text => setAddText(text)}
            />
          </View>
          <Modal
            useNativeDriver
            isVisible={errorVisible}
            animationIn={'fadeIn'}
            animationInTiming={300}
            animationOut={'fadeOut'}
            animationOutTiming={300}
            backdropColor="#000"
            backdropOpacity={0.4}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#FFF',
                width: 150,
                height: 150,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'red'}}>
                {errorMsg}
              </Text>
            </View>
          </Modal>
          <View>
            <TouchableOpacity
              onPress={onPressAdd}
              style={{
                borderRadius: 10,
                backgroundColor: '#4AABFF',
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                업로드
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Add;
