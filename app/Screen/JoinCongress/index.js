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
import axios from 'axios';
import Loader from '../../Component/Loader';
import * as Icons from 'react-native-heroicons/outline';

export default function JoinCongress({navigation}) {
  const [joinLoading, setJoinLoading] = useState(false);

  const [emailValue, setEmailValue] = useState('');
  const [codeValue, setCodeValue] = useState('');

  const [emailFocus, setEmailFocus] = useState(false);
  const [codeFocus, setCodeFocus] = useState(false);
  const [completePress, setCompletePress] = useState(false);
  const [modalComplete, setModalComplete] = useState(false);
  const [modalCheck, setModalCheck] = useState(false);

  let disabledComplete = false;
  emailValue.length !== 0 && codeValue.length !== 0
    ? (disabledComplete = false)
    : (disabledComplete = true);

  const getListName = () => {
    axios
      .post('http://144.24.94.124:8091/api/v1/join', {
        memberLoginId: emailValue,
        monaCd: codeValue,
      })
      .then(res => {
        if (res.data.data.error == 0) {
          setJoinLoading(false);
          setModalComplete(true);
        } else {
          setJoinLoading(false);
          setModalCheck(true);
        }
      })
      .catch(err => {
        setModalCheck(true);
        console.log(err);
      });
  };

  const onValid = () => {
    setJoinLoading(true);
    const regex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!regex.test(emailValue) && codeValue.length !== 0) {
      setJoinLoading(false);
      setModalCheck(true);
    } else {
      getListName();
    }
  };

  return (
    <View style={commonStyles.loaderWrap}>
      {joinLoading && <Loader type={'trans'} />}
      <View style={[commonStyles.inner, styles.basic]}>
        <View style={{height: 40, position: 'relative', marginBottom: 48}}>
          <View style={{position: 'absolute', left: 0, top: 0, zIndex: 10}}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation.goBack();
              }}>
              <Icons.ChevronLeftIcon color="#000" size={24} />
            </TouchableOpacity>
          </View>
          <Text style={commonStyles.headerTit}>국회의원 ID/PW 발급받기</Text>
        </View>
        <View>
          <Text style={[commonStyles.maintit, commonStyles.mb24]}>
            국회의원 ID/PW 발급받기
          </Text>

          <ScrollView contentContainerStyle={{paddingBottom: 74}}>
            <View>
              <Text style={[commonStyles.labeltext, commonStyles.mb8]}>
                이메일
              </Text>
              <TextInput
                style={
                  !emailFocus ? commonStyles.input : commonStyles.inputfocus
                }
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
                style={
                  !codeFocus ? commonStyles.input : commonStyles.inputfocus
                }
                name="code"
                value={codeValue}
                onFocus={() => setCodeFocus(true)}
                onBlur={() => setCodeFocus(false)}
                onChange={e => setCodeValue(e.nativeEvent.text)}
              />
              <Text style={[commonStyles.mt8, styles.desc]}>
                본인의 고유 MONA코드를 입력하세요.
              </Text>
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
              <Text style={[commonStyles.btnTextDefault]}>확인</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* modal - 이메일/국회코드 재확인 */}
        <ConfirmModal
          transparent={true}
          btnBoolean={modalCheck}
          onPress={() => {
            setModalCheck(false);
          }}
          titleText={'메일 발송 실패'}
          bodyText={'이메일 또는 국회코드를 다시 확인해주세요.'}
          btnText={'확인'}
        />

        {/* modal - 메일 발송 */}
        <ConfirmModal
          transparent={true}
          btnBoolean={modalComplete}
          onPress={() => {
            setModalComplete(false);
            setEmailValue('');
            setCodeValue('');
            navigation.navigate('Login');
          }}
          titleText={'메일 발송 완료'}
          bodyText={
            '입력한 이메일로 아이디와 비밀번호를 보냈어요.\n' +
            '로그인 페이지에서\n' +
            '발급받은 정보로 로그인 해주세요.'
          }
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
  btnPos: {
    position: 'absolute',
    left: 24,
    bottom: 20,
    width: '100%',
  },
  desc: {
    fontFamily: 'pre400',
    fontSize: 12,
    color: '#7b7b7b',
    letterSpacing: -0.24,
  },
});
