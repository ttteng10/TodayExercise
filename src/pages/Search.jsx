import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from 'react-native';
import Header from '../components/Header';

const searchIcon = require('../assets/icons/search.png');
const closeBtn = require('../assets/icons/closebtn.png');

const {width} = Dimensions.get('window');
const dummy_searchRecord = [
  {
    id: 1,
    record: '러닝',
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
    id: 2,
    record: '필라테스',
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
    record: '오운완',
    name: 'Physical_111',
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
    id: 5,
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
    id: 6,
    record: '오운완',
    name: 'Physical_111',
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
];

const Search = () => {
  // const [searchRecord, setSearchRecord] = useState([...dummy_searchRecord]);
  const [searchRecord, setSearchRecord] = useState([]);
  const [recordVisible, setRecordVisible] = useState(false);
  const [recordId, setRecordId] = useState(dummy_searchRecord.length + 1);
  const [searchValue, setSearchValue] = useState('');
  const [dataVisible, setDataVisible] = useState(false);
  const [dataResult, setDataResult] = useState([]);
  const keyboardDrop = () => {
    Keyboard.dismiss();
    setRecordVisible(false);
    setDataVisible(true);
  };
  const searchData = searchText => {
    setDataResult([
      ...dummy_searchRecord.filter(
        e => e.record.toLowerCase() === searchText.toLowerCase(),
      ),
    ]);
    if (dataResult.length > 0) {
      setRecordVisible(false);
      setDataVisible(true);
    } else {
      setRecordVisible(false);
      setDataVisible(true);
    }
  };
  const deleteRecord = id => {
    setSearchRecord([...searchRecord.filter(e => e.id !== id)]);
  };
  const handleSearch = () => {
    setSearchRecord([...searchRecord, {id: recordId, record: searchValue}]);
    setRecordId(recordId + 1);
    searchData(searchValue);
    setSearchValue('');
  };

  // const uniqueRecord = () => {
  //   const uniqueArray = searchRecord.filter((item, index) => {
  //     if (index > 0) {
  //       for (let i = index - 1; i >= 0; i--) {}
  //     }
  //   });
  //   setSearchRecord([...uniqueArray]);
  // };

  useEffect(() => {}, [searchRecord]);

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 8,
        }}>
        <TouchableOpacity onPress={() => searchData(item.record)}>
          <Text style={{fontSize: 15, fontWeight: '400', lineHeight: 22}}>
            {item.record}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteRecord(item.id)}>
          <Image source={closeBtn} style={{width: 24, height: 24}} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderData = ({item}) => {
    return (
      <View style={{borderWidth: 5, borderColor: 'white'}}>
        <TouchableOpacity>
          <Image
            source={{uri: item.feedImg[0]}}
            style={{width: 110, height: 110}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardDrop}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
        <Header title={'검색페이지'} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{backgroundColor: '#FFF'}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 15,
              backgroundColor: '#F5F5F5',
              borderRadius: 5,
            }}
            onPress={() => {
              setRecordVisible(true), setDataVisible(false);
            }}>
            <Image source={searchIcon} style={{width: 30, height: 30}} />
            <TextInput
              style={{
                width: 330,
                height: 40,
                paddingVertical: 0,
                fontSize: 15,
                color: '#3A3A3A',
              }}
              onFocus={() => {
                setRecordVisible(true), setDataVisible(false);
              }}
              maxLength={200}
              placeholder="검색어를 입력해주세요."
              placeholderTextColor="#BBB"
              autoCapitalize="none"
              spellCheck={false}
              autoCorrect={false}
              value={searchValue}
              onChangeText={text => setSearchValue(text)}
              returnKeyType="search"
              onSubmitEditing={handleSearch}
            />
          </TouchableOpacity>
        </KeyboardAvoidingView>
        {recordVisible && (
          <View>
            <View
              style={{
                height: 30,
                paddingHorizontal: 15,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 15, fontWeight: '700', color: '#3A3A3A'}}>
                최근 검색어
              </Text>
            </View>
            <View style={{paddingHorizontal: 15, justifyContent: 'center'}}>
              <FlatList
                data={searchRecord}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                removeClippedSubviews
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        )}
        {dataVisible && (
          <View>
            <View
              style={{
                height: 30,
                paddingHorizontal: 15,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 15, fontWeight: '700', color: '#3A3A3A'}}>
                검색 결과
              </Text>
            </View>
            <View style={{paddingHorizontal: 15, justifyContent: 'center'}}>
              {dataResult.length > 0 ? (
                <FlatList
                  data={dataResult}
                  renderItem={renderData}
                  keyExtractor={item => item.id}
                  removeClippedSubviews
                  showsVerticalScrollIndicator={false}
                  numColumns={3}
                />
              ) : (
                <Text>검색 결과 없습니다.</Text>
              )}
            </View>
          </View>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Search;
