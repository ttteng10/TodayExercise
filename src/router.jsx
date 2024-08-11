import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomTab from './components/CustomBottomTab';

import Splash from './pages/Splash';
import Home from './pages/Home';
import Search from './pages/Search';
import Message from './pages/Message';
import MyPage from './pages/MyPage';
import Add from './pages/Add';
import Setting from './pages/Setting';
import LoginPage from './pages/LoginPage';
import AddDetail from './pages/AddDetail';
import MessageDetail from './pages/MessageDetail';
import AddAccount from './pages/AddAccount';
import AddAccountApi from './pages/AddAccountApi';
import LoginPageApi from './pages/LoginPageApi';
import HomeApi from './pages/HomeApi';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const renderTabBar = props => <CustomBottomTab {...props} />;

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Home" component={HomeApi} /> */}
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // gestureEnabled: false
      }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{animation: 'fade_from_bottom'}}
      />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Setting" component={Setting} />
      {/* <Stack.Screen name="LoginPage" component={LoginPage} /> */}
      <Stack.Screen name="LoginPage" component={LoginPageApi} />
      <Stack.Screen name="AddDetail" component={AddDetail} />
      <Stack.Screen name="MessageDetail" component={MessageDetail} />
      {/* <Stack.Screen name="AddAccount" component={AddAccount} /> */}
      <Stack.Screen name="AddAccount" component={AddAccountApi} />
    </Stack.Navigator>
  );
};

export default Router;
