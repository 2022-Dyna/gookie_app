import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {commonStyles} from '../../common';
import ConfirmModal from '../../Component/ConfirmModal';

export default function PwReset({navigation}) {
  const [pwValue, setPwValue] = useState('');
  const [pwConfirmValue, setPwConfirmValue] = useState('');
  const [pwMsg, setPwMsg] = useState('');

  const [pwFocus, setPwFocus] = useState(false);
  const [pwConfirmFocus, setPwConfirmFocus] = useState(false);
  const [completePress, setCompletePress] = useState(false);
  const [modalComplete, setModalComplete] = useState(false);

  let disabledComplete = false;
  pwValue.length !== 0 && pwConfirmValue.length !== 0
    ? (disabledComplete = false)
    : (disabledComplete = true);

  const onValid = () => {
    if (pwValue === pwConfirmValue) {
      if (pwValue.length < 6 || pwValue.length > 20) {
        setPwMsg('비밀번호가 너무 짧습니다.');
      } else if (pwValue.search(/\s/) !== -1) {
        setPwMsg('공백없이 입력해주세요.');
      } else if (pwValue.search(/[0-9]/g) < 0 || pwValue.search(/[a-z]/g) < 0) {
        setPwMsg('영문, 숫자를 혼합하여 입력해주세요.');
      } else {
        setModalComplete(true);
      }
    } else {
      setPwMsg('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <View>
      <View style={[commonStyles.inner, styles.basic]}>
        <View>
          <Text style={[commonStyles.maintit, commonStyles.mb24]}>
            비밀번호 재설정
          </Text>

          <ScrollView contentContainerStyle={{paddingBottom: 74}}>
            <View>
              <Text style={[commonStyles.labeltext, commonStyles.mb8]}>
                새 비밀번호
              </Text>
              <TextInput
                style={!pwFocus ? commonStyles.input : commonStyles.inputfocus}
                name="pw"
                value={pwValue}
                onFocus={() => setPwFocus(true)}
                onBlur={() => setPwFocus(false)}
                onChange={e => setPwValue(e.nativeEvent.text)}
                secureTextEntry={true}
              />
            </View>
            <View style={commonStyles.mt8}>
              <Text style={[commonStyles.labeltext, commonStyles.mb8]}>
                새 비밀번호 확인
              </Text>
              <TextInput
                style={
                  !pwConfirmFocus ? commonStyles.input : commonStyles.inputfocus
                }
                name="pwConfirm"
                value={pwConfirmValue}
                onFocus={() => setPwConfirmFocus(true)}
                onBlur={() => setPwConfirmFocus(false)}
                onChange={e => setPwConfirmValue(e.nativeEvent.text)}
                secureTextEntry={true}
              />
              {pwMsg.length !== 0 && (
                <Text style={[commonStyles.mt8, commonStyles.validText]}>
                  {pwMsg}
                </Text>
              )}
            </View>
          </ScrollView>
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
              <Text style={[commonStyles.btnTextDefault]}>재설정</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* modal - 비밀번호 변경 */}
        <ConfirmModal
          transparent={true}
          btnBoolean={modalComplete}
          onPress={() => {
            setModalComplete(false);
            navigation.navigate('Home');
          }}
          titleText={'비밀번호 변경 완료'}
          bodyText={'비밀번호가 변경되었습니다.'}
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
    paddingVertical: 48,
    paddingBottom: 74,
  },
  btnPos: {
    position: 'absolute',
    left: 24,
    bottom: 20,
    width: '100%',
  },
});
