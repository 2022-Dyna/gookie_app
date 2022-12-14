import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import ScreenB from '../Screen/ScreenB';
import ScreenA from '../Screen/ScreenA';
import Search from '../Screen/Search';
import Login from '../Screen/Login';
import Home from '../Screen/Home';
import Alarm from '../Screen/Alarm';
import MyPage from '../Screen/MyPage';
import Join from '../Screen/Join';
import JoinCongress from '../Screen/JoinCongress';
import PwFind from '../Screen/PwFind';
import PwReset from '../Screen/PwReset';
import Detail from '../Screen/Detail';
import MyPageComment from '../Screen/MyPageComment';
import Guide from '../Screen/Guide';
import WebViewPage from '../Screen/WebViewPage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as loginAction from '../Reducer/action';

export default function Navigation() {
  const loginState = useSelector(state => state.login);
  const dispatch = useDispatch();
  console.log(loginState, '로그인 여부');
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };
  useEffect(() => {
    const load = async () => {
      const LoginUser = await AsyncStorage.getItem('loginUser');
      if (LoginUser != null) {
        console.log(LoginUser);
        dispatch(loginAction.makeLogin());
      }
    };
    load();
  }, []);

  return (
    <NavigationContainer theme={MyTheme}>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator();
const MainStack = createStackNavigator();

function MainStackNavigator() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="RootNavigator">
      <MainStack.Screen name="RootNavigator" component={RootNavigator} />
      <MainStack.Screen name="ScreenA" component={ScreenA} />
      <MainStack.Screen name="ScreenB" component={ScreenB} />
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="Join" component={Join} />
      <MainStack.Screen name="JoinCongress" component={JoinCongress} />
      <MainStack.Screen name="PwFind" component={PwFind} />
      <MainStack.Screen name="PwReset" component={PwReset} />
      <MainStack.Screen name="Detail" component={Detail} />
      <MainStack.Screen name="MyPageComment" component={MyPageComment} />
      <MainStack.Screen name="Guide" component={Guide} />
      <MainStack.Screen name="WebViewPage" component={WebViewPage} />
    </MainStack.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ScreenA"
        component={ScreenA}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  const loginState = useSelector(state => state.login);

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: '#bbb',
        tabBarActiveTintColor: '#f4933a',
        tabBarLabelStyle: {
          fontFamily: 'pre700',
          fontSize: 12,
          marginTop: -5,
          marginBottom: 5,
        },
      }}
      tabBarOptions={{keyboardHidesTabBar: true}}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: '홈',
          tabBarIcon: ({color}) => {
            return (
              <IconIonicons color={color} name="home-outline" size={20} solid />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={{
          title: '의원찾기',
          tabBarIcon: ({color}) => {
            return (
              <IconIonicons
                color={color}
                name="search-outline"
                size={20}
                solid
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={!loginState ? 'Login' : 'MyPage'}
        component={!loginState ? Login : MyPage}
        options={{
          title: !loginState ? '로그인' : '마이페이지',
          tabBarIcon: ({color}) => {
            return (
              <IconIonicons
                color={color}
                name="person-outline"
                size={20}
                solid
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Alarm"
        component={Alarm}
        options={{
          title: '알림',
          tabBarIcon: ({color}) => {
            return (
              <IconIonicons
                color={color}
                name="notifications-outline"
                size={20}
                solid
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
