import {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Join() {
  const [step, setStep] = useState(0);

  return (
    <View>
      <View style={styles.basic}>
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
        <View>
          <Text>회원가입</Text>
          <Text>이름</Text>
          <TextInput value={'text'} />
        </View>
        <View style={styles.btnPos}>
          <TouchableOpacity onPress={() => setStep(1)}>
            <View style={[styles.btnStyle, styles.btnLineColor]}>
              <Text style={[styles.btnTextStyle, styles.btnTextColor2]}>
                다음
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text>이메일</Text>
          <View style={styles.inputBtn}>
            <TextInput style={[styles.input, styles.inputSize, styles.mr8]} />
            <View style={styles.btnSize}>
              <TouchableOpacity>
                <View style={[styles.btnStyle, styles.btnBgColor]}>
                  <Text style={[styles.btnTextStyle]}>인증번호</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  basic: {
    position: 'relative',
    minHeight: '100%',
    paddingVertical: 24,
    paddingHorizontal: 24,
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
  btnStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 8,
    backgroundColor: '#d0d0d0',
    textAlign: 'center',
  },
  btnLine: {
    backgroundColor: 'transparent',
  },
  btnLineColor: {
    backgroundColor: 'transparent',
    borderColor: '#f4933a',
  },
  btnBgColor: {
    backgroundColor: '#f4933a',
    borderColor: '#f4933a',
  },
  btnTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: -0.28,
    color: '#ffffff',
  },
  btnTextColor1: {
    color: '#b1b1b1',
  },
  btnTextColor2: {
    color: '#f4933a',
  },
  inputBtn: {
    flexDirection: 'row',
  },
  inputSize: {
    flex: 2.5,
  },
  btnSize: {
    flex: 1,
  },

  mr8: {
    marginRight: 8,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 8,
    paddingHorizontal: 20,
  },
});
