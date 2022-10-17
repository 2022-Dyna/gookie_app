import {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {commonStyles} from '../../common';

export default function Join() {
  const [step, setStep] = useState(0);
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [VertifyFocus, setVertifyFocus] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [vertifyValue, setVertifyValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [disabledNext, setDisabledNext] = useState([commonStyles.btnDefault]);
  const [disabledComplete, setDisabledComplete] = useState([
    commonStyles.btnDefault,
  ]);
  const [pwSecret, setPwSecret] = useState(true);
  const [modalVertify, setModalVertify] = useState(false);
  const [emailSend, setEmailSend] = useState(false);

  let disabled = false;
  let disabled2 = false;
  nameValue.length !== 0 ? (disabled = false) : (disabled = true);
  emailValue.length !== 0 && vertifyValue.length !== 0 && pwValue.length !== 0
    ? (disabled2 = false)
    : (disabled2 = true);
  useEffect(() => {
    disabled
      ? setDisabledNext([commonStyles.btnDefault])
      : setDisabledNext([commonStyles.btnDefault, commonStyles.btnBgColor]);
  }, [disabled]);
  useEffect(() => {
    disabled2
      ? setDisabledComplete([commonStyles.btnDefault])
      : setDisabledComplete([commonStyles.btnDefault, commonStyles.btnBgColor]);
  }, [disabled2]);

  return (
    <View>
      <View style={[commonStyles.inner, styles.basic]}>
        <View>
          <Text style={styles.percentText}>{step + 1}/2</Text>
          <View style={styles.percentBar}>
            <View
              style={[
                styles.percentFill,
                step === 0 ? styles.percentFillHalf : styles.percentFillFull,
              ]}
            />
          </View>
        </View>
        <View style={commonStyles.mt32}>
          <Text style={[commonStyles.maintit, commonStyles.mb24]}>
            회원가입
          </Text>

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
                      onPress={() => setModalVertify(true)}>
                      {!emailSend ? (
                        <View
                          style={[
                            commonStyles.btnDefault,
                            commonStyles.btnBgColor,
                          ]}>
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
              </View>

              <View style={commonStyles.mt8}>
                <Text style={[commonStyles.labeltext, commonStyles.mb8]}>
                  인증번호 입력
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    style={
                      !VertifyFocus
                        ? [commonStyles.input, commonStyles.mr8, {flex: 2.5}]
                        : [
                            commonStyles.inputfocus,
                            commonStyles.mr8,
                            {flex: 2.5},
                          ]
                    }
                    name="vertifyNum"
                    value={vertifyValue}
                    onFocus={() => setVertifyFocus(true)}
                    onBlur={() => setVertifyFocus(false)}
                    onChange={e => setVertifyValue(e.nativeEvent.text)}
                  />
                  <View style={{flex: 1}}>
                    <TouchableOpacity activeOpacity={1}>
                      <View
                        style={
                          !emailSend
                            ? [commonStyles.btnDefault, commonStyles.btnLine]
                            : [commonStyles.btnDefault, commonStyles.btnBgColor]
                        }>
                        <Text
                          style={
                            !emailSend
                              ? [
                                  commonStyles.btnTextDefault,
                                  commonStyles.btnTextColor1,
                                ]
                              : [commonStyles.btnTextDefault]
                          }>
                          인증확인
                        </Text>
                      </View>
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
                        <Icon
                          color={'#d0d0d0'}
                          name="eye-off-outline"
                          size={24}
                        />
                      ) : (
                        <Icon color={'#d0d0d0'} name="eye-outline" size={24} />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>

        {step === 0 ? (
          <View style={styles.btnPos}>
            <TouchableOpacity
              activeOpacity={1}
              disabled={disabled}
              onPress={() => setStep(1)}>
              <View style={disabledNext}>
                <Text style={[commonStyles.btnTextDefault]}>다음</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.btnPos}>
            <TouchableOpacity activeOpacity={1} disabled={disabled2}>
              <View style={disabledComplete}>
                <Text style={[commonStyles.btnTextDefault]}>완료</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}

        <Modal
          transparent={true}
          visible={modalVertify}
          onRequestClose={() => {
            setModalVertify(!modalVertify);
          }}>
          <View style={commonStyles.modalWrap}>
            <View style={commonStyles.modalView}>
              <View style={commonStyles.modalTextWrap}>
                <Text style={[commonStyles.modalTitle, commonStyles.mb24]}>
                  인증번호 발송 완료
                </Text>
                <Text style={commonStyles.modalDesc}>
                  입력한 이메일로 인증번호를 발송했어요.{'\n'}
                  인증번호 입력창에 인증번호를 입력하고,{'\n'}
                  인증확인 버튼을 눌려주세요.
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setModalVertify(!modalVertify);
                  setEmailSend(!emailSend);
                }}>
                <View style={commonStyles.modalBtn}>
                  <Text style={commonStyles.modalBtnText}>확인</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  basic: {
    position: 'relative',
    minHeight: '100%',
    paddingVertical: 24,
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
