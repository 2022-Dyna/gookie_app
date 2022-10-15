import {View, Text, Button, TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as loginAction from '../../Reducer/action/index';

export default function MyPage({ navigation }) {
    const dispatch = useDispatch();

    return (
        <View>
            <View>
                <Text>
                    마이페이지 입니다.
                </Text>
            </View>
            <View>
                <TouchableOpacity
                    onPress={()=>{
                        dispatch(loginAction.makeLogout());
                        navigation.navigate('Home');
                    }}
                >
                    <Text>
                        로그아웃
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
