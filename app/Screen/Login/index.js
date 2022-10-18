import {useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import FWIcon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import * as loginAction from '../../Reducer/action/index';
import {commonStyles} from '../../common/index';

export default function Login({navigation}) {
  const dispatch = useDispatch();

  const [emailfocus, setEmailFocus] = useState(false);
  const [pwfocus, setPwFocus] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);

  const [pressLogin, setPressLogin] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View>
          <Text style={[commonStyles.maintit, commonStyles.mb8]}>로그인</Text>
        </View>
        <View style={styles.mt16}>
          <Text style={[commonStyles.labeltext, commonStyles.mb8]}>이메일</Text>
          <TextInput
            style={!emailfocus ? commonStyles.input : commonStyles.inputfocus}
            onFocus={() => {
              setEmailFocus(true);
            }}
            onBlur={() => {
              setEmailFocus(false);
            }}
          />
        </View>
        <View style={commonStyles.mt16}>
          <Text style={[commonStyles.labeltext, commonStyles.mb8]}>
            비밀번호
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
                  size={25}
                />
                <Text style={{marginLeft: 8}}>자동 로그인</Text>
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
            onPress={()=>{
              navigation.navigate('Join');
            }}
          >
            <Text style={styles.jointext}>회원가입</Text>
          </TouchableOpacity>
          <Text
            style={{
              paddingHorizontal: 16,
              fontSize: 12,
              fontWeight: '300',
              color: '#7b7b7b',
            }}>
            |
          </Text>
          <TouchableOpacity>
            <Text style={styles.jointext}>비밀번호 찾기</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 24}}>
          <TouchableOpacity
            onPressIn={() => {
              setPressLogin(true);
            }}
            onPressOut={() => {
              setPressLogin(false);
            }}>
            <View
              style={[
                pressLogin ? styles.btnStyleChange : styles.btnStyle,
                styles.btnLineColor,
              ]}>
              <Text style={[styles.btnTextStyle, styles.btnTextColor2]}>
                로그인
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 24}}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('JoinCongress')}>
            <Text style={styles.jointext02}>국회의원 ID / PW 발급받기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mb8: {
    marginBottom: 8,
  },
  mt16: {
    marginTop: 16,
  },
  container: {
    height: '100%',
  },
  inner: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  maintit: {
    fontSize: 24,
    textAlign: 'left',
    color: '#313131',
    fontWeight: 'bold',
  },
  labeltext: {
    fontSize: 12,
    color: '#7b7b7b',
    fontWeight: '300',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  inputfocus: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    borderBottomColor: '#f4933a',
    borderTopColor: '#f4933a',
    borderLeftColor: '#f4933a',
    borderRightColor: '#f4933a',
    paddingHorizontal: 20,
  },
  jointext: {
    fontSize: 12,
    fontWeight: '300',
    color: '#7b7b7b',
  },
  jointext02: {
    fontSize: 12,
    fontWeight: '300',
    color: '#7b7b7b',
    textAlign: 'center',
  },
  btnStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#f4933a',
    borderRadius: 8,
    backgroundColor: '#f4933a',
    textAlign: 'center',
  },
  btnStyleChange: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#d87419',
    borderRadius: 8,
    backgroundColor: '#d87419',
    textAlign: 'center',
  },
  btnLine: {
    backgroundColor: 'transparent',
  },
  btnTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: -0.28,
    color: '#ffffff',
  },
});
