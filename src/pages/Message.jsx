import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigationValue} from '../NavigationContext';
import Header from '../components/Header';
import LoginNeed from '../components/LoginNeed';
import {useNavigation} from '@react-navigation/native';
const Message = () => {
  const {login, allData, setMessageId} = useNavigationValue();
  const navigation = useNavigation();

  const moveMessage = (name, id) => {
    navigation.navigate('MessageDetail', {messageName: name, messageId: id});
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => moveMessage(item.name, item.id)}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <View style={{flexDirection: 'row', gap: 5}}>
          <Image
            source={{uri: item.profileImg}}
            style={{width: 30, height: 30}}
          />
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
            <Text style={{fontSize: 14, fontWeight: '400'}}>
              {item.contents}
            </Text>
          </View>
        </View>
        <View>
          <Text style={{fontSize: 12, color: '#BBB'}}>오후 2:31</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <Header title={'DM'} />
        <View style={{padding: 16}}>
          {login ? (
            <View style={{marginTop: 10}}>
              <FlatList
                data={allData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                removeClippedSubviews
                showsVerticalScrollIndicator={false}
              />
            </View>
          ) : (
            <LoginNeed />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Message;
