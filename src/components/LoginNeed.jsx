import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoginNeed = () => {
  const navigation = useNavigation();
  const goLogin = () => {
    navigation.navigate('LoginPage');
  };
  const returnPage = () => {
    navigation.goBack();
  };
  return (
    <View style={{marginTop: 50, alignItems: 'center', paddingVertical: 10}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 40}}>
        로그인이 필요한 페이지입니다.
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
        }}>
        <TouchableOpacity onPress={returnPage} style={styles.buttonStyle}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
            홈으로이동
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goLogin} style={styles.buttonStyle}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
            로그인페이지
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default LoginNeed;
