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

export default function Join({navigation}) {
  const [step, setStep] = useState(0);

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const [emailMsg, setEmailMsg] = useState('');
  const [pwMsg, setPwMsg] = useState('');

  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [numberFocus, setNumberFocus] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);
  const [nextPress, setNextPress] = useState(false);
  const [completePress, setCompletePress] = useState(false);
  const [emailPress, setEmailPress] = useState(false);
  const [numberPress, setNumberPress] = useState(false);
  const [pwSecret, setPwSecret] = useState(true);
  const [emailSend, setEmailSend] = useState(false);
  const [modalVertify, setModalVertify] = useState(false);
  const [modalComplete, setModalComplete] = useState(false);

  let disabledNext = false;
  let disabledComplete = false;
  let disabledEmail = false;
  let disabledNumber = false;
  nameValue.length !== 0 ? (disabledNext = false) : (disabledNext = true);
  emailValue.length !== 0 && numberValue.length !== 0 && pwValue.length !== 0
    ? (disabledComplete = false)
    : (disabledComplete = true);
  emailValue.length !== 0 ? (disabledEmail = false) : (disabledEmail = true);
  numberValue.length !== 0 ? (disabledNumber = false) : (disabledNumber = true);

  const onValidEmail = () => {
    const regex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!regex.test(emailValue)) {
      setEmailMsg('올바른 이메일 주소를 입력해주세요.');
    } else {
      setModalVertify(true);
      setEmailMsg('');
    }
  };
  const onValid = () => {
    if (pwValue.length < 6 || pwValue.length > 20) {
      setPwMsg('비밀번호가 너무 짧습니다.');
    } else if (pwValue.search(/\s/) !== -1) {
      setPwMsg('공백없이 입력해주세요.');
    } else if (pwValue.search(/[0-9]/g) < 0 || pwValue.search(/[a-z]/g) < 0) {
      setPwMsg('영문, 숫자를 혼합하여 입력해주세요.');
    } else {
      setModalComplete(true);
      setPwMsg('');
    }
  };

  return (
    <View>
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
                            <Text style={[commonStyles.btnTextDefault]}>
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
                              ]}>
                              다시받기
                            </Text>
                          </View>
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                  {emailMsg.length !== 0 && (
                    <Text style={[commonStyles.mt8, styles.validText]}>
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
                        onPressOut={() => setNumberPress(false)}>
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
                            <Text style={[commonStyles.btnTextDefault]}>
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
                  {pwMsg.length !== 0 && (
                    <Text style={[commonStyles.mt8, styles.validText]}>
                      {pwMsg}
                    </Text>
                  )}
                </View>
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
  validText: {
    fontSize: 12,
    letterSpacing: -0.24,
    color: '#ff0000',
  },
});
