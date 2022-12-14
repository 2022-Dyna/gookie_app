import {useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import FWIcon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import * as loginAction from '../../Reducer/action/index';
import {commonStyles} from '../../common/index';
import ConfirmModal from '../../Component/ConfirmModal';
import axios from 'axios';
import {LOGIN} from '../../Reducer/action/ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {as} from 'react-native/sdks/hermes/test/Parser/flow/export';
import Loader from '../../Component/Loader';


export default function Login({navigation}) {
  const dispatch = useDispatch();

  const [loginLoading, setLoginLoading] = useState(false);

  const [emailfocus, setEmailFocus] = useState(false);
  const [pwfocus, setPwFocus] = useState(false);
  const [autoLogin, setAutoLogin] = useState(true);
  const [pressLogin, setPressLogin] = useState(false);
  const [loginFail, setLoginFail] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [id, setId] = useState(null);
  const [pw, setPw] = useState(null);

  const userLogin = () => {
    setLoginLoading(true);
    console.log(id);
    console.log(pw);
    axios
      .post('http://144.24.94.124:8091/api/v1/login', {
        memberLoginId: id,
        memberLoginPw: pw,
      })
      .then(async res => {
        console.log(res.data.data);
        if (res.data.data.result == 0) {
          if (autoLogin) {
            await AsyncStorage.setItem(
              'loginUser',
              JSON.stringify(res.data.data.loginObj),
            );
          }
          setLoginLoading(false);
          setLoginSuccess(true);
        } else {
          setLoginLoading(false);
          setLoginFail(true);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={commonStyles.loaderWrap}>
      {loginLoading && <Loader type={'trans'} />}
      <ScrollView
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
        <View style={styles.container}>
          <View style={styles.inner}>
            <View>
              <Text style={[commonStyles.maintit, commonStyles.mb8]}>
                ?????????
              </Text>
            </View>
            <View style={commonStyles.mt16}>
              <Text style={[commonStyles.labeltext, commonStyles.mb8]}>
                ?????????
              </Text>
              <TextInput
                style={
                  !emailfocus ? commonStyles.input : commonStyles.inputfocus
                }
                onFocus={() => {
                  setEmailFocus(true);
                }}
                onBlur={() => {
                  setEmailFocus(false);
                }}
                onChangeText={text => setId(text)}
              />
            </View>
            <View style={commonStyles.mt16}>
              <Text style={[commonStyles.labeltext, commonStyles.mb8]}>
                ????????????
              </Text>
              <TextInput
                style={!pwfocus ? commonStyles.input : commonStyles.inputfocus}
                onFocus={() => {
                  setPwFocus(true);
                }}
                onBlur={() => {
                  setPwFocus(false);
                }}
                secureTextEntry={true}
                onChangeText={text => setPw(text)}
              />
            </View>
            <View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setAutoLogin(!autoLogin);
                  }}
                  activeOpacity={1}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 16,
                    }}>
                    <FWIcon
                      color={autoLogin ? '#f4933a' : '#d0d0d0'}
                      name="check-square"
                      size={16}
                    />
                    <Text
                      style={{
                        fontFamily: 'pre300',
                        fontSize: 12,
                        letterSpacing: -0.24,
                        marginLeft: 8,
                      }}>
                      ?????? ?????????
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 32,
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Join');
                }}
                activeOpacity={1}>
                <Text style={styles.jointext}>????????????</Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'pre300',
                  paddingHorizontal: 16,
                  fontSize: 12,
                  color: '#7b7b7b',
                }}>
                |
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('PwFind');
                }}
                activeOpacity={1}>
                <Text style={styles.jointext}>???????????? ??????</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 24}}>
              <TouchableOpacity
                onPressIn={() => {
                  setPressLogin(true);
                }}
                onPressOut={() => {
                  setPressLogin(false);
                }}
                onPress={() => userLogin()}>
                <View
                  style={
                    !pressLogin
                      ? [commonStyles.btnDefault, commonStyles.btnBgColor]
                      : [commonStyles.btnDefault, commonStyles.btnPressColor]
                  }>
                  <Text style={[commonStyles.btnTextDefault]}>?????????</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 24}}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('JoinCongress')}>
                <Text style={styles.jointext02}>???????????? ID / PW ????????????</Text>
              </TouchableOpacity>
            </View>
            <ConfirmModal
              transparent={true}
              btnBoolean={loginFail}
              onPress={() => {
                setLoginFail(false);
              }}
              titleText={'????????? ??????'}
              bodyText={'????????? ?????? ??????????????? ??????????????????.'}
              btnText={'??????'}
            />
            <ConfirmModal
              transparent={true}
              btnBoolean={loginSuccess}
              onPress={() => {
                setLoginSuccess(false);
                navigation.navigate('Home');
                dispatch(loginAction.makeLogin());
              }}
              titleText={'????????? ??????'}
              bodyText={'????????? ?????? ?????? ????????????!'}
              btnText={'??????'}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  inner: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  jointext: {
    fontFamily: 'pre300',
    fontSize: 12,
    color: '#7b7b7b',
    letterSpacing: -0.24,
  },
  jointext02: {
    fontFamily: 'pre300',
    fontSize: 12,
    color: '#7b7b7b',
    textAlign: 'center',
    letterSpacing: -0.24,
  },
});
