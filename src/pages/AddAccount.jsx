import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigationValue} from '../NavigationContext';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';

const {width} = Dimensions.get('window');

const AddAccount = () => {
  const {members, setMembers} = useNavigationValue();
  const [newId, setNewId] = useState('');
  const [newPw, setNewPw] = useState('');
  const [newName, setNewName] = useState('');
  const [newMail, setNewMail] = useState('');

  const navigation = useNavigation();

  const onPressNewAccount = () => {
    setMembers([
      ...members,
      {
        id: members.length,
        memberId: newId,
        memberPw: newPw,
        memberName: newName,
      },
    ]);
    setNewId('');
    setNewPw('');
    setNewName('');
    setNewMail('');
    navigation.navigate('LoginPage');
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
        <Header title={'회원가입'} />
        <View
          style={{
            flex: 1,
            paddingHorizontal: 16,
            marginTop: 10,
          }}>
          <View style={{paddingVertical: 50, gap: 20}}>
            <View style={styles.textInputContainer}>
              <Text style={{width: 30, fontSize: 15, fontWeight: 'bold'}}>
                ID
              </Text>
              <TextInput
                style={styles.textInputStyle}
                maxLength={20}
                placeholder="아이디 입력"
                placeholderTextColor="#BBB"
                autoCapitalize="none"
                spellCheck={false}
                autoCorrect={false}
                value={newId}
                onChangeText={text => setNewId(text)}
              />
            </View>
            <View style={styles.textInputContainer}>
              <Text style={{width: 30, fontSize: 15, fontWeight: 'bold'}}>
                PW
              </Text>
              <TextInput
                style={styles.textInputStyle}
                maxLength={20}
                placeholder="패스워드 입력"
                placeholderTextColor="#BBB"
                autoCapitalize="none"
                spellCheck={false}
                autoCorrect={false}
                value={newPw}
                onChangeText={text => setNewPw(text)}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.textInputContainer}>
              <Text
                style={{
                  width: 30,
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                이름
              </Text>
              <TextInput
                style={styles.textInputStyle}
                maxLength={20}
                placeholder="이름 입력"
                placeholderTextColor="#BBB"
                autoCapitalize="none"
                spellCheck={false}
                autoCorrect={false}
                value={newName}
                onChangeText={text => setNewName(text)}
              />
            </View>
            <View style={styles.textInputContainer}>
              <Text
                style={{
                  width: 30,
                  fontSize: 15,
                  fontWeight: 'bold',
                }}>
                메일
              </Text>
              <TextInput
                style={styles.textInputStyle}
                maxLength={20}
                placeholder="메일 입력"
                placeholderTextColor="#BBB"
                autoCapitalize="none"
                spellCheck={false}
                autoCorrect={false}
                value={newMail}
                onChangeText={text => setNewMail(text)}
              />
            </View>
            <View
              style={{width: width - 32, alignItems: 'center', marginTop: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 200,
                  gap: 20,
                }}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => {
                    setNewId('');
                    setNewPw('');
                    setNewName('');
                    navigation.goBack();
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                    취소
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={onPressNewAccount}
                  style={styles.buttonStyle}>
                  <Text
                    style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                    회원가입
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    width: width - 32,
    height: 50,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginBottom: 0,
    paddingHorizontal: 10,
  },
  textInputStyle: {
    width: 300,
    height: 50,
    paddingVertical: 0,
    fontSize: 15,
    color: '#3A3A3A',
    borderWidth: 2,
    borderColor: '#C3C3C3',
    borderRadius: 5,
  },
  buttonStyle: {
    width: 150,
    height: 50,
    backgroundColor: '#4AABFF',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddAccount;
