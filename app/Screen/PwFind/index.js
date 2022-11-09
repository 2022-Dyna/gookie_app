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
import Loader from '../../Component/Loader';
import * as Icons from 'react-native-heroicons/outline';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function PwFind({navigation}) {
  const [pwFindLoading, setPwFindLoading] = useState(false);

  const [emailValue, setEmailValue] = useState('');
  const [emailMsg, setEmailMsg] = useState('');

  const [emailFocus, setEmailFocus] = useState(false);
  const [completePress, setCompletePress] = useState(false);
  const [modalComplete, setModalComplete] = useState(false);
  const [errModal, setErrModal] = useState(false);

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
      setPwFindLoading(true);
      changePw()
    }
  };
  const changePw = async () =>{

    axios.post('http://144.24.94.124:8091/api/v1/mypage/changePw',{

      email:emailValue

    }).then(res=> {
      if(res.data.error==0){
        setModalComplete(true);
      }else {
        setErrModal(true);
      }
      setPwFindLoading(false);

    });
  }

  return (
    <View style={commonStyles.loaderWrap}>
      {pwFindLoading && <Loader type={'trans'} />}
      <View style={[commonStyles.inner, styles.basic]}>
        <View style={{height: 50, position: 'relative', marginBottom: 48}}>
          <View style={{position: 'absolute', left: 0, top: 0}}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation.goBack();
              }}>
              <Icons.ChevronLeftIcon color="#000" size={24} />
            </TouchableOpacity>
          </View>
          <Text style={commonStyles.headerTit}>비밀번호 찾기</Text>
        </View>
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
            {emailMsg.length !== 0 && (
              <Text style={[commonStyles.mt8, commonStyles.validText]}>
                {emailMsg}
              </Text>
            )}
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
          bodyText={
            '입력한 이메일로 아이디와 비밀번호를 보냈어요.\n' +
            '로그인 페이지에서\n' +
            '발급받은 정보로 로그인 해주세요.'
          }
          btnText={'확인'}
        />
        <ConfirmModal
            transparent={true}
            btnBoolean={errModal}
            onPress={() => {
              setErrModal(false);
            }}
            titleText={'이메일 오류'}
            bodyText={
              '입력한 이메일로 가입된 사람이 없습니다.'
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
    fontFamily: 'pre300',
    fontSize: 12,
    color: '#7b7b7b',
    letterSpacing: -0.24,
  },
});
