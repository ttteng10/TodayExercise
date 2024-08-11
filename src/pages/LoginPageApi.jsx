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
import Header from '../components/Header';
import {setApiLogin} from '../apis/login';

const {width} = Dimensions.get('window');

const LoginPage = ({navigation}) => {
  const {login, setLogin, members} = useNavigationValue();
  const [idValue, setIdValue] = useState('');
  const [password, setPassword] = useState('');

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const loginPress = () => {
    if (setApiLogin(idValue, password)) {
      setLogin(true);
      navigation.goBack();
    }
  };
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
        <Header title={'로그인페이지'} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={10}
          style={{flex: 1, marginTop: 10, alignItems: 'center'}}>
          <Text style={{marginTop: 100, marginBottom: 50, fontSize: 30}}>
            오운완
          </Text>
          <View style={{paddingVertical: 50, borderWidth: 1, borderRadius: 5}}>
            <View style={styles.textInputContainer}>
              <Text style={{width: 30}}>메일</Text>
              <TextInput
                style={styles.textInputStyle}
                maxLength={20}
                placeholder="아이디 입력"
                placeholderTextColor="#BBB"
                autoCapitalize="none"
                spellCheck={false}
                autoCorrect={false}
                value={idValue}
                onChangeText={text => setIdValue(text)}
              />
            </View>
            <View style={styles.textInputContainer}>
              <Text style={{width: 30}}>PW</Text>
              <TextInput
                style={styles.textInputStyle}
                value={password}
                onChangeText={text => setPassword(text)}
                placeholder="비밀번호 입력"
                placeholderTextColor="#BBB"
                autoCapitalize="none"
                spellCheck={false}
                autoCorrect={false}
                secureTextEntry={true}
              />
            </View>
            <View
              style={{width: width - 32, alignItems: 'center', marginTop: 5}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 200,
                  gap: 5,
                }}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => navigation.navigate('AddAccount')}>
                  <Text
                    style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                    회원가입
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={loginPress}
                  style={styles.buttonStyle}>
                  <Text
                    style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                    로그인
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    width: width - 32,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginBottom: 0,
  },
  textInputStyle: {
    width: 150,
    height: 40,
    paddingVertical: 0,
    fontSize: 15,
    color: '#3A3A3A',
    borderWidth: 2,
    borderColor: '#C3C3C3',
    borderRadius: 5,
  },
  buttonStyle: {
    width: 90,
    height: 50,
    backgroundColor: '#4AABFF',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginPage;
