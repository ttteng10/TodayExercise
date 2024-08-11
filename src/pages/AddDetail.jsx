import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {useNavigation} from '@react-navigation/native';
import {useNavigationValue} from '../NavigationContext';
import RNFS from 'react-native-fs';

const leftBackIcon = require('../assets/icons/leftBack.png');

const {width} = Dimensions.get('window');

const AddDetail = () => {
  const navigation = useNavigation();
  const {addImages, setAddImages} = useNavigationValue();

  const [images, setImages] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState();
  const [selectedIndex, setSelectedIndex] = useState();
  const [selectedImages, setSelectedImages] = useState([]);

  const finishAlbum = () => {
    setAddImages(selectedImages);
    navigation.navigate('Add');
  };

  useEffect(() => {
    FetchImage();
  }, []);

  const FetchImage = async () => {
    CameraRoll.getPhotos({
      first: 100,
      assetType: 'Photos',
      groupTypes: 'All',
    }).then(res => {
      //   if (!selectedPhoto) {
      //     setSelectedPhoto(res.edges[0].node.image);
      //     setSelectedIndex(0);
      //   }
      setImages(res.edges.map(e => e.node.image));
    });
  };

  const changePHURI = async url => {
    const destPath = `${RNFS.CachesDirectoryPath}/image.jpg`;
    await RNFS.copyAssetsFileIOS(url, destPath, 0, 0);
    setSelectedImages([...selectedImages, `file://${destPath}`]);
  };

  const handleSelectImage = () => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
    })
      .then(selectedImages => {
        const imagePaths = selectedImages.map(image => ({
          uri: image.path,
        }));
        setAddImages([...imagePaths]);
      })
      .catch(error => {
        console.log('Error selecting images: ', error);
      });
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={
          selectedIndex === index
            ? {borderWidth: 3, borderColor: 'red'}
            : {borderWidth: 1, borderColor: '#FFF'}
        }
        onPress={() => {
          setSelectedPhoto(item);
          setSelectedIndex(index);
          changePHURI(item.uri);
        }}>
        <Image
          source={item}
          style={{width: width / 3 - 3, height: width / 3 - 3}}
        />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 15,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={leftBackIcon}
            style={{width: 30, height: 30, color: '#white'}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          앨범
        </Text>
        <TouchableOpacity onPress={finishAlbum}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
            완료
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={item => item.uri}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews
        />
      </View>
    </SafeAreaView>
  );
};

export default AddDetail;
