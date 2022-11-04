import {useState} from 'react';
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
import axios from 'axios';
import Loader from '../../Component/Loader';

export default function Join({navigation}) {
  const [step, setStep] = useState(0);
  const [joinLoading, setJoinLoading] = useState(false);

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [pwConfirmValue, setPwConfirmValue] = useState('');

  const [emailMsg, setEmailMsg] = useState('');
  const [pwMsg, setPwMsg] = useState('');

  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [numberFocus, setNumberFocus] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);
  const [pwConfirmFocus, setPwConfirmFocus] = useState(false);
  const [nextPress, setNextPress] = useState(false);
  const [completePress, setCompletePress] = useState(false);
  const [emailPress, setEmailPress] = useState(false);
  const [numberPress, setNumberPress] = useState(false);
  const [pwSecret, setPwSecret] = useState(true);
  const [pwConfirmSecret, setPwConfirmSecret] = useState(true);
  const [emailSend, setEmailSend] = useState(false);
  const [modalVertify, setModalVertify] = useState(false);
  const [modalComplete, setModalComplete] = useState(false);
  const [emailFail, setEmailFail] = useState(false);
  const [codeFail, setCodeFail] = useState(false);
  const [codeSuccess, setCodeSuccess] = useState(false);

  //이메일 인증 state
  const [emailCode, setEmailCode] = useState(null);

  let disabledNext = false;
  let disabledComplete = false;
  let disabledEmail = false;
  let disabledNumber = false;
  nameValue.length !== 0 ? (disabledNext = false) : (disabledNext = true);
  emailValue.length !== 0 &&
  numberValue.length !== 0 &&
  pwValue.length !== 0 &&
  pwConfirmValue.length !== 0
    ? (disabledComplete = false)
    : (disabledComplete = true);
  emailValue.length !== 0 ? (disabledEmail = false) : (disabledEmail = true);
  numberValue.length !== 0 ? (disabledNumber = false) : (disabledNumber = true);
  axios.defaults.withCredentials = true;
  /**
   * 통신 메소드*/

  //1. 이메일 인증번호 발급
  const getEmailVaild = () => {
    axios
      .get('http://144.24.94.124:8091/api/v1/join', {
        params: {
          memberLoginId: emailValue,
        },
        headers: {
          withCredentials: true,
        },
      })
      .then(res => {
        console.log(res.data);
        if (res.data.data.check === 0) {
          setEmailCode(res.data.data.code);
          setJoinLoading(false);
          setModalVertify(true);
        } else {
          setJoinLoading(false);
          setEmailFail(true);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  //2. 회원가입 통신
  const userJoin = () => {
    axios
      .post('http://144.24.94.124:8091/api/v1/join', {
        memberLoginId: emailValue,
        memberLoginPw: pwValue,
        memberName: nameValue,
      })
      .then(res => {
        console.log(res.data);
        if (res.data.data.error == 0) {
          setJoinLoading(false);
          setModalComplete(true);
          setPwMsg('');
        } else {
          console.log('회원가입 실패');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onValidEmail = () => {
    const regex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!regex.test(emailValue)) {
      setEmailMsg('올바른 이메일 주소를 입력해주세요.');
    } else {
      setJoinLoading(true);
      setEmailMsg('');
      getEmailVaild();
    }
  };
  const onValid = () => {
    if (emailCode) {
      if (pwValue === pwConfirmValue) {
        if (pwValue.length < 6 || pwValue.length > 20) {
          setPwMsg('비밀번호가 너무 짧습니다.');
        } else if (pwValue.search(/\s/) !== -1) {
          setPwMsg('공백없이 입력해주세요.');
        } else if (
          pwValue.search(/[0-9]/g) < 0 ||
          pwValue.search(/[a-z]/g) < 0
        ) {
          setPwMsg('영문, 숫자를 혼합하여 입력해주세요.');
        } else {
          setJoinLoading(true);
          userJoin();
        }
      } else {
        setPwMsg('비밀번호가 일치하지 않습니다.');
      }
    } else {
      setPwMsg('이메일 인증 해주세요.');
    }
  };

  return (
    <View style={commonStyles.loaderWrap}>
      {joinLoading && <Loader type={'trans'} />}
      <View style={[commonStyles.inner, styles.basic]}>
        <View>
          <Text style={styles.percentText}>{step + 1} / 2</Text>
          <View style={styles.percentBar}>
            <View
              style={[
                styles.percentFill,
                step === 0 ? styles.percentFillHalf : styles.percentFillFull,
              ]}
            />
          </View>
        </View>
        <View style={commonStyles.mt48}>
          <Text style={[commonStyles.maintit, commonStyles.mb24]}>
            회원가입
          </Text>

          <ScrollView contentContainerStyle={{paddingBottom: 98}}>
            {step === 0 ? (
              <View>
                <Text style={[commonStyles.labeltext, commonStyles.mb8]}>
                  이름
                </Text>
                <TextInput
                  style={
                    !nameFocus ? commonStyles.input : commonStyles.inputfocus
                  }
                  name="name"
                  value={nameValue}
                  onFocus={() => setNameFocus(true)}
                  onBlur={() => setNameFocus(false)}
                  onChange={e => setNameValue(e.nativeEvent.text)}
                  //onChangeText를 사용하면 change 된 value값만 가져올수 있습니다
                  //onChange={text => setNameValue(text)}
                />
              </View>
            ) : (
              <View>
                <View>
                  <Text style={[commonStyles.labeltext, commonStyles.mb8]}>
                    이메일
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <TextInput
                      style={
                        !emailFocus
                          ? [commonStyles.input, commonStyles.mr8, {flex: 2.5}]
                          : [
                              commonStyles.inputfocus,
                              commonStyles.mr8,
                              {flex: 2.5},
                            ]
                      }
                      name="email"
                      value={emailValue}
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                      onChange={e => setEmailValue(e.nativeEvent.text)}
                    />
                    <View style={{flex: 1}}>
                      <TouchableOpacity
                        activeOpacity={1}
                        disabled={disabledEmail}
                        onPress={onValidEmail}
                        onPressIn={() => setEmailPress(true)}
                        onPressOut={() => setEmailPress(false)}>
                        {!emailSend ? (
                          <View
                            style={
                              !emailPress
                                ? [
                                    commonStyles.btnDefault,
                                    commonStyles.btnBgColor,
                                  ]
                                : [
                                    commonStyles.btnDefault,
                                    commonStyles.btnPressColor,
                                  ]
                            }>
                            <Text
                              style={[
                                commonStyles.btnTextDefault,
                                {fontFamily: 'pre400'},
                              ]}>
                              인증번호
                            </Text>
                          </View>
                        ) : (
                          <View
                            style={[
                              commonStyles.btnDefault,
                              commonStyles.btnLine,
                              commonStyles.btnLineColor,
                            ]}>
                            <Text
                              style={[
                                commonStyles.btnTextDefault,
                                commonStyles.btnTextColor2,
                                {fontFamily: 'pre400'},
                              ]}>
                              다시받기
                            </Text>
                          </View>
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                  {emailMsg.length !== 0 && (
                    <Text style={[commonStyles.mt8, commonStyles.validText]}>
                      {emailMsg}
                    </Text>
                  )}
                </View>

                <View style={commonStyles.mt8}>
                  <Text style={[commonStyles.labeltext, commonStyles.mb8]}>
                    인증번호 입력
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <TextInput
                      style={
                        !numberFocus
                          ? [commonStyles.input, commonStyles.mr8, {flex: 2.5}]
                          : [
                              commonStyles.inputfocus,
                              commonStyles.mr8,
                              {flex: 2.5},
                            ]
                      }
                      name="number"
                      value={numberValue}
                      onFocus={() => setNumberFocus(true)}
                      onBlur={() => setNumberFocus(false)}
                      onChange={e => setNumberValue(e.nativeEvent.text)}
                    />
                    <View style={{flex: 1}}>
                      <TouchableOpacity
                        activeOpacity={1}
                        disabled={disabledNumber}
                        onPressIn={() => setNumberPress(true)}
                        onPressOut={() => setNumberPress(false)}
                        onPress={() => {
                          setJoinLoading(true);
                          console.log(numberValue, 'nv');
                          console.log(emailCode, 'em');

                          if (numberValue == emailCode) {
                            setJoinLoading(false);
                            setCodeSuccess(true);
                            setEmailCode(true);
                          } else {
                            setJoinLoading(false);
                            setCodeFail(true);
                          }
                        }}>
                        {!emailSend ? (
                          <View
                            style={[
                              commonStyles.btnDefault,
                              commonStyles.btnLine,
                            ]}>
                            <Text
                              style={[
                                commonStyles.btnTextDefault,
                                commonStyles.btnTextColor1,
                                {fontFamily: 'pre400'},
                              ]}>
                              인증확인
                            </Text>
                          </View>
                        ) : (
                          <View
                            style={
                              !numberPress
                                ? [
                                    commonStyles.btnDefault,
                                    commonStyles.btnBgColor,
                                  ]
                                : [
                                    commonStyles.btnDefault,
                                    commonStyles.btnPressColor,
                                  ]
                            }>
                            <Text
                              style={[
                                commonStyles.btnTextDefault,
                                {fontFamily: 'pre400'},
                              ]}>
                              인증확인
                            </Text>
                          </View>
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={commonStyles.mt8}>
                  <Text style={[commonStyles.labeltext, commonStyles.mb8]}>
                    비밀번호
                  </Text>
                  <View style={{position: 'relative'}}>
                    <TextInput
                      style={
                        !pwFocus
                          ? [commonStyles.input, {paddingRight: 54}]
                          : [commonStyles.inputfocus, {paddingRight: 54}]
                      }
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
                          <Icons.EyeIcon
                            color="#d0d0d0"
                            fill="transparent"
                            size={24}
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={commonStyles.mt8}>
                  <Text style={[commonStyles.labeltext, commonStyles.mb8]}>
                    비밀번호 확인
                  </Text>
                  <View style={{position: 'relative'}}>
                    <TextInput
                      style={
                        !pwConfirmFocus
                          ? [commonStyles.input, {paddingRight: 54}]
                          : [commonStyles.inputfocus, {paddingRight: 54}]
                      }
                      name="pw"
                      value={pwConfirmValue}
                      onFocus={() => setPwConfirmFocus(true)}
                      onBlur={() => setPwConfirmFocus(false)}
                      onChange={e => setPwConfirmValue(e.nativeEvent.text)}
                      secureTextEntry={pwConfirmSecret}
                    />
                    <View
                      style={{
                        position: 'absolute',
                        top: 12,
                        right: 15,
                      }}>
                      <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => setPwConfirmSecret(prev => !prev)}>
                        {pwConfirmSecret === true ? (
                          <Icons.EyeSlashIcon
                            color="#d0d0d0"
                            fill="transparent"
                            size={24}
                          />
                        ) : (
                          <Icons.EyeIcon
                            color="#d0d0d0"
                            fill="transparent"
                            size={24}
                          />
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
              </View>
            )}
          </ScrollView>
        </View>

        {step === 0 ? (
          <View style={styles.btnPos}>
            <TouchableOpacity
              activeOpacity={1}
              disabled={disabledNext}
              onPress={() => setStep(1)}
              onPressIn={() => setNextPress(true)}
              onPressOut={() => setNextPress(false)}>
              <View
                style={
                  disabledNext
                    ? [commonStyles.btnDefault]
                    : !nextPress
                    ? [commonStyles.btnDefault, commonStyles.btnBgColor]
                    : [commonStyles.btnDefault, commonStyles.btnPressColor]
                }>
                <Text style={[commonStyles.btnTextDefault]}>다음</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.btnPos}>
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
                <Text style={[commonStyles.btnTextDefault]}>완료</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}

        {/* modal - 인증번호 발송 */}
        <ConfirmModal
          transparent={true}
          btnBoolean={modalVertify}
          onPress={() => {
            setModalVertify(false);
            setEmailSend(true);
          }}
          titleText={'인증번호 발송 완료'}
          bodyText={
            '입력한 이메일로 인증번호를 발송했어요.\n' +
            '인증번호 입력창에 인증번호를 입력하고\n' +
            '인증확인 버튼을 눌려주세요.'
          }
          btnText={'확인'}
        />

        {/* modal - 회원가입 완료 */}
        <ConfirmModal
          transparent={true}
          btnBoolean={modalComplete}
          onPress={() => {
            setModalComplete(false);
            navigation.navigate('Login');
          }}
          titleText={'회원가입 완료'}
          bodyText={'회원가입이 완료되었습니다.'}
          btnText={'확인'}
        />

        {/* modal - 이메일 중복/오류 */}
        <ConfirmModal
          transparent={true}
          btnBoolean={emailFail}
          onPress={() => {
            setEmailFail(false);
          }}
          titleText={'이메일 오류'}
          bodyText={
            '이메일이 중복이거나 잘못되엇습니다.\n' + '다시 시도해주세요'
          }
          btnText={'확인'}
        />

        {/* modal - 인증번호 성공 */}
        <ConfirmModal
          transparent={true}
          btnBoolean={codeSuccess}
          onPress={() => {
            setCodeSuccess(false);
          }}
          titleText={'인증 성공'}
          bodyText={'이메일 인증 성공!'}
          btnText={'확인'}
        />

        {/* modal - 인증번호 오류 */}
        <ConfirmModal
          transparent={true}
          btnBoolean={codeFail}
          onPress={() => {
            setCodeFail(false);
          }}
          titleText={'인증 실패'}
          bodyText={'이메일 인증 실패입니다. 다시 시도해주세요'}
          btnText={'확인'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  basic: {
    position: 'relative',
    height: '100%',
    paddingVertical: 24,
    paddingBottom: 74,
  },
  percentText: {
    marginBottom: 4,
    textAlign: 'right',
    letterSpacing: -0.24,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#b1b1b1',
  },
  percentBar: {
    width: '100%',
    height: 4,
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  percentFill: {
    width: '50%',
    height: '100%',
    backgroundColor: '#fda95c',
  },
  percentFillHalf: {
    width: '50%',
  },
  percentFillFull: {
    width: '100%',
  },
  btnPos: {
    position: 'absolute',
    left: 24,
    bottom: 20,
    width: '100%',
  },
});
