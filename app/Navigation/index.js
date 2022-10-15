import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import ScreenB from "../Screen/ScreenB";
import ScreenA from "../Screen/ScreenA";
import Search from "../Screen/Search";
import Login from "../Screen/Login";
import Home from "../Screen/Home";
import Alarm from "../Screen/Alarm";
import MyPage from "../Screen/MyPage";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconIonicons from "react-native-vector-icons/Ionicons";
import {
    createStackNavigator,
} from '@react-navigation/stack';
import {useDispatch,useSelector} from 'react-redux';



export default function Navigation() {
    const loginState = useSelector(state => state.login);
    console.log(loginState);


    return (
        <NavigationContainer>
            <MainStackNavigator/>
        </NavigationContainer>
    );
}
const Stack = createNativeStackNavigator();
const MainStack = createStackNavigator();

function MainStackNavigator(){
    return(
        <MainStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="RootNavigator"
        >
            <MainStack.Screen name="RootNavigator" component={RootNavigator} />
            <MainStack.Screen name="ScreenA" component={ScreenA} />
            <MainStack.Screen name="ScreenB" component={ScreenB} />
            <MainStack.Screen name="Login" component={Login} />
        </MainStack.Navigator>
    )
}

function RootNavigator() {
    return (

            <Stack.Navigator>
                <Stack.Screen
                    name="Root"
                    component={BottomTabNavigator}
                    options={{headerShown:false}}
                />
                <Stack.Screen
                    name="ScreenA"
                    component={ScreenA}
                    options={{headerShown:false}}
                />
            </Stack.Navigator>

    );
}

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {

    const loginState = useSelector(state => state.login);

    return (
        <BottomTab.Navigator initialRouteName="Home">
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    title: '홈',
                    tabBarIcon: ({color}) => {
                        return <IconIonicons color={color} name="home-outline" size={25} solid />;
                    },
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={Search}
                options={{
                    title: '검색',
                    tabBarIcon: ({color}) => {
                        return <IconIonicons color={color} name="search-outline" size={25} solid />;
                    },
                }}
            />
            <BottomTab.Screen
                name="MyPage"
                component={!loginState?Login:MyPage}
                options={{
                    title: !loginState?'로그인':'마이페이지',
                    tabBarIcon: ({color}) => {
                        return <IconIonicons color={color} name="person-outline" size={25} solid />;
                    },
                }}
            />
            <BottomTab.Screen
                name="Alarm"
                component={Alarm}
                options={{
                    title: '알람',
                    tabBarIcon: ({color}) => {
                        return <IconIonicons color={color} name="notifications-outline" size={25} solid />;
                    },
                }}
            />
        </BottomTab.Navigator>
    );
}
