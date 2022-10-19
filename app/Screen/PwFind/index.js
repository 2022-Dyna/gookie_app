import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {commonStyles} from '../../common';
import ConfirmModal from '../../Component/ConfirmModal';

export default function PwFind({navigation}) {
  const [emailValue, setEmailValue] = useState('');
  const [emailMeg, setEmailMsg] = useState('');

  const [emailFocus, setEmailFocus] = useState(false);
  const [completePress, setCompletePress] = useState(false);
  const [modalComplete, setModalComplete] = useState(false);

  let disabledComplete = false;
  emailValue.length !== 0
    ? (disabledComplete = false)
    : (disabledComplete = true);

  const onValid = () => {
    const regex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!regex.test(emailValue)) {
      setEmailMsg('올바른 이메일 주소를 입력해주세요.');
    } else {
      setModalComplete(true);
    }
  };

  return (
    <View>
      <View style={[commonStyles.inner, styles.basic]}>
        <View>
          <Text style={[commonStyles.maintit, commonStyles.mb24]}>
            비밀번호 찾기
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
            <Text style={[commonStyles.mt8, styles.desc]}>
              입력하신 이메일로 임시비밀번호가 발급됩니다.
            </Text>
            <Text style={[commonStyles.mt8, styles.validText]}>{emailMeg}</Text>
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

        {/* modal - 메일 발송 */}
        <ConfirmModal
          transparent={true}
          btnBoolean={modalComplete}
          onPress={() => {
            setModalComplete(false);
            navigation.navigate('Login');
          }}
          titleText={'메일 발송 완료'}
          bodyText={'입력한 이메일로 임시 비밀번호를 발급했어요.'}
          btnText={'확인'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  basic: {
    position: 'relative',
    minHeight: '100%',
    paddingVertical: 48,
    paddingBottom: 74,
  },
  btnPos: {
    position: 'absolute',
    left: 24,
    bottom: 20,
    width: '100%',
  },
  desc: {
    fontSize: 12,
    letterSpacing: -0.24,
    color: '#7b7b7b',
  },
  validText: {
    fontSize: 12,
    letterSpacing: -0.24,
    color: '#ff0000',
  },
});
