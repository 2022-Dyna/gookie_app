import {View, Text, Button, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as loginAction from '../../Reducer/action/index';

export default function Login({ navigation }) {
    const dispatch = useDispatch();



    return (
        <View>
            <View>
                <Text>
                    로그인 입니다.
                </Text>
            </View>
            <TouchableOpacity
                onPress={()=>{
                    dispatch(loginAction.makeLogin());
                    navigation.navigate('Home');
                }}
            >
                <View>
                    <Text>
                        로그인
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{

                }}
            >
                <View>
                    <Text>
                        로그아웃
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
