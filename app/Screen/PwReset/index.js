import {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import * as Icons from 'react-native-heroicons/outline';
import {commonStyles} from '../../common';
import ConfirmModal from '../../Component/ConfirmModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function PwReset({navigation}) {
  const loginState = {
    login: true,
    isCon: true,
    email: 'ezicland@naver.com',
    name: '손동윤',
    userCd: 1,
    pw: 'abcd1234', // 비밀번호 임시로 작성
  };

  const [pwResetLoading, setPwResetLoading] = useState(false);

  const [pwValue, setPwValue] = useState('');
  const [newPwValue, setnewPwValue] = useState('');
  const [newPwConfirmValue, setnewPwConfirmValue] = useState('');
  const [pwMsg, setPwMsg] = useState('');

  const [pwFocus, setPwFocus] = useState(false);
  const [newPwFocus, setnewPwFocus] = useState(false);
  const [newPwConfirmFocus, setnewPwConfirmFocus] = useState(false);
  const [pwSecret, setPwSecret] = useState(true);
  const [newPwSecret, setNewPwSecret] = useState(true);
  const [newPwConfirmSecret, setNewPwConfirmSecret] = useState(true);
  const [completePress, setCompletePress] = useState(false);
  const [modalComplete, setModalComplete] = useState(false);
  const [errModal, setErrModal] = useState(false);
  const [loginUser, setLoginUser] = useState(null);

  useEffect(() => {
    const load = async () => {
      const loginUser = await AsyncStorage.getItem('loginUser');
      const loginUserObj = JSON.parse(loginUser);
      setLoginUser(loginUserObj);
    };
    load();
  }, []);

  let disabledComplete = false;
  pwValue.length !== 0 &&
  newPwValue.length !== 0 &&
  newPwConfirmValue.length !== 0
    ? (disabledComplete = false)
    : (disabledComplete = true);

  const onValid = () => {
    // console.log('TEST');
    if (newPwValue === newPwConfirmValue) {
      if (newPwValue.length < 6 || newPwValue.length > 20) {
        setPwMsg('비밀번호가 너무 짧습니다.');
      } else if (newPwValue.search(/\s/) !== -1) {
        setPwMsg('공백없이 입력해주세요.');
      } else if (
        newPwValue.search(/[0-9]/g) < 0 ||
        newPwValue.search(/[a-z]/g) < 0
      ) {
        setPwMsg('영문, 숫자를 혼합하여 입력해주세요.');
      } else {
        // console.log('TEST11');
        setPwResetLoading(true);
        changePw();
        setPwResetLoading(false);
      }
    } else {
      setPwMsg('변경할 비밀번호가 일치하지 않습니다.');
    }
  };
  const changePw = async () => {
    let loginUser = await AsyncStorage.getItem('loginUser');
    const loginUserObj = JSON.parse(loginUser);

    axios
      .post('http://144.24.94.124:8091/api/v1/mypage/update', {
        memberId: loginUserObj.memberId,
        changePw: newPwValue,
        memberLoginPw: pwValue,
      })
      .then(res => {
        if (res.data.error == 0) {
          setModalComplete(true);
        } else {
          setErrModal(true);
        }
      });
  };
  // console.log(loginUser);
  return (
    <View style={commonStyles.loaderWrap}>
      {pwResetLoading && <Loader type={'trans'} />}

      <View style={styles.pwResetTit}>
        <Text style={styles.pwResetTitText}>내정보 수정</Text>
        <View style={{position: 'absolute', left: 0, top: 13, zIndex: 10}}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icons.ChevronLeftIcon color="#000" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 16,
          paddingBottom: 32,
        }}>
        <View>
          <Text style={[commonStyles.labeltext, commonStyles.mb8]}>이름</Text>
          <TextInput
            style={[commonStyles.input, {color: '#b1b1b1'}]}
            name="name"
            value={loginUser != null && loginUser.memberName}
            editable={false}
          />
        </View>
        <View style={commonStyles.mt8}>
          <Text style={[commonStyles.labeltext, commonStyles.mb8]}>이메일</Text>
          <TextInput
            style={[commonStyles.input, {color: '#b1b1b1'}]}
            name="email"
            value={loginUser != null && loginUser.memberLoginId}
            editable={false}
          />
        </View>
        <View style={commonStyles.mt8}>
          <Text style={[commonStyles.labeltext, commonStyles.mb8]}>
            현재 비밀번호
          </Text>
          <View style={{position: 'relative'}}>
            <TextInput
              style={!pwFocus ? commonStyles.input : commonStyles.inputfocus}
              name="pw"
              value={pwValue}
              onFocus={() => setPwFocus(true)}
              onBlur={() => setPwFocus(false)}
              onChange={e => setPwValue(e.nativeEvent.text)}
              secureTextEntry={pwSecret}
            />
            <View
              style={{
                position: 'absolute',
                top: 12,
                right: 15,
              }}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setPwSecret(prev => !prev)}>
                {pwSecret === true ? (
                  <Icons.EyeSlashIcon
                    color="#d0d0d0"
                    fill="transparent"
                    size={24}
                  />
                ) : (
                  <Icons.EyeIcon color="#d0d0d0" fill="transparent" size={24} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={commonStyles.mt8}>
          <Text style={[commonStyles.labeltext, commonStyles.mb8]}>
            새 비밀번호
          </Text>
          <View style={{position: 'relative'}}>
            <TextInput
              style={!newPwFocus ? commonStyles.input : commonStyles.inputfocus}
              name="newPw"
              value={newPwValue}
              onFocus={() => setnewPwFocus(true)}
              onBlur={() => setnewPwFocus(false)}
              onChange={e => setnewPwValue(e.nativeEvent.text)}
              secureTextEntry={newPwSecret}
            />
            <View
              style={{
                position: 'absolute',
                top: 12,
                right: 15,
              }}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setNewPwSecret(prev => !prev)}>
                {newPwSecret === true ? (
                  <Icons.EyeSlashIcon
                    color="#d0d0d0"
                    fill="transparent"
                    size={24}
                  />
                ) : (
                  <Icons.EyeIcon color="#d0d0d0" fill="transparent" size={24} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={commonStyles.mt8}>
          <Text style={[commonStyles.labeltext, commonStyles.mb8]}>
            새 비밀번호 확인
          </Text>
          <View style={{position: 'relative'}}>
            <TextInput
              style={
                !newPwConfirmFocus
                  ? commonStyles.input
                  : commonStyles.inputfocus
              }
              name="newPwConfirm"
              value={newPwConfirmValue}
              onFocus={() => setnewPwConfirmFocus(true)}
              onBlur={() => setnewPwConfirmFocus(false)}
              onChange={e => setnewPwConfirmValue(e.nativeEvent.text)}
              secureTextEntry={newPwConfirmSecret}
            />
            <View
              style={{
                position: 'absolute',
                top: 12,
                right: 15,
              }}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setNewPwConfirmSecret(prev => !prev)}>
                {newPwConfirmSecret === true ? (
                  <Icons.EyeSlashIcon
                    color="#d0d0d0"
                    fill="transparent"
                    size={24}
                  />
                ) : (
                  <Icons.EyeIcon color="#d0d0d0" fill="transparent" size={24} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {pwMsg.length !== 0 && (
          <Text style={[commonStyles.mt8, commonStyles.validText]}>
            {pwMsg}
          </Text>
        )}

        <View style={commonStyles.mt56}>
          <TouchableOpacity
            activeOpacity={1}
            disabled={disabledComplete}
            onPress={onValid}
            onPressIn={() => setCompletePress(true)}
            onPressOut={() => setCompletePress(false)}>
            <View
              style={
                disabledComplete
                  ? [commonStyles.btnDefault]
                  : !completePress
                  ? [commonStyles.btnDefault, commonStyles.btnBgColor]
                  : [commonStyles.btnDefault, commonStyles.btnPressColor]
              }>
              <Text style={[commonStyles.btnTextDefault]}>수정</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* modal - 비밀번호 변경 완료 */}
      <ConfirmModal
        transparent={true}
        btnBoolean={modalComplete}
        onPress={() => {
          setModalComplete(false);
          navigation.navigate('MyPage');
        }}
        titleText={'수정 완료'}
        bodyText={'내 정보가 수정되었어요.'}
        btnText={'확인'}
      />
      <ConfirmModal
        transparent={true}
        btnBoolean={errModal}
        onPress={() => {
          setErrModal(false);
        }}
        titleText={'수정 완료'}
        bodyText={'현재 비밀번호가 틀렸어요.'}
        btnText={'확인'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pwResetTit: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 24,
    marginRight: 24,
    height: 50,
    position: 'relative',
  },
  pwResetTitText: {
    fontFamily: 'pre700',
    fontSize: 16,
    color: '#313131',
    letterSpacing: -0.32,
  },
});
