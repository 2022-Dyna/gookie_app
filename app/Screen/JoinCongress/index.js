import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import * as Icons from 'react-native-heroicons/outline';
import {commonStyles} from '../../common';

export default function JoinCongress({navigation}) {
  const [emailValue, setEmailValue] = useState('');
  const [codeValue, setCodeValue] = useState('');

  const [emailFocus, setEmailFocus] = useState(false);
  const [codeFocus, setCodeFocus] = useState(false);
  const [completePress, setCompletePress] = useState(false);
  const [mdCheckPress, setMdCheckPress] = useState(false);
  const [mdCompletePress, setMdCompletePress] = useState(false);
  const [modalComplete, setModalComplete] = useState(false);
  const [modalCheck, setModalCheck] = useState(false);

  let disabledComplete = false;
  emailValue.length !== 0 && emailValue.length !== 0 && codeValue.length !== 0
    ? (disabledComplete = false)
    : (disabledComplete = true);

  const onValid = () => {
    if (true) {
      // success
      setModalComplete(true);
    } else {
      // error
      setModalCheck(true);
    }
  };

  return (
    <View>
      <View style={[commonStyles.inner, styles.basic]}>
        <View>
          <Text style={[commonStyles.maintit, commonStyles.mb24]}>
            국회의원 ID/PW 발급받기
          </Text>
          <View>
            <Text style={[commonStyles.labeltext, commonStyles.mb8]}>
              이메일
            </Text>
            <TextInput
              style={!emailFocus ? commonStyles.input : commonStyles.inputfocus}
              name="email"
              value={emailValue}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              onChange={e => setEmailValue(e.nativeEvent.text)}
            />
          </View>
          <View style={commonStyles.mt8}>
            <Text style={[commonStyles.labeltext, commonStyles.mb8]}>
              국회코드
            </Text>
            <TextInput
              style={!codeFocus ? commonStyles.input : commonStyles.inputfocus}
              name="code"
              value={codeValue}
              onFocus={() => setCodeFocus(true)}
              onBlur={() => setCodeFocus(false)}
              onChange={e => setCodeValue(e.nativeEvent.text)}
            />
          </View>
        </View>

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
              <Text style={[commonStyles.btnTextDefault]}>확인</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* modal - 이메일/국회코드 재확인 */}
        <Modal
          transparent={true}
          visible={modalCheck}
          onRequestClose={() => {
            setModalCheck(false);
          }}>
          <View style={commonStyles.modalWrap}>
            <View style={commonStyles.modalView}>
              <View style={commonStyles.modalTextWrap}>
                <Text style={commonStyles.modalDesc}>
                  이메일 혹은 국회코드를 다시 확인해주세요.
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setModalCheck(false)}
                onPressIn={() => setMdCheckPress(true)}
                onPressOut={() => setMdCheckPress(false)}>
                <View
                  style={
                    !mdCheckPress
                      ? [commonStyles.modalBtn]
                      : [commonStyles.modalBtn, commonStyles.modalBtnPressColor]
                  }>
                  <Text style={commonStyles.modalBtnText}>확인</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* modal - 아이디/비밀번호 발송 */}
        <Modal
          transparent={true}
          visible={modalComplete}
          onRequestClose={() => {
            setModalComplete(false);
          }}>
          <View style={commonStyles.modalWrap}>
            <View style={commonStyles.modalView}>
              <View style={commonStyles.modalTextWrap}>
                <Text style={[commonStyles.modalTitle, commonStyles.mb24]}>
                  아이디/비밀번호 발송 완료
                </Text>
                <Text style={commonStyles.modalDesc}>
                  입력한 이메일로 아이디와 비밀번호를 발송했어요.{'\n'}
                  로그인 페이지에서{'\n'}
                  발급받은 정보로 로그인해주세요.
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  setModalComplete(false);
                  navigation.navigate('Login');
                }}
                onPressIn={() => setMdCompletePress(true)}
                onPressOut={() => setMdCompletePress(false)}>
                <View
                  style={
                    !mdCompletePress
                      ? [commonStyles.modalBtn]
                      : [commonStyles.modalBtn, commonStyles.modalBtnPressColor]
                  }>
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
  btnPos: {
    position: 'absolute',
    left: 24,
    bottom: 20,
    width: '100%',
  },
});
